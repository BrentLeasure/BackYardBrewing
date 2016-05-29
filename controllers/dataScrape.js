var cheerio = require("cheerio");
var request = require("request");
var CronJob = require('cron').CronJob;
var events = require("../models/dataScrape");
var geocoderProvider = 'google'
var httpAdapter = "https";
var Q = require('q');

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

			//gets the title and finds out if there is a location
			$('.entry-content p').each(function(){ 
				var title = $(this).find("a").text();
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
				}
			});

			//gets the urls, dates and locations
			$('.entry-content p strong').each(function(){
				var date = $(this).text();
				var link = $(this).find("a").attr("href");
				
					if(link != undefined){
						links.push(link);
					}
					
					if(date.match("January|February|March|April|May|June|July|August|September|October|November|December|Check back for| Check back for|Stay tuned for") && date != " "){
						dates.push(date); 
					}

					if(date.match(", CO")){
						if(hasLocation[count] == 1){
							locations[count] = date.split("–").pop();
						}else{
							locations[count] = "N/A";
						}
						count++;
					}
			})
			//uses geocoder to get lat/long coordinates.
			for(var i = 0; i < titles.length; i++){
				Q(locations[i])
				.delay(1000)
				.then(function(location){
					//goes into geocode function
					geocode(location);
				});
			
			}
			// 
			// pushData(data);
		}
	})
}
//quene
//q library -- LOOK INTO IT
//promises for node
//console.log "Promise" to see if node has it
var geocode = function(location){
	if(location != "N/A"){
		geocoder.geocode(location, function(err, res){
			// data.push({"title" : titles[i], "date" : dates[i], "url" : links[i], "location" : locations[i]});
		});
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