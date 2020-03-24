
let playWon = 0
let lastplayerAction = null
let playnumber = 0
module.exports = function (playerAction) {
    if (['rock', 'scissors', 'paper', 'reset'].indexOf(playerAction) == -1) {
        throw new Error('invalid playerAction');
    }
    if (playerAction == 'reset') {
        playWon = 0
        playnumber = 0
        lastplayerAction = null
        return '已重置'
    }
    if (playWon >= 3 || playnumber >= 3) {
        return 500
    }
    if (lastplayerAction && lastplayerAction == playerAction) {
        playnumber++
    } else {
        playnumber = 1
    }
    lastplayerAction = playerAction
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
        return `人：${playerAction}，电脑：${computerAction},结果是平局`
    } else if (
        (playerAction === 'rock' && computerAction == 'paper') ||
        (playerAction === 'paper' && computerAction == 'scissors') ||
        (playerAction === 'scissors' && computerAction == 'rock')
    ) {
        playWon++
        return `人：${playerAction}，电脑：${computerAction},结果是人赢`
    } else {
        return `人：${playerAction}，电脑：${computerAction},结果是机器赢`
    }
}