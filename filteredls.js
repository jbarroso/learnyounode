var fs = require('fs');
var path = require('path');

var listByExtName = function(dirpath, ext, callback) {
  fs.readdir(dirpath, function(err, list) {
    callback(list.filter(function(file) {
      return (path.extname(file) === '.' + ext);
    }));
  });
};

listByExtName(process.argv[2], process.argv[3], function(list) {
  console.log(list.join('\n'));
});
