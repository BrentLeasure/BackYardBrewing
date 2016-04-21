var cheerio = require("cheerio");
var request = require("request");
var CronJob = require('cron').CronJob;
var events = require("../models/dataScrape");

var job = new CronJob('00 6 * * 6', function(req, res){

	//url being used for the request
	url = "http://www.coloradocraftbrews.com/beer-festivals/";

	request(url, function(error, response, html){

		if(!error){
			$ = cheerio.load(html);
			var href;
			var links = [];
			var titles = [];
			var dates = [];
			var data = [];
			var temp = [];
			var tempString;
			var hasTitle = false;
			$('.entry-content p strong').each(function(){
				var title = $(this).find("a").text();
				var date = $(this).text();
				var link = $(this).find("a").attr("href");
				// console.log(date);
				// console.log("-----------------");
				if(title != null && title != undefined){
					if(title != ""){
						hasTitle = true;
						titles.push(title);
					}

					if(link != undefined){
						links.push(link);
					}
					
					if(date.match("January|February|March|April|May|June|July|August|September|October|November|December|Check back for| Check back for|Stay tuned for") && date != " " && hasTitle){
						// console.log(dates.length);
						// console.log("DATE: " + date);
						dates.push(date); 
						hasTitle = false;
					}else if(date.match(", CO")){
						temp.push(date);
						// console.log("LOCATION: " + date);
						// console.log("-----------------");
					}
				}	
			})
			for(var i = 0; i < titles.length; i++){
				data.push({"festival" : titles[i], "date" : dates[i], "url" : links[i]});
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
			
			// console.log(temp.length);
			// console.log(dates.length);
			// console.log(links.length);
		}
		// res.send(data);
	})
});
job.start();
var getFestivals = function(){

}


module.exports = {
	// scraping   		: scraping,
	getFestivals	: getFestivals,
}