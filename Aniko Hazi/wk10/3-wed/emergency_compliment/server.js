var http = require('http');
const PORT = 8000;
var app = require('./index');

var server = http.createServer(app);
server.listen(PORT);
server.on('listening', function() {
  console.log('server started at ' + PORT);
});
