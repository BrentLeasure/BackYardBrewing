//===============
//  REQUIRES
//===============
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

var server = express();

var recipeController = require("./controllers/RecipeController")
var favRecipeController = require("./controllers/FavRecipeController")
var authenticationController = require('./controllers/Authentication');

var passportConfig = require('./config/passport');
var passport = require('passport');
//application configuration
//resave will keep it true

server.sessionMiddleware = session({
	secret            : "2CBABA1ITL#ST#1@92",
	resave            : true,
	saveUninitialized : false,
	rolling			  : true,
	cookie			  : {maxAge: 60000 * 60}
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

server.get("/updaterecipe", function(req, res){
	res.sendFile("/RecipeUpdate.html", {root: "./public/Recipe-Update"})
});

server.get("/beer/:beerAlias", recipeController.getRecipes);

server.get("/getallbeertypes", recipeController.getAllBeerTypes);

//MULTIPLE RECIPES
server.get("/getuserrecipes/:_id", recipeController.getUserRecipes);
//SINGLE RECIPE
server.get("/getuserrecipe/:_id", recipeController.getUserRecipe);

server.get("/getFavoriteRecipes", favRecipeController.getFavoriteRecipes);

//=============
//POST ROUTES
//=============
server.post("/createrecipe", recipeController.createRecipe);
server.post("/addFavoriteRecipe", favRecipeController.addFavoriteRecipe);

//=============
//PUT ROUTES
//=============
server.put("/updaterecipe", recipeController.updateRecipe);

//==============
//DELETE ROUTES
//==============
server.delete("/deleterecipe/:id", recipeController.deleteRecipe);



//==============
//PASSPORT AUTHENTICATION ROUTES
//==============

// Post received from submitting the login form
server.post('/auth/login', authenticationController.processLogin);

server.post('/auth/signup', authenticationController.processSignup);


server.get('/auth/logout', authenticationController.logout);

// This route is designed to send back the logged in user (or undefined if they are NOT logged in)
server.get('/api/me', function(req, res){
	if(req.user){
		req.user.password = "none of your damn business";
		res.send(req.user)
	}else{
		res.send(false);
	}
})

//============
//PORT
//============
var port = 80;
server.listen(port, function(){
  console.log('Server running on port ' + port);
})

