


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
	
	$(".chart").html(playerData.name);

	$.each(playerData.stats, function(i, item) {
		$(".chart").append("<div class='avg'>"+item.AVG+"</div>");
	});

}












