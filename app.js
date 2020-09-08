var express = require('express');
var app = express();

var absolutePath = __dirname + '/index.html';  /*If .ejs is given this file is getting downloaded*/
app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});