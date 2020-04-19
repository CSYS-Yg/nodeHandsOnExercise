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

// 随机生成一个 id
let id = Math.floor(Math.random() * LESSON_IDS.length)

// 定义 buff
let buffer = ''




// 接收到返回数据
socket.on('data', function (buffer) {
    // 将 buff 切割为 包序号 与 名字
    const seqBuffer = buffer.slice(0, 2);
    const titleBuffer = buffer.slice(2)
    // 打印返回的 包序号 与 title
    console.log(seqBuffer.readInt16BE(), titleBuffer.toString())
    // socket.write(encode(id))
})

// 记录包序号
let seq = 0

function encode(index) {
    console.log(seq, LESSON_IDS[index])
    // 生成一个 6 位的buff
    buffer = Buffer.alloc(6)
    // 每调用一次 包序号 自增并写入至 buff 前两位
    buffer.writeInt16BE(seq++)
    // 从 buffer 第二位开始写入值
    buffer.writeInt32BE(LESSON_IDS[index], 2)
    // 打印 包序号 与对应的 id 
    return buffer
}

// 每 50 毫秒进行一次通信
setInterval(() => {
    // 再重新生成一个随机 id
    id = Math.floor(Math.random() * LESSON_IDS.length)
    socket.write(encode(id))
}, 50);



// 张包，tcp 协议的一种优化机制