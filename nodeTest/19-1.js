/**
 * 用 node.js 实现一个简单的 HTTP 请求
 */

// 导入 node.js 内置的 HTTP 模块
const http = require('http')

// 导入 node.js 的文件模块
const fs = require('fs')


// http 创建服务及监听端口的能力
// request 请求进来的 http 包
// response 返回出去的 http 包
http.createServer(function (request, response) {
    // 过滤掉 /favicon.ico 的请求
    if (request.url == '/favicon.ico') {
        response.writeHead(200)
        response.end()
        return
    }

    console.log(request.url) // 打印请求的 url
    // 返回的状态，可以设置为 404/500等
    response.writeHead(200)
    // // 返回请求内容
    // response.end('hello')

    // 创建 fs 文件读取
    fs.createReadStream(__dirname + '/19-1.html/')
        .pipe(response) // 请求返回网页
})
    .listen(3000) // 设置监听的端口


// 启动 
// cd nodeTest
// node 19-1.js

// 在浏览器打开网页 127.0.0.1:3000