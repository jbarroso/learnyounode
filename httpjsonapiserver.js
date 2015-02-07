var http = require('http');
var url = require('url');

var routes = {
  '/api/parsetime': function(params) {
    var date = new Date(params.iso);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  },
  '/api/unixtime': function(params) {
    return {
      unixtime: new Date(params.iso).getTime()
    };
  }
};

var server = http.createServer(function(req, res) {
  var reqUrl = url.parse(req.url, true);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify(
    routes[reqUrl.pathname](reqUrl.query)));
  res.end();
});

server.listen(process.argv[2]);
