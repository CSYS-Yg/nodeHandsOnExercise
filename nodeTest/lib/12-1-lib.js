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
            //  .emit('事件名',{传递的参数}），相当于触发事件
            this.emit('newlesson', {
                price: Math.random() * 100
            })
        }, 3000)
    }
}
// 创建测试实例
const geektime = new Geektime
// 导出 geektime 实例
module.exports = geektime