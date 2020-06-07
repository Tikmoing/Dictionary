//单词调整效果
//
if(window.name != "aidanci"){
    location.reload();
    window.name = "aidanci";
}
else{
    window.name = "";
}

var ig_get = 0
if (!($(".sousuokuang").val())){
	$(".sousuokuang").css("color", "grey");
    $(".sousuokuang").css("font-size", "10px");
    $(".sousuokuang").css("top", "0px");
}


function GuiDong() {
	this.getGui = function getGui() {
		var getrandom = randomint(585);
		$('.sousuokuang').val(word_list[getrandom]);
	}
	this.go = function() {
		id_get = setInterval(this.getGui, 2000);
	}
}

var Gui = new GuiDong();

Gui.go();
//搜索效果
//
//


function inputForText() {
	$(".sousuokuang").focus(
		function() {
			if (id_get != 0) {
				$(this).val("");
				$(this).css("color", "black");
				$(this).css("font-size", "18px");
				$(this).css("top", "2px");
				clearInterval(id_get);
				id_get = 0;
			}
		}
	);

	$(".sousuokuang").blur(
		function() {
			if (!($(this).val()) || id_get != 0) {
				$(this).css("color", "grey");
				$(this).css("font-size", "10px");
				$(this).css("top", "0px");
				Gui.go()
			}
		}
	);
}


function getWord() {
	return $('.sousuokuang').val();
}

$(".button").click(function() {
	url = "html/word.html?id="
	for (var i = 0; i < word_list.length; i++) {
		if (eval("word_list[i].search(/" + getWord() + "/i)") != -1) {
			url += i + 'w';
		}
	}
	window.location = url
})

$(document).keypress(
function(e){
	if(e.keyCode==13){
		$('.button').click();
	}else{
		console.log(e.keyCode);
		$('.sousuokuang').focus()
	}

}

	)



inputForText()