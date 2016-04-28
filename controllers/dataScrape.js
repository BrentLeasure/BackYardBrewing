var cheerio = require("cheerio");
var request = require("request");
var CronJob = require('cron').CronJob;
var events = require("../models/dataScrape");

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
			var locations = [];
			var data = [];

			$('.entry-content p').each(function(){ 
				var title = $(this).find("a").text();
				var date = $(this)z	.text();
				if(title != null && title != undefined){
					console.log(date);
					if(title != ""){
						console.log(title)
						titles.push(title);		
					}
				}
			});
			// console.log(titles);
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
						locations.push(date.split("–").pop());
					}
			})
			for(var i = 0; i < titles.length; i++){
				data.push({"title" : titles[i], "date" : dates[i], "url" : links[i], "location" : locations[i]});
			}
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
			
			// console.log(body.events);
			// console.log(temp.length);
			// console.log(dates.length);
			// console.log(links.length);
		}
	})
}
job.start();
var getFestivals = function(req, res){
	events.eventList.find({name: "Colorado"}, function (err, data){
		if(err){
			res.send(err);
		}else{
			res.send(data[0]);
		}
	});
}


module.exports = {
	requestData   	: requestData,
	getFestivals	: getFestivals,
}