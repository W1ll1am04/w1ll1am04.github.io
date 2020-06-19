// this script originates from w1ll1am04.github.io
// // https://w1ll1am04.github.io/scripts/sch.js
// this script checks the date to check if the month = december then display snow, else do not.

window.onload=function() {
	try {
		var snow_obj;
		var date = new Date().getMonth()
		if (date == 11) {
			console.log("sch.js: month is " + date + ", snow_obj set to visible.");
			snow_obj = document.getElementById("snow_obj").style.display = "block";
		}
		else {
			snow_obj = document.getElementById("snow_obj").style.display = "none";
		}
	}
	catch (except) {
		var exceptformat = "An execption occured on page:\nWhile checking if the month is december an exception occured: " + "'" + except + "'";
		console.log(exceptformat);
		alert(exceptformat);
	}
}