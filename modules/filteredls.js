var fs = require('fs');
var path = require('path');

module.exports = function(dirpath, ext, callback) {
  fs.readdir(dirpath, function(err, list) {
    if (err) {
      return callback(err);
    }
    callback(null, list.filter(function(file) {
      return (path.extname(file) === '.' + ext);
    }));
  });
};
