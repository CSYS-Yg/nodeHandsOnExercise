// 导入文件模块，读取电脑上的文件
const fs = require('fs');
// 引入 express
const express = require('express');
// 导入 game.js
const game = require('./game')
// 注册 express 实例
const app = express();

// 路由分发，拦截浏览器默认的图标请求
app.get('/favion.ico', function (request, response) {
    // 一句 status(200) 代替 writeHead(200); end();
    response.status(200)
    return;
})
// 
app.get('/game',
    // 中间件
    function (request, response, next) {
        const query = request.query;
        const playerAction = query.action
        let result = game(playerAction)
        if (result == 500) {
            response.status(result);
            response.send('你赢了三次，我再也不和你玩了');
            return
        }
        // 把用户操作挂在response上传递给下一个中间件
        response.result = result
        // 通过next执行后续中间件
        next();
        // 当后续中间件执行完之后，会执行到这个位置
        console.log('中间件1')
    },
    // 中间件 2 
    function (request, response, next) {
        if (response.result == 400) {
            response.status(response.result);
            response.send('你作弊，我再也不和你玩了');
            return
        }
        next()
        console.log('中间件2')
    },
    // 中间件 3 
    function (request, response) {
        // 如果这里执行setTimeout，会导致前面的洋葱模型失效
        // 因为playerWon不是在中间件执行流程所属的那个事件循环里赋值的
        // setTimeout(()=> {
        response.status(200);
        response.send(response.result);
        console.log('中间件3')
        // }, 500)
    }

)

app.get('/', function (request, response) {
    // send接口会判断你传入的值的类型，文本的话则会处理为text/html
    // Buffer的话则会处理为下载
    response.send(
        fs.readFileSync(__dirname + '/21-1.html', 'utf-8')
    )
})

app.listen(3000);


// 中间件的打印顺序为 ：
// 中间件3
// 中间件2
// 中间件1