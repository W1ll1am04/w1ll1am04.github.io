// this script originates from w1ll1am04.github.io
// raw.githubusercontent.com/W1ll1am04/w1ll1am04.github.io/master/sch.js
// this script checks the date to check if the month = december then display snow, else do not.

window.onload=function() {
	if (new Date().getMonth() == 11) {
		var snow_obj = document.getElementById("snow_obj").style.display = "block";
	}
	else {
		var snow_obj = document.getElementById("snow_obj").style.display = "none";
	}
}