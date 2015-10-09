var express = require("express");
var bodyParser = ("require");

var server = express();


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + "./public"));

server.get("/", function(req, res){
	res.sendFile("/Home.html", {root: "./Home"})
});

server.get("/forums", function(req, res){
	res.sendFile("/Forum.html", {root: "./Forum"})
});
server.get("/recipesubmission", function(req, res){
	res.sendFile("/RecipeSubmission.html", {root: "./Recipe-Submission"})
});
server.get("/recipes", function(req, res){
	res.sendFile("/Recipe.html", {root: "./Recipes"})
});
server.get("/thebasics", function(req, res){
	res.sendFile("/TheBasics.html", {root: "./The-Basics"})
});

// server.get("/:user", function(req, req){
// 	res.sendFile()
// });