// lib.js
console.log("第二输出")

// 定义模块输出 exports
exports.hello = "定义模块输出"

exports.add = (a, b) => {
    return a + b
}
exports.jsonOne = { hello: '对象' }

// 在被引用的 lib.js 内添加定时器，打印 exports
setTimeout(() => {
    console.log(exports)
}, 2000)

// 打印出:
// {
//   hello: '定义模块输出',
//   add: [Function],
//   jsonOne: { hello: '对象' },
//   addTest: 'test'
// }

// 添加成功，即证明外面的引用可以改变内部模块导出的内容


/**
 *  module.exports
 *  使 exports 为一个基础类型，而非一个对象
 */

module.exports = "moduleText"

// 修改 module.exports 后再输出
setTimeout(() => {
    console.log(exports)
    // 打印： { hello: '定义模块输出', add: [Function], jsonOne: { hello: '对象' } }
}, 2000)