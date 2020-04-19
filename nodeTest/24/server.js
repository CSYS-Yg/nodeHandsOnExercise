/**
 * 服务端 server.js
 * 用于接收客户端发送的数据
 */

// 导入 node.js net 模块
const net = require('net')

// 假数据
const LESSON_DATA = {
    136797: "01 | 课程介绍",
    136798: "02 | 内容综述",
    136799: "03 | Node.js是什么？",
    136800: "04 | Node.js可以用来做什么？",
    136801: "05 | 课程实战项目介绍",
    136803: "06 | 什么是技术预研？",
    136804: "07 | Node.js开发环境安装",
    136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
    136807: "09 | 模块：CommonJS规范",
    136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
    136809: "11 | 模块：npm",
    141994: "12 | 模块：Node.js内置模块",
    143517: "13 | 异步：非阻塞I/O",
    143557: "14 | 异步：异步编程之callback",
    143564: "15 | 异步：事件循环",
    143644: "16 | 异步：异步编程之Promise",
    146470: "17 | 异步：异步编程之async/await",
    146569: "18 | HTTP：什么是HTTP服务器？",
    146582: "19 | HTTP：简单实现一个HTTP服务器"
}

// 创建一个 http 服务器
// 回调函数 socket,socket 表示通道代理服务写入与读出的对象
const server = net.createServer((socket) => {
    // 向通道写入数据 socket.write()

    // // 向通道读出数据,在 node.js 的方法
    // // 监测 data 数据，触发则回调事件，参数为数据原始的 buffer 实例
    // socket.on('data', function (buffer) {
    //     // 打印原始值（二进制数据），与 string 数据
    //     console.log(buffer, buffer.toString())
    //     // buffer => <Buffer 67 6f 6f 64 20 6d 6f 72 6e 69 6e 67 20 67 65 65 6b 62 61 6e 67>
    //     // buffer.toString() => good morning geekbang
    // })

    // 向通道读出数据,在 node.js 的方法
    // 监测 data 数据，触发则回调事件，参数为数据原始的 buffer 实例
    socket.on('data', function (buffer) {
        // 读取前面两位的包序号
        const seqBuffer = buffer.slice(0, 2);
        // 将传递过来的 buffer 从第二位开始读 id
        let lessonid = buffer.readInt32BE(2)
        setTimeout(() => {
            // 将 包序号 与返回的 title buff 拼接并返回
            buffer = Buffer.concat([seqBuffer, Buffer.from(LESSON_DATA[lessonid])])
            // 返回给客户端数据
            socket.write(buffer)
            // 将包乱序返回
        }, 10 + Math.random() * 1000);
    })
})

// 设置端口
server.listen(4000)

// 启动服务端 node server.js 


