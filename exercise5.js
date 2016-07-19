var fs = require('fs');
var path = require('path');
var pathname = process.argv[2];
var filterkey = '.' + process.argv[3];
// var pathname = './';
// var filterkey = '.js';
// console.log(pathname);
// console.log(filterkey);

fs.readdir(pathname, function(err, lists){
  // console.log(lists);
  var filter = [];
  for(var i = 0; i < lists.length; i++) {
  	var filename = path.extname(lists[i]);
  	if(filename === filterkey) {
      filter.push(lists[i])
      console.log(lists[i])
  	}
  }
})