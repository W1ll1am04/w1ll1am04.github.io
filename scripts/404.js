// this script originates from w1ll1am04.github.io
// // https://w1ll1am04.github.io/scripts/404.js
// this detects where you are during the 404 exception & optimizes text for a better screen res.

window.onload = function() {
	try {
		var wl = location.href;
		var error_page = null;
		var split_page = null;
		var tinyres = ["740", "360"];
		
		if (wl.includes = "?"){
			var res = wl.split("?");
			error_page = res[0];
		}
		if (error_page.includes = "#") {
			var res = error_page.split("#");
			error_page = res[0];
		}
		if (error_page.includes = "/") {
			var res = error_page.split("/");
			split_page = ("/" + res[3]);
		}
		if (error_page == null) {
			error_page = "https://w1ll1am04.github.io";
		}
		else if (split_page == null) {
			error_page = "this page";
		}
		
		if (document.getElementById("location")) {
			document.getElementById("location").innerHTML = "'" +split_page+ "'";
		}
		console.error("404 Not found. This page does not exist on: " + '\n' + error_page);
		if (tinyres[0] < 740) {
			document.getElementById("error_l").innerHTML = "This page does not exist.";
			document.getElementById("404_l").innerHTML = "404 Not found.";
		}
	}
	catch (except) {
		console.error("While trying to display 404 information an exception encountered: " + except);
	}
}