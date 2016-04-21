var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/BackYardBrewing");

var eventsSchema = mongoose.Schema({
	name   		: {type : String},
	events 		: [{
					    festival : String,
					    date 	 : String,
					    url		 : String,
     				}],
})

module.exports = {
	eventList	   : mongoose.model("event", eventsSchema),
}