/**
 * await 关键字可以 **“暂停”** async function 的执行。
 * await 关键字可以以同步的写法获取 Promise 的执行结果，即 await 关键字可以把后面 Promise 回调的值赋值给前面的参数。
 */

// 定义一个自执行函数
(function () {
    //  再定义一个自执行函数，配置为 异步执行
    const result = async function () {
        // 定义一个 Promise ，无 await
        // var test = new Promise((resovle, reject) => {
        // 定义一个 Promise ，有 await
        var test = await new Promise((resovle, reject) => {
            // 0.5s 后扭转为 resovled 状态
            setTimeout(() => {
                console.log('再打印')
                resovle('执行成功')
            }, 500)
        })
        // 异步执行，先打印
        console.log('先打印')
        console.log(test)
    }()
    // 延时 0.8s 后打印 result 的状态
    setTimeout(() => {
        console.log('最后打印')
        console.log(result)
    }, 800)
})()