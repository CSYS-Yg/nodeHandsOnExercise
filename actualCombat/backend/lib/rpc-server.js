const net = require("net");

module.exports = class RPC {
    constructor({
        encodeResponse, decodeRequest, isCompleteRequest
    }) {
        this.encodeResponse = encodeResponse;
        this.decodeRequest = decodeRequest;
        this.isCompleteRequest = isCompleteRequest;
    }

    createServer(callback) {
        let buffer = null
        // 通过 node.js 中的 net 模块创建一个新的服务器
        const tcpServer = net.createServer((socket) => {
            socket.on('data', (data) => {
                buffer = (buffer && buffer.length > 0) ?
                    Buffer.concat([buffer, data]) :
                    data;

                let checkLength = null
                while (buffer && (checkLength = this.isCompleteRequest(buffer))) {
                    let requestBuffer = null
                    if (checkLength == buffer.length) {
                        requestBuffer = buffer
                        buffer = null
                    } else {
                        requestBuffer = buffer.slice(0, checkLength)
                        buffer = buffer.slice(checkLength)
                    }

                    const require = this.decodeRequest(requestBuffer)
                    callback(
                        {
                            // request
                            body: require.result,
                            socket
                        },
                        {// response
                            end: (data) => {
                                const buffer = this.encodeResponse(data, request.seq)
                                socket.write(buffer)
                            }
                        }
                    )
                }
            })
        })
        return {
            length() {
                tcpServer.listen.apply(tcpServer, arguments)
            }
        }
    }
}