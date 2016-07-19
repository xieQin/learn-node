var filter = require('./filter.js');

var pathname = process.argv[2];
var key = process.argv[3];

filter(pathname, key, function(err, lists) {
	if (err)
		return console.error('error: ' + err)
	lists.forEach(function(item, i) {
		console.log(item)
	})
});