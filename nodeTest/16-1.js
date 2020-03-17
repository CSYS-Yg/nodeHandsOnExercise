// 定义一个立即执行函数
(function () {
    /** 定义一个 Promise 实例 
     *  resolve 成功的回调方法
     *  reject 失败的回调方法
     * resolved 与 rejected 是不能相互扭转的。当 Promise 的状态由 pending 扭转之 resolved 或 rejected 状态后，该 Promise 的状态就不能再改变了。
    */
    var promise = new Promise((resolve, reject) => {
        // 500 毫秒后，修改 promise 状态为成功状态
        setTimeout(() => {
            // // // 执行成功回调
            resolve('执行成功')
            // 执行失败，抛出异常回调
            // reject(new Error())
        }, 500)
    })
        .then((res) => {  // 当 Promise 状态扭转为 resolved 后，立即执行
            console.log(res) // 打印：执行成功
        })
        .catch((err) => { // 当 Promise 状态扭转为 rejected 后，立即执行
            console.log(err) // 打印错误信息
        })
    // 立即打印 promise 状态
    console.log(promise)
    // 等待 promise 状态扭转后再打印 promise 状态
    setTimeout(() => {
        console.log(promise) // 在编译器中打印为 undefined,需要放到 chrome 控制台运行
    }, 800)
})()
