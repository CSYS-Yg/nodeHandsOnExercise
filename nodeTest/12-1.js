// 导入 node.js 中 events 模块的 EventEmitter 类
const EventEmitter = require('events').EventEmitter

// 创建 Geektime 继承 EventEmitter 类
class Geektime extends EventEmitter {
    // constructor 是一种用于创建和初始化class创建的对象的特殊方法
    // 一个类中只能存在一个 constructor
    // 文档 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor
    constructor() {
        // 构造方法中可以使用 super 关键字来调用一个父类的构造方法
        super();
        // 每 3s 触发一个事件
        setInterval(() => {
            //  .emit('事件名'），相当于触发事件
            this.emit('newlesson', {
                price: Math.random() * 100
            })
        }, 3000)
    }
}

// 创建测试实例
const geektime = new Geektime

// 添加 geektime 监听器，监听被触发的 newlesson 事件

geektime.addListener('newlesson',()=>{
    // 监听到事件触发则打印
    console.log('上新课啦！')
})

// 进入当前文件夹下，运行
// node 12-1.js   

// 打印：每 3s 一次
// 上新课啦！