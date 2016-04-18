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
			var tempString;
			var hasTitle = false;
			$('.entry-content p strong').each(function(){
				
				var title = $(this).find("a").text();
				// var location = $(this).find("nth-child(2)").text();
				// console.log(location)
				var date = $(this).text();
				var link = $(this).find("a").attr("href");
				if(title != null && title != undefined){
					if(title != ""){
						hasTitle = true;
						titles.push(title);
					}

					if(link != undefined){
						links.push(link);
					}
					
					if(date.match("Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Check back for|Stay tuned for") && date != " " && hasTitle){
						dates.push(date);
						hasTitle = false;
					}
				}	
			})
			for(var i = 0; i < titles.length; i++){
				data.push({"festival" : titles[i], "date" : dates[i], "url" : links[i]});
			}
			

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