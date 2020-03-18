// 控制并发异步

// 当 all 内部函数都执行成功时，才扭转状态为 
Promise.all([
    interview('geekbang'),
    interview('tencent')
])
    .then(() => {
        console.log('都成功了')
    })
    .catch((err) => {
        // 多个方法，只会接收第一个抛错的结果。
        console.log(err)
    })

// 定义 interview 方法
function interview(name) {
    console.log(name, 'test')
    // 定义一个 Promise 方法
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 0.5s 后，80% 的概率成功
            if (Math.random() > 0.5) {
                resolve('成功')
            } else {
                reject(name)
            }
        }, 500)
    })
}