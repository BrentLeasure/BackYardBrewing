var express = require("express");
var bodyParser = ("require");

var server = express();


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + "./public"));