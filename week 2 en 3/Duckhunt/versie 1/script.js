var positionX = 600;
var positionY = 250;

var duck = document.getElementById("duck").addEventListener("click", duck);
function duck(){
	var duck = document.getElementById("duck").style.display="none";
}

var left = document.getElementById("left").addEventListener("click", left);
function left(){
	positionX -= 75;
	console.log(positionX);	
	var positionX2 = document.getElementById("duck").style.left = positionX + "px";
	var positionY2 = document.getElementById("duck").style.top = positionY + "px";
}

var right = document.getElementById("right").addEventListener("click", right);
function right(){
	positionX += 75;
	console.log(positionX);
	var positionX2 = document.getElementById("duck").style.left = positionX + "px";
	var positionY2 = document.getElementById("duck").style.top = positionY + "px";
}

var top2 = document.getElementById("top").addEventListener("click", top2);
function top2(){
	positionY -= 75;
	console.log(positionY);
	var positionX2 = document.getElementById("duck").style.left = positionX + "px";
	var positionY2 = document.getElementById("duck").style.top = positionY + "px";
}

var bottom = document.getElementById("bottom").addEventListener("click", bottom);
function bottom(){
	positionY += 75;
	console.log(positionY);
	var positionX2 = document.getElementById("duck").style.left = positionX + "px";
	var positionY2 = document.getElementById("duck").style.top = positionY + "px";
}

var spawn = document.getElementById("respawn").addEventListener("click", respawn);
function respawn(){
	positionY = 250;
	positionX = 600;
	var positionX2 = document.getElementById("duck").style.left = positionX + "px";
	var positionY2 = document.getElementById("duck").style.top = positionY + "px";
	var duck = document.getElementById("duck").style.display="inline-block";
	console.log(positionX);	
	console.log(positionY);
}