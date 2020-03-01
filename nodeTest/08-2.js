// node js 特有的环境变量

// 当前运行脚本所在的位置
console.log(__filename) //c:\E\github-project\node-hands-on-exercise\nodeTest\08-2.js

// 当前运行脚本所在的目录位置
console.log(__dirname) // c:\E\github-project\node-hands-on-exercise\nodeTest

// 进程对象，查看当前 node.js 运行进程的一些信息
console.log(process)
/* version:Node.js 版本号
* platform:当前运行环境的系统
* hrtime:统计时间的，时间精度（微妙级）
* cpuUsage:打印 cpu 占用率
* resourceUsage:打印内存占用率
* kill:关键。杀进程。
* exit:关键。退出进程。
* env：当前 node 所运行环境的环境变量。可以配置，比如说加一个 debug 环境变量，Node.js就会以 debug 模式运行。
* argv：关键。node进程在启动时，用户敲击命令是怎样的。用于制作一些命令行程序。
*/

