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
// socket.write('good morning geekbang')

// 启动客户端 node client.js 

// 发送一个 id 给服务端，并让服务端返回，该 id 的名字
const LESSON_IDS = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
]

// 创建一个长度为 4 位的 buffer
let buffer = Buffer.alloc(4)
// 随机生成一个 id
let id = LESSON_IDS[Math.floor(Math.random() * LESSON_IDS.length)]
// 将 id 写出 4 位的二进制流
buffer.writeInt32BE(id)
// 向服务端发送一个 buffer 流 
socket.write(buffer)

socket.on('data', function (buffer) {
    // 接收返回的数据
    console.log(id, buffer.toString())
    // 接收到返回数据后
    id = LESSON_IDS[Math.floor(Math.random() * LESSON_IDS.length)]
    // 将 id 写出 4 位的二进制流
    buffer.writeInt32BE(id)
    // 再向服务端发送一个 buffer 流
    socket.write(buffer)
})