// Promise 解决异步流程控制
(function () {
    // 接收 promise 成功的回调返回
    var promise = interview()
    // 如果在 then 中，在成功的回调中，再回调失败的方法
    var promise2 = promise
        .then((res) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // 0.4s 后，必定扭转为成功状态
                    if (Math.random() > 0) {
                        resolve('成功')
                    } else {
                        reject(new Error('失败1'))
                    }
                }, 400)
            })
        })
    setTimeout(() => {
        // 查看 promise 的状态
        console.log(promise)
        // 查看 promise2 的状态
        console.log(promise2)
        setTimeout(() => {
            // 200 毫秒后，再次查看 promise 和 promise2 的状态
            console.log(promise2)
        }, 200)
    }, 800)

    // 定义 interview 方法
    function interview() {
        // 定义一个 Promise 方法
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 0.5s 后，必定扭转为成功状态
                if (Math.random() > 0) {
                    resolve('成功')
                } else {
                    reject(new Error('失败1'))
                }
            }, 500)
        })
    }
})()
