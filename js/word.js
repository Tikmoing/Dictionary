var urlids = window.location.search; //url？后面的内容
ids_array = urlids.split('w');
ids_array[0] = ids_array[0].replace("?id=", '');
ids_array.pop()

function appendTd(number) {
	var colorrgb;
	$(".output").append("<tr><td class='me" + number + "'>" + word_list[number] + "</td></tr>");
	if (number < 255) {
		colorrgb = "rgb(" + (255 - number) + ",0,0)"
	} else {
		colorrgb = "rgb(0,0,0)"
	}
	$(".me" + number).css("color", colorrgb);
}

for (var i = 0; i < ids_array.length; i++) {
	ids_array[i] = parseInt(ids_array[i]);
	appendTd(ids_array[i]);
}


$(document).keydown(
	function(e) {
		if (e.keyCode == 8) {
			window.location = '../index.html';
		}
	}

);