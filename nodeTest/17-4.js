// 使用  async 与 await 对 16-3.js 16.4.js 的改造

(async function () {
    try {
        // await interview(1)
        // await interview(2)
        // await interview(3)
        // 并行的异步任务
        await Promise.all([interview(1), interview(2), interview(3)])
    } catch (err) {
        return console.log(err.number)
    }
    console.log('3次都成功了')
})()

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
