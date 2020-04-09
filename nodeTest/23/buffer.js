/**
 * 
 * Buffer.from() // 从一个现有的数据结构里面，创建出一个 buffer。比如一个字符串或者数组等。
 * Buffer.alloc() // 指定要生成 Buffer 的长度，来创建一个 buffer
 */
// 读取字符串创建 Buffer
const buffer1 = Buffer.from('geekbang')
// 读取数组创建 Buffer
const buffer2 = Buffer.from([1, 2, 3, 4])
// 创建一个 20 长度的Buffer
const buffer3 = Buffer.alloc(20)

console.log(buffer1)
console.log(buffer2)
console.log(buffer3)

// 修改 buffer2 的第二位，修改值为 12 ，不会改变原有数组的值
buffer2.writeInt8(12, 1);
console.log(buffer2) // <Buffer 01 02 03 04> 修改为 <Buffer 01 0c 03 04>，修改 1 位字符位置 02 => 0C

// 修改 buffer2 的第 3 位，修改值为 12 ，不会改变原有数组的值
buffer2.writeInt16LE(512, 2);
console.log(buffer2) //  <Buffer 01 02 03 04> =>  <Buffer 01 02 00 02>,修改 2 位 03 04 => 00 02
buffer2.writeInt16BE(512, 2);
console.log(buffer2) // <Buffer 01 02 03 04> =>  <Buffer 01 02 02 00>,修改 2 位 03 04 => 02 00

buffer2.writeInt32LE(555, 0) // 占 4 位
console.log(buffer2) // <Buffer 01 02 03 04> =>  <Buffer 2b 02 00 00>,修改 4 位
// 因各个后端规定的不同，会有大端与小端的区别，需要与后台协商
// LE : 数据的高位放置在后，小端对齐
// BE : 数据的高位放置在前，大端对齐
