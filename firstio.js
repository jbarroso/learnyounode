var fs = require('fs');

var count = function(filePath) {
  return fs.readFileSync(filePath).toString().split('\n').length - 1;
};

console.log(count(process.argv[2]));
