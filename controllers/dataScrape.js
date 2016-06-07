var cheerio = require("cheerio");
var request = require("request");
var CronJob = require('cron').CronJob;
var events = require("../models/dataScrape");
var geocoderProvider = 'google'
var httpAdapter = "https";

var extra = {
    formatter: null 
};

var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);

var job = new CronJob('00 6 * * 6', function(req, res){
	requestData();
});

var requestData = function(){
	//url being used for the request
	url = "http://www.coloradocraftbrews.com/beer-festivals/";

	request(url, function(error, response, html){
		if(!error){
			$ = cheerio.load(html);
			var count = 0;
			var hasTitle = false;
			var links = [];
			var titles = [];
			var dates = [];
			var hasLocation = [];
			var locations = [];
			var data = [];

			//gets the title and urls as well as finds out if there is a location
			$('.entry-content p').each(function(){ 
				var title = $(this).find("a").text();
				var link = $(this).find("a").attr("href");
				var text = $(this).text();
				
				if(title != null && title != undefined && text != "Colorado beer festivals, brewery events, and other Colorado craft beer activities."){
					if(title != ""){
						titles.push(title);		
					}

					if(text.match(", CO")){
						hasLocation.push(1);
					}else{
						hasLocation.push(0);
					}
				
					if(link != undefined){
						links.push(link);
					}
				}
			});

			//gets the dates and locations
			$('.entry-content p strong').each(function(){
				var date = $(this).text();
					
					if(date.match("January|February|March|April|May|June|July|August|September|October|November|December|Check back for| Check back for|Stay tuned for") && date != " "){
						dates.push(date); 
					}

					if(date.match(", CO")){
						var tempString = date.split("–").pop();
						locations[count] = tempString.substring(0, tempString.indexOf("CO") + 2);
						count++;
					}else if(hasLocation[count] == 0){
						locations[count] = "N/A";
						count++;
					}
			});

			geocodeLocations(locations.slice(0), [], function(returnData){
				returnData.reverse();
				for(var i = 0; i < titles.length; i++){
					var latitude;
					var longitude;
					if (returnData[i]) {
						latitude = returnData[i].latitude;
						longitude = returnData[i].longitude;
					} else {
						latitude = "N/A";
						longitude = "N/A";
					}
					data.push({"title" : titles[i], "date" : dates[i], "url" : links[i], "location" : locations[i], "latitude": latitude, "longitude": longitude});
				}
				pushData(data);
			});
			
		}
	})
}

var geocodeLocations  = function(locations, latLong, callback){
	if(locations.length != 0){
		var localLocation = locations.pop();
		setTimeout(function(){
			geocoder.geocode(localLocation, function(err, res){
				if(res == undefined){
					latLong.push({"latitude": "N/A", "longitude": "N/A"})
				}else{
					latLong.push(res[0]);
				}
				geocodeLocations(locations, latLong, callback);
			});
		}, 1000);
	}else{
		callback(latLong);	
	}
}

var pushData = function(data){
	var name = "Colorado";
	var body = {"name" : name, "events" : data};
	events.eventList.find({}, function (err, count) {
	    if (!err && count.length == 0) {
	        var newEvents = new events.eventList(body);
			newEvents.save(function(err){
				if(err){
					console.log("Error: " + err);
				}else{
					console.log("success!");
				}
			});
	    }else{
		    events.eventList.update({name: body.name}, body, function(err){
				if(err){
					console.log(err);
				}else{
					console.log("successful update.");
				}
			});
	    }
	});
}

var getFestivals = function(req, res){
	events.eventList.find({name: "Colorado"}, function (err, data){
		if(err){
			res.send(err);
		}else{
			res.send(data[0]);
		}
	});
}

job.start();

module.exports = {
	requestData   	: requestData,
	getFestivals	: getFestivals,
}