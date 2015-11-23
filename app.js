var http = require('http');
var returnRandom = require('./returnrandom.js');
var convertDollar = require('./convert.js');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('hello world!');
  response.end();
}).listen(3000);
