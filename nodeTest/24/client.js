/**
 * 客户端 client.js
 * 用于向服务端发送数据
 */
// 导入 node.js net 模块
const net = require('net')

// 创建一个 http 服务器
// 回调函数 socket,socket 表示网络通迅服务写入与读出的对象
const socket = new net.Socket({})

// 手动建立 socket 的连接
socket.connect({
    // 服务器地址
    host: '127.0.0.1',
    // 端口号
    port: 4000
})

// 向通道写入数据 socket.write()
socket.write('good morning geekbang')

// 启动客户端 node client.js 