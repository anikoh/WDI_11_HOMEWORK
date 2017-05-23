// make a get request to omdb to get jaws
// display the json in the browser

// you will need http, request
// to make a request use the 'request' modules
// GET '/' to return jaws json
// https://githubcom/request/request

// npm init
// npm install request --save



var http = require('http');
var request = require('request');



request('http://omdbapi.com/?t=jaws', function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  //console.log(body);
  response.write(body);
  response.end();
});



// var app = function(req, res){
//
//   if(req.url === '/aboutme'){
//     res.write('about me');
//     res.end();
//   }
//   else if(req.url === '/donate'){
//     fs.readFile('donate.html', function(err, buffer){
//       if(err){
//         console.log('error reading file');
//       }
//       res.end(buffer.toString());
//
//   });
//   }
//   else {
//     res.writeHead(404);
//     res.write('not found');
//     res.end();
//   }
// }

var server = http.createServer();

server.listen(8000);
