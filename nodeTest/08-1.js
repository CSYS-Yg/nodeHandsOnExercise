// node js 与浏览器共有的一些环境变量

// nodeTest 控制台输入 node test.js 执行
console.log('hello world')

// 与浏览器共同存在的函数 
// 时间
console.log(Date) 
// 数学对象
console.log(Math)
// 定时器
console.log(setTimeout)
// 定时器
console.log(setInterval)

// 渲染浏览器的下一帧，node.js 不存在
console.log(requestAnimationFrame) // is not defined

// node.js 为了弥补 requestAnimationFrame 函数，新增 setImmediate
console.log(setImmediate)

