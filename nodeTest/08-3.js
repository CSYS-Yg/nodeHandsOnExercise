// 石头剪刀布 node.js 的实现

// 获取用户输入的命令，数组
console.log(process.argv)
/**
 *  命令行输入 node 08-3.js rock 
 *  打印出一个 数组，用户命令 rock 添加在数组最后
 */

// 获取用户输入命令
// 命令行输入 node 08-3.js rock 
var playerAction = process.argv[process.argv.length - 1]
console.log(playerAction) // rock

// 生成一个 3 之内的随机数
var random = Math.random() * 3
var computerAction
if (random < 1) {
    computerAction = 'rock'
} else if (random < 2) {
    computerAction = 'paper'
} else {
    computerAction = 'scissors'
}

if (computerAction == playerAction) {
    console.log(`人：${playerAction}，电脑：${computerAction},结果是平局`)
} else if (
    (playerAction === 'rock' && computerAction == 'paper') ||
    (playerAction === 'paper' && computerAction == 'scissors') ||
    (playerAction === 'scissors' && computerAction == 'rock')
) {
    console.log(`人：${playerAction}，电脑：${computerAction},结果是人赢`)
} else {
    console.log(`人：${playerAction}，电脑：${computerAction},结果是机器赢`)
}


