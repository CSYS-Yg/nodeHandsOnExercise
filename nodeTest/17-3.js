/**
 * try-catch 可以捕获 await 所得到的错误。即不受事件循环的限制。
 */

// 定义一个自执行函数
(function () {
    //  再定义一个自执行函数，配置为 异步执行
    const result = async function () {
        try {
            // 定义一个 Promise ，有 await
            var test = await new Promise((resovle, reject) => {
                // 0.5s 后扭转为 resovled 状态
                setTimeout(() => {
                    reject('执行错误')
                }, 500)
            })
        } catch (error) {
            console.log(error)
        }
    }()
    // 延时 0.8s 后打印 result 的状态
    setTimeout(() => {
        console.log('最后打印')
        console.log(result)
    }, 800)
})()