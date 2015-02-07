var fs = require('fs');

var count = function(filePath, callback) {
  return fs.readFile(filePath, function(err, data) {
    var lines = data.toString().split('\n').length - 1;
    callback(lines);
  });
};

count(process.argv[2], function(lines) {
  console.log(lines);
});
