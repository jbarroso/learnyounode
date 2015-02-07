var fs = require('fs');
var path = require('path');
var listByExtName = require('./modules/filteredls');

listByExtName(process.argv[2], process.argv[3], function(err, list) {
  if (err) {
    console.log(err);
  }
  console.log(list.join('\n'));
});
