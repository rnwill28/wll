function valUser() {

var userName = document.getElementById("userName").value;
var psWrd = document.getElementById("password").value;

	if(userName == "pusa" && psWrd == "Mayor") {
		window.location.href = "Resume/MyResume.html";
		document.getElementById("userName").reset();
	} else if ( userName == "" || psWrd == "") {
		alert("Login failed, do not leave Username or Password blank");
	} else {
		alert("Incorrect Username or Password");
	}
}

function activity(){
	window.location.href = "../Activity.html";
}
function logOut(){
	window.location.href = "../Test2.html";
}

function Add(){
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 + num2;

	document.getElementById("result").value = result;   
}

function Subtract(){
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 - num2;

	document.getElementById("result").value = result;   
	 
}

function Multiply(){
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 * num2;

	document.getElementById("result").value = result;   
}

function Divide(){
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var result = num1 / num2;

	document.getElementById("result").value = result;   
}	
