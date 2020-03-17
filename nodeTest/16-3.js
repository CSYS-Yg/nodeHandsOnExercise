// Promise 解决异步流程控制
// 接收 promise 成功的回调返回
var promise = interview(1)
    .then(() => {
        // 必须 return
        return interview(2)
    })
    .then(() => {
        // 必须 return
        return interview(3)
    })
    .then(() => {
        console.log('3次都成功了')
    })
    .catch((err) => {
        console.log(err.number)
    })
// 定义 interview 方法
function interview(number) {
    // 定义一个 Promise 方法
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 0.5s 后，80% 的概率成功
            if (Math.random() > 0.2) {
                resolve('成功' + number)
            } else {
                var error = new Error()
                error.number = number
                reject(error)
            }
        }, 500)
    })
}
