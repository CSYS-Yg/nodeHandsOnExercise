// 简单的案例，实际上复杂的多
const eventloop = {
    queque: [],
    // 循环方法
    loop() {
        // 删除成功，执行回调
        while (this.queque.length) {
            // 删除数据中第一个数据
            var callback = this.queque.shift()
            callback();
        }
        // 每 50 毫秒 检查一次 queque 是否含有数据
        // bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
        setTimeout(this.loop.bind(this), 50)
    },
    // 向 queque 添加一个数据
    add(callback) {
        this.queque.push(callback)
    }
}
// 启动 loop 方法，开启事件循环
eventloop.loop();
// 2s 后添加一个数据
setTimeout(() => {
    eventloop.add(function () {
        console.log('1')
    })
}, 2000)

// 3s 后添加一个数据
setTimeout(() => {
    eventloop.add(function () {
        console.log('2')
    })
}, 3000)
