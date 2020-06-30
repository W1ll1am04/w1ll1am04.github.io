// this script originates from w1ll1am04.github.io
// https://w1ll1am04.github.io/scripts/quantity.js
// this script checks for a load arg and requests repository information from github api.

const debug = false;
window.onload=function() {
	try {
		console.log("INFO: Fetching github API...");
		webcount();
		if (check_arg() == false) {
			console.log("INFO: Found load_arg: no_api.");
		}
		else {
			var request = new XMLHttpRequest();
			request.addEventListener("load", reqListener);
			request.open("GET", "https://api.github.com/users/w1ll1am04");
			request.send();
			
			function reqListener () {
				var parsed = JSON.parse(this.responseText);
				if (debug) {console.log(parsed["public_repos"]);}
				document.getElementById("quantity").innerHTML = "(" + parsed["public_repos"] + ")";
			}
			console.log("INFO: sucessfully fetched github API.");
		}

	}
	catch (except) {
		console.warn("main() failed and suffered an exception: " + except);
	}
}

function check_arg() {
	try {
		var url = location.href;
		var arg_split = url.split("?");
		if (debug) {console.log(arg_split);}
		if (arg_split.length == 2) {
			if (arg_split[1] === "no_api") {
				if (debug) {console.log("load_arg=" + true);}
				return false;
			}
			else {
				if (debug) {console.log("load_arg=" + arg_split[1]);}
				return true;
			}
		}
		else {
			if (debug) {console.log("load_arg=" + undefined);}
			return true;
		}
		return false;
	}
	catch (except) {
		console.warn("check_arg() failed and suffered an exception: " + except);
		return false;
	}
}

function webcount() {
	try {
		if (check_arg() == true) {
			var web_projects = {
			  "total_projects": 1,
			  "astley_redirect": [
				{
				  "project_name": "astley-redirect",
				  "project_desc" : "Redirect if the system date is the same as upload date on 'Never Gonna Give You Up'. with all kinds of options. ",
				  "has_example" : true,
				  "project_url" : "https://w1ll1am04.github.io/astley-redirect/examples/",
				  "version": 1.0,
				  "editions": [ "core", "full" ]
				}
			  ]
			}
			document.getElementById("web_quantity").innerHTML = "(" + web_projects["total_projects"] + ")";
			return true;
		}
		else {
			if (document.getElementById("projects-message")) {
				document.getElementById("projects-message").innerHTML = " These projects are static, they are manually added. API is not used to fetch them.";
				return true;
			}
			else {
				return false;
			}
		}
	}
	catch (except) {
		console.warn("webcount() failed and suffered an exception: " + except + ", on line: " + except.lineNumber);
		return false;
	}
}
