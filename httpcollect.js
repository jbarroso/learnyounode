var collect = require('./modules/collect');

collect(process.argv[2], function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data.length);
  console.log(data);
});
