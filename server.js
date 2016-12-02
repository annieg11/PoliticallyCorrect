// server.js start coding here to listen to server
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var path = require('path');
var expressValidator = require('express-validator');
require('dotenv').config();


var Representative = require('./models')['Representative']
Representative.sync();

var User = require('./models')['User']
User.sync();

var app = express(); 
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public/')));

// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// passport & cookie encryption config 
require('./config/passport')(app);
app.use(cookieParser("Iamsecret"));

app.use(session({
  secret: "Iamsecret",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// method override 
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Require Routes here
var routes = require('./controllers/app_controller.js');
app.use('/', routes);


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('App listening on PORT: ' + port);
});

