
// 调用 interview 方法，传入回调函数
interview(function (err, res) {
    // nodejs 回调中约定第一个参数为 error
    if (err instanceof Error) {
        // 错误则抛出
        return console.log('cry')
    }
    // 正确打印
    console.log(res)
})


// 定义一个 interview 方法
// callback 回调参数
function interview(callback) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            // 执行成功，回调并返回参数（多个）
            callback(null, 'success')
        } else {
            // 回调异常，只传递一个参数
            callback(new Error('fail'))
        }
    }, 2000)
}