// === HTTP service ===
var express = require('express');
var app = express();
var server = require('http').createServer(app);

// maps contents of /static folder to the site's root
app.use(express.static(__dirname + '/static')); 


// start listening 
server.listen(3000, function () {
  console.log('Server is listening on http://localhost:3000');
});