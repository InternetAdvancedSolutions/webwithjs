var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('Request received');
  res.send('Hello world!');
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
