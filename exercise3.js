//同步io操作
//读取文件后显示行数
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var length = buffer.toString().split('\n').length - 1;
console.log(length);