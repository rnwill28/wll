function showmessage(){
	alert ("Hi");

	for (var i = 5; i > 0; i--){
		alert("variable I is now: " + i);
	}
}

function getDouble(){
	var num = document.getElementById("number").value;
	alert(num * num);
}

function getTotal(){
	var totElem = document.getElementsByTagName("p");
	alert(totElem.length);
}