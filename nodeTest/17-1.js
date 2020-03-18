/**
 * async 与 Promise 的区别
 */

// // 自执行函数 
// // 1.
// (function () { console.log(1) })()

// // 2.
// console.log(function () {
//     console.log(2)
// }())


// 定义自执行函数
// 使用 async 异步执行
console.log(async function () {
    return 1
}())
// 定义自执行函数
// 直接扭转 Promise 为 resolved 并 return
console.log(function () {
    return new Promise((resovle, reject) => {
        resovle(1)
    })
}())