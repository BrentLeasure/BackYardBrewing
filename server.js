
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


//============
//PORT
//============
var port = 3000;
server.listen(port, function(){
  console.log('Server running on port ' + port);
})

