
// 调用 interview 方法，传入回调函数
interview(function () {
    console.log('smile');
})

// 定义一个 interview 方法
// callback 回调参数
function interview(callback) {
    setTimeout(() => {
        // 执行成功，回调并返回参数
        callback('success')
    }, 2000)
}