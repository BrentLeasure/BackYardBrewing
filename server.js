
//requires
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

var server = express();

var recipeController = require("./controllers/recipeController")

//application configuration
//resave will keep it true
server.use(session({
	secret            : "2CBABA1ITL#ST#1@92",
	resave            : true,
	saveUninitialized : false,
}));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));



//Get Routes
server.get("/", function(req, res){
	res.sendFile("Home.html", {root: "./public/Home"})
});
server.get("/forums", function(req, res){
	res.sendFile("Forum.html", {root: "./public/Forum"})
});
server.get("/recipesubmission", function(req, res){
	res.sendFile("RecipeSubmission.html", {root: "./public/Recipe-Submission"})
});
server.get("/recipes", function(req, res){
	res.sendFile("Recipes.html", {root: "./public/Recipes"})
});
server.get("/thebasics", function(req, res){
	res.sendFile("TheBasics.html", {root: "./public/The-Basics"})
});
// server.get("/:user", function(req, req){
// req.params.users
// 	res.sendFile()
// });


server.get("/:beerAlias", recipeController.getRecipes);



//Post Routes
server.post("/createrecipe", recipeController.createRecipe);

//port
var port = 3000;
server.listen(port, function(){
  console.log('Server running on port ' + port);
})
//Recipe submission process 

