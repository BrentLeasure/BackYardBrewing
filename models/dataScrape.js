var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/BackYardBrewing");

var eventsSchema = mongoose.Schema({
	name   		: {type : String},
	events 		: [{
					    title 	  : String,
					    date 	  : String,
					    url		  : String,
					    location  : String,
					    latitude  : String,
					    longitude : String, 
     				}],
})

module.exports = {
	eventList	   : mongoose.model("event", eventsSchema),
}