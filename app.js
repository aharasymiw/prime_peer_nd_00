var http = require('http');

// var returnRandom = require('./returnrandom.js');
// var convertDollar = require('./convert.js');
var thirdModule = require('./thirdModule');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(thirdModule.poo + thirdModule.foo);
  response.end();
}).listen(3000);
