const koa = require('koa');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();


app.use(
    mount('/static', static(`${__dirname}/source/static/`))
);

app.use(async (ctx) => {

});

//app.listen(4000);

const rqcClient = require('./client')

rpcClient.write({
    columnid: 24
}, function (err, data) {
    console.log(err, data)
})
