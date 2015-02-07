var http = require('http');

var get = function(url, callback) {
  http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      return callback(null, data);
    });
  }).on('error', function(err) {
    return callback(err);
  });
};

get(process.argv[2], function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
