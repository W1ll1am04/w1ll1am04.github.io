// this script originates from w1ll1am04.github.io
// raw.githubusercontent.com/W1ll1am04/w1ll1am04.github.io/master/404.js
// this detects where you are during the 503 exception.

window.onload = function() {
	var wl = window.location + '';
	var man_page = null;
	
	if (wl.includes = "?"){
		var res = wl.split("?");
		man_page = res[0];
	}
	if (man_page.includes = "#") {
		var res1 = man_page.split("#");
		man_page = res1[0];
	}
	if (man_page == null) {
		man_page = "w1ll1am04.github.io";
	}
	console.error("503 Service Unavailable. This page is under maintence: " + '\n' + man_page);
}