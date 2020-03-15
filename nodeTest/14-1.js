
try { // 执行成功打印
    // 调用 interview 方法，传入回调函数
    interview(function () {
        console.log('smile');
    })
} catch (e) {
    // 捕获到异常打印
    console.log('cry', e)
}


// 定义一个 interview 方法
// callback 回调参数
function interview(callback) {
    setTimeout(() => {
        if (Math.random() < 0.1) {
            // 执行成功，回调并返回参数
            callback('success')
        } else {
            // 执行失败，抛出异常
            throw new Error('fail')
        }
    }, 2000)
}