


var playerData;

$(document).ready(function() {
    getData();
});

function getData() {
	$.getJSON("js/baseballcard.json", function(data, error) {
		playerData = data;
		drawStuff();
	});
}

function drawStuff() {
	
	//The playerData variable contains our data.
	//I'll create variables here to illustrate how each attibute is accessed
	//I could also just do this inline below, but breaking it out here makes things a little clearer I think.

	var playerName = playerData.name;
	var playerTeam = playerData.club;

	//Creating a variable for our players stats, which is an array, or *list* of seasons.
	var playerStats = playerData.stats;

	//To access a season in our array, we'll identify it by its index number, or order in the array
	//For example, the first season would be playerStats[0] (Remember, sequences are zero-based in JavaScript)
	//But in order to access the last season, we need to know the index number of that season in the array.
	//We could count just look at the JSON and count them, sure. But that's work. And we're laaaazy.
	//So we'll do it with code:

	var lastSeasonIndex = playerStats.length -1;

	//.length tells us how many items are in our list. And since index values are zero based...
	//... we're really looking for one less than the total number of items.
	//So the most recent season is this:

	var lastSeasonStats = playerData.stats[lastSeasonIndex];

	var lastSeasonHomeRuns = lastSeasonStats.HR;
	var lastSeasonYear = lastSeasonStats.year;
	var lastSeasonTeam = lastSeasonStats.club;

	//All that's left to do is write it to our page.
	$(".chart").append("<h1>"+playerName+"</h1>");
	$(".chart").append("<h3>"+playerTeam+"</h3>");
	$(".chart").append("<p>In "+lastSeasonYear+", "+playerName+" hit "+lastSeasonHomeRuns+" home runs for the "+lastSeasonTeam);


	//Me: Cool, right?
	//You: Yep, pretty cool.


	// $.each(playerData.stats, function(i, item) {
	// 	$(".chart").append("<div class='avg'>"+item.AVG+"</div>");
	// });

}












