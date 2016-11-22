// server.js start coding here to listen to server
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Require Reps Model
var Representative = require('./models')['Representative']
Representative.sync();

// Require User Model
var User = require('./models')['User']
User.sync();

var app = express(); 
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// method override 
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'})); 
app.set('view engine', 'handlebars');



// Require Routes here
var routes = require('./controllers/app_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port, function() {
  console.log('App listening on PORT: ' + port);
});