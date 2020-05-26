const EasySock = require('easy_sock');

const protobuf = require('protocol-buffers')

const fs = require('fs');

const schemas = protobuf(fs.readFileSync(`${__dirname}/detail.proto`));

const easySock = new EasySock({
    ip: '127.0.0.1',
    port: 4000,
    timeout: 500,
    keepAlive: true
})

// 客户端将请求包编码出来
easySock.encode = function (data, seq) {
    const body = schemas.ColumnRequest.encode(data);

    const head = Buffer.alloc(8);
    head.writeInt32BE(seq);
    head.writeInt32BE(body.length, 4);

    return Buffer.concat([head, body])
}

// 客户端接收到服务端数据解析成结构化数据
easySock.decode = function (buffer) {
    const seq = buffer.readInt32BE();
    const body = schemas.ColumnResponse.decode(buffer.slice(8));

    return {
        result: body,
        seq
    }
}
// 判断包是否接收完毕，处理粘包与缺包
easySock.isReceiveComplete = function (buffer) {
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
