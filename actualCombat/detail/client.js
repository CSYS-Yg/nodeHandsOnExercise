/**
 *  客户端的创建
 */

const EasySock = require('easy_sock');

const protobuf = require('protocol-buffers')
const fs = require('fs');
// 数据协议
const schemas = protobuf(fs.readFileSync(`${__dirname}/detail.proto`));

// 创建请求服务器
const easySock = new EasySock({
    ip: '127.0.0.1',
    port: 4000,
    // 超时时长
    timeout: 500,
    // 是否保持双工通信
    keepAlive: true
})


//  请求包编码
easySock.encode = function (data, seq) {
    const body = schemas.ColumnRequest.encode(data)
    // 创建请求头
    const head = Buffer.alloc(8)
    head.writeInt32BE(seq)
    head.writeInt32BE(body.length, 4)
    return Buffer.concat([head, body])
}
//  请求包解码
easySock.decode = function (buffer) {
    const seq = buffer.readInt32BE()
    const body = schemas.ColumnRequest.decode(buffer.slice(8))
    return {
        result: body,
        seq
    }
}
//  判断包是否接收完成，判断张包与缺包的情况
easySock.isReceiveComplete = function () {
    if (buffer.length < 8) {
        return 0
    }

    const bodyLength = buffer.readInt32BE(4);

    if (buffer.length >= bodyLength + 8) {
        return bodyLength + 8

    } else {
        return 0
    }
}

module.exports = easySock;