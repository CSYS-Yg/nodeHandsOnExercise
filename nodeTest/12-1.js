// 引入 geektime 
const geektime = require('./lib/12-1-lib.js')
// 添加 geektime 监听器，监听被触发的 newlesson 事件
// res 接收参数
geektime.addListener('newlesson', (res) => {
    // 监听到事件被触发则打印
    console.log('上新课啦！', res)
    // 添加判断条件,低于 20 就自动购买
    if (res.price < 20) {
        console.log('买买买！', res)
    }
})

// 进入当前文件夹下，运行
// node 12-1.js   

// 打印：每 3s 一次
// 上新课啦！