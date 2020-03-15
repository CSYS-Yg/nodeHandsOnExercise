// npm init   -- 声明该文件夹下为 npm 包
// npm install glob -- 安装 glob 包

// 引入 glob 包
const glob = require('glob')

/**
 * 阻塞 I/O 的调用
 **/

// var result = null;
// // 开始记录时间
// console.time('glob')
// // 递归获取当前文件夹下所有文件名，在该条语句执行中，node.js 处于阻塞状态
// result = glob.sync(__dirname + '/**/* ')
// // 结束记录时间
// console.timeEnd('glob')  // 打印中间的运行时间 glob: 6.946ms
// // 最后输出获取的文件名
// console.log(result)

/**
 * 非阻塞 I/O 的调用
 **/
var result = null;
// 开始记录时间
console.time('glob')
// 新增一个调用回调，当该条语句执行中，node.js 处于非阻塞状态
// 在 glob 方法开始执行中，不会阻塞下面语句（console.log(1+1)）的执行。即可以进行其他的输入与输出，
// 而是当查询完成后再调用 glob 方法的回调，打印 console.log(result)
glob(__dirname + '/**/*', function (err, res) {
    result = res
    console.log(result) // 等待 glob 回调打印
})
// 结束记录时间
console.timeEnd('glob')  // glob: 1.800ms
console.log(1+1) // 2 