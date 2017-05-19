var express = require('express');
var app = express();

//var pg = require('pg');
var Pool= require('pg').Pool;

app.get('/qs', function(request,response){
   Pool.query('SELECT * FROM questions ',  function(err,result){
           if (err) {
              {console.error(err); response.send("Error"+err);}
           } else {
                
                //var articleData=result.rows[0];
               // res.send(createTemplate(articleData));
               
              response.render('pages/qs', {results:result.rows);    
           }
       });
/*
app.get('/qs', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM users', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM questions', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});
*/
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
