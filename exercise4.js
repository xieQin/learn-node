var fs = require('fs');
fs.readFile(process.argv[2], function(err, res) {
	res = res.toString().split('\n').length - 1;
	console.log(res);
})