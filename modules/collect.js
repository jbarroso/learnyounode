var http = require('http');
var bl = require('bl');

module.exports = function(url, callback) {
  http.get(url, function(response) {
    response.setEncoding('utf8');
    response.pipe(bl(function(err, data) {
      if (err) {
        return callback(err);
      }
      callback(null, data.toString());
    }));
  }).on('error', function(err) {
    return callback(err);
  });
};
