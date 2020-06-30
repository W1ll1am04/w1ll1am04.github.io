// this script originates from w1ll1am04.github.io
// https://w1ll1am04.github.io/scripts/quantity.js
// This script handles the tsm message. (tsm = toosmallmessage)

document.onload=tsm();

function tsm() { // test for small screen
	if (screen.width < 484 && screen.height < 900) {
		document.getElementById("tsm").style.display = "block";
		if (document.getElementById("about_page")) { /* id 'about_page' is only a thing on the about page. */
			document.getElementById("about_page").innerHTML = "About";
		}
		else {
			console.log("no :(");
		}
	}
	if (debug == true) {console.log(screen.width +"x"+ screen.height);}
	window.addEventListener('orientationchange', check_orientation);	
}

function check_orientation() {
    var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
	
	if (orientation === "landscape-primary" || orientation === "landscape-secondary") {
		document.getElementById("tsm").style.display = "none";
	} 
	else if (orientation === "portrait-secondary" || orientation === "portrait-primary") { 
		document.getElementById("tsm").style.display = "block";
	}
	else if (orientation === undefined) {
		return;
	}
}

function disable_rtw() {
	document.getElementById("tsm").style.display = "none";
}