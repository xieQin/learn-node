var fs = require('fs');
var path = require('path');

function filter (filepath, ext, callback) {
	ext = '.' + ext;
	fs.readdir(filepath, function(err, lists) {
		if(err) {
			return callback(err)
		}
		var files = [];
		lists.forEach( function(element, index) {
			var fileext = path.extname(element);
			if(fileext === ext) {
				files.push(element)
			}
		});
		callback(null, files)
	})
}

module.exports = filter;