// this script originates from w1ll1am04.github.io
// raw.githubusercontent.com/W1ll1am04/w1ll1am04.github.io/master/404.js
// this detects where you are during the 404 exception & optimizes text for a better screen res.

window.onload = function() {
	var wl = window.location + '';
	var error_page = null;
	var tiny_width = 360;
	var tiny_height = 740;
	
	if (wl.includes = "?"){
		var res = wl.split("?");
		error_page = res[0];
	}
	if (error_page.includes = "#") {
		var res1 = error_page.split("#");
		error_page = res1[0];
	}
	if (error_page == null) {
		error_page = "w1ll1am04.github.io";
	}
	console.error("404 Not found. This page does not exist on: " + '\n' + error_page);
	if (screen.width < 740) {
		document.getElementById("error_l").innerHTML = "This does not page exist.";
		document.getElementById("404_l").innerHTML = "404 Not found.";
	}
}