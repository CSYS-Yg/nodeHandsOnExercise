// 导入 http ，给 js 提供 http 服务的能力 
const http = require('http');
// 导入 url 模块，将接收的 url 进行切割 (location、端口、参数等)
/** 协议(protocol)://域名(host):端口(port)/路径名(pathname)?请求参数(query)
 * 所有参数 Url {
    protocol: null,
    slashes: null, 
    auth: null,    
    host: null,    
    port: null,    
    hostname: null,
    hash: null,
    search: null,
    query: null,
    pathname: '/',  
    path: '/',
    href: '/'
  }
  */
const url = require('url');

//（http://nodejs.cn/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options）
const querystring = require('querystring');
// 导入文件模块，读取电脑上的文件
const fs = require('fs');

// 导入 game.js
const game = require('./game')

http.createServer(function (request, response) {
    // 获取切割的参数
    const parsedUrl = url.parse(request.url)
    // console.log(parsedUrl)
    // 拦截浏览器默认的图标请求
    if (parsedUrl.pathname == '/favion.ico') {
        response.writeHead(200)
        response.end()
        return
    }
    if (parsedUrl.pathname == '/game') {
        // querystring.parse(str[, sep[, eq[, options]]])
        const query = querystring.parse(parsedUrl.query)
        const playerAction = query.action
        const x = game(playerAction)
        if (x == 500) {
            response.writeHead(500)
            response.end('我再也不和你玩了')
            return
        }
        response.writeHead(200)
        response.end(x)
    }
    if (parsedUrl.pathname == '/') {
        // 返回 html 文件
        fs.createReadStream(__dirname + '/20-1.html').pipe(response)
    }
}).listen(3000)