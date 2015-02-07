var collect = require('./modules/collect');

var juggling = function(urls, callback) {
  var results = [],
    nUrls = urls.length,
    i, count = 0;

  var collectResult = function(n) {
    collect(urls[n], function(err, data) {
      results[n] = data;
      count++;
      checkResult();
    });
  };

  var checkResult = function() {
    if (count === nUrls) {
      callback(null, results);
    }
  };

  for (i = 0; i < nUrls; i++) {
    collectResult(i);
  }

};

juggling(process.argv.slice(2), function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data.join('\n'));
});
