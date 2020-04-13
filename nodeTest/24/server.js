/**
 * 服务端 server.js
 * 用于接收客户端发送的数据
 */

// 导入 node.js net 模块
const net = require('net')

// 创建一个 http 服务器
// 回调函数 socket,socket 表示通道代理服务写入与读出的对象
const server = net.createServer((socket) => {
    // 向通道写入数据 socket.write()

    // 向通道读出数据,在 node.js 的方法
    // 监测 data 数据，触发则回调事件，参数为数据原始的 buffer 实例
    socket.on('data', function (buffer) {
        // 打印原始值（二进制数据），与 string 数据
        console.log(buffer, buffer.toString())
        // buffer => <Buffer 67 6f 6f 64 20 6d 6f 72 6e 69 6e 67 20 67 65 65 6b 62 61 6e 67>
        // buffer.toString() => good morning geekbang
    })
})

// 设置端口
server.listen(4000)

// 启动服务端 node server.js 