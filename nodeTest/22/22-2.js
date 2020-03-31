// 导入文件模块，读取电脑上的文件
const fs = require('fs');
// 导入 game.js
const game = require('./game')

// 导入 koa 模块
const koa = require('koa')

// 导入 koa-mount 模块,因为 koa 的本身不具备路由模块
// 所以安装并导入 koa 的中间件，即 koa-mount 路由模块
const mount = require('koa-mount')

// 注册 koa 实例
const app = new koa();

// koa 的路由分发，拦截浏览器默认的图标请求
app.use(
    // 添加路由，因为 koa 的一个实例只能挂载一个路由，所以想要挂载多个路由就需要挂载多个模块
    mount('/favicon.ico', function (ctx) {
        // koa比 express 做了更极致的 response 处理函数
        // 因为 koa 使用异步函数作为中间件的实现方式
        // 所以 koa 可以在等待所有中间件执行完毕之后再统一处理返回值，因此可以用赋值运算符
        ctx.status = 200;
    })
)
// koa 中，使用多个中间件，只能接一个 function，或者一个新的 koa new 实例
const gameKoa = new koa();

// 挂载一个新的 koa 实例
app.use(
    mount('/game', gameKoa)
)

// 给新的 koa 实例，添加多个中间件
// 中间件 1
gameKoa.use(
    async function (ctx, next) {
        const query = ctx.request.query;
        const playerAction = query.action
        let result = game(playerAction)
        ctx.result = result
        if (result == 500) {
            ctx.status = result;
            ctx.body = '你赢了三次，我再也不和你玩了'
            return
        }
        // 使用await 关键字等待后续中间件执行完成
        await next();
        // 就能获得一个准确的洋葱模型效果
        console.log('中间件1')
    })
// 中间件 2 
gameKoa.use(
    async function (ctx, next) {
        if (ctx.result == 400) {
            ctx.status = ctx.result;
            ctx.body = '你作弊，我再也不和你玩了'
            return
        }
        await next()
        console.log('中间件2')
    }
)
// 中间件 3 
gameKoa.use(
    async function (ctx, next) {
        ctx.status = 200;
        ctx.body = ctx.result
        console.log('中间件3')
    }
)

app.use(
    mount('/', function (ctx, next) {
        ctx.body = fs.readFileSync(__dirname + '/22-1.html', 'utf-8')
    })
)

app.listen(3000);


// 中间件的打印顺序为 ：
// 中间件3
// 中间件2
// 中间件1