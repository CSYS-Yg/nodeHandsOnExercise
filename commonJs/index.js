// require() 
/**
 * CommonJS 模块规范中
 * 使用 require() 函数来调用另外一个 js。
 */

// index.js
console.log("第一输出")
require('./lib.js')
console.log("第三输出")

// 打印结果
// 第一输出
// 第二输出
// 第三输出


// 规则：当一个初始模块，被引用后,默认是一个空对象
var lib = require('./lib.js')
console.log(lib) // {}, 空对象


// 问题：如何证明 exports 的变量与其 require 引用的结果，是不是同一个引用呢？

var libTest = require('./lib.js')
// 在 index.js 中给 require 引用的结果 libTest 添加一个属性
libTest.addTest = 'test'


// module.exports 的导入 
var libModule = require('./lib.js')
// 挂载到 libModule 上
libModule.addTest = 'test'
console.log(libModule) // 只打印：moduleText
console.log(libModule.hello) // 打印: undefined
console.log(libModule.addTest) // 打印: undefined