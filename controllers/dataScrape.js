var cheerio = require("cheerio");
var request = require("request");
var dataScrapeModel = require("../models/dataScrape")

var scraping = function(req, res){

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
						console.log(dates.length);
						console.log("DATE: " + date);
						dates.push(date); 
						hasTitle = false;
					}else if(date.match(", CO")){
						temp.push(date);
						console.log("LOCATION: " + date);
						console.log("-----------------");
					}
				}	
			})
			for(var i = 0; i < titles.length; i++){
				data.push({"festival" : titles[i], "date" : dates[i], "url" : links[i]});
			}
			
			// console.log(temp.length);
			// console.log(dates.length);
			// console.log(links.length);
		}
		res.send(data);
	})
}

var getFestivals = function(){

}


module.exports = {
	scraping   		: scraping,
	getFestivals	: getFestivals,
}