
//requires
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

var server = express();

var recipeController = require("./controllers/recipeController")

var passportConfig = require('./config/passport');
var passport = require('passport');
//application configuration
//resave will keep it true

server.sessionMiddleware = session({
	secret            : "2CBABA1ITL#ST#1@92",
	resave            : true,
	saveUninitialized : false,
	//look into cookie: cookie takes an object that has key value pairs
	//max age is worth looking into (express session)
});
server.use(server.sessionMiddleware);

//End Express Session Setup

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));

server.use(passport.initialize());

server.use(passport.session());

//==============
//GET ROUTES
//==============
server.get("/", function(req, res){
	res.sendFile("/GlobalLayout.html", {root: "./public/Global"})
});


server.get("/beer/:beerAlias", recipeController.getRecipes);

//=============
//POST ROUTES
//=============
server.post("/createrecipe", recipeController.createRecipe);


//==============
//DELETE ROUTES
//==============
server.delete("/deleterecipe", recipeController.deleteRecipe)

//==============
//PASSPORT AUTHENTICATION ROUTES
//==============
var authenticationController = require('./controllers/authentication');

// Post received from submitting the login form
server.post('/auth/login', authenticationController.processLogin);

server.post('/auth/signup', authenticationController.processSignup);


server.get('/auth/logout', authenticationController.logout);

server.get('/auth/login', authenticationController.login);

// This route is designed to send back the logged in user (or undefined if they are NOT logged in)
server.get('/api/me', function(req, res){
	res.send(req.user)
})

//============
//PORT
//============
var port = 3000;
server.listen(port, function(){
  console.log('Server running on port ' + port);
})

