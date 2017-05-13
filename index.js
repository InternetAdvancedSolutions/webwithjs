var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/signup', function(request, response) {
  response.render('pages/signup');
});

app.get('/login', function(request, response) {
  response.render('pages/login');
});

app.get('/subjects', function(request, response) {
  response.render('pages/subjects');
});

app.get('/logout', function(request, response) {
  response.render('pages/logout');
});

app.get('/answersheet', function(request, response) {
  response.render('pages/answersheet');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
