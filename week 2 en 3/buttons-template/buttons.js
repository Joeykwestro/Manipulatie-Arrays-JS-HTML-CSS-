var num1 = 0

function button1() {
	num1++;
	document.getElementById('button1').innerHTML = num1;
	document.getElementById('main').style.background = "url('images/bg1.jpg')";
	document.getElementById('counter').src = "images/1.jpg";
}

var press1 = document.getElementById('button1').addEventListener("click", button1)


var num2 = 0

function button2() {
	num2++;
	document.getElementById('button2').innerHTML = num2;
	document.getElementById('main').style.background = "url('images/bg2.jpg')";
	document.getElementById('counter').src = "images/2.jpg";
}

var press2 = document.getElementById('button2').addEventListener("click", button2)


var num3 = 0

function button3() {
	num3++;
	document.getElementById('button3').innerHTML = num3;
	document.getElementById('main').style.background = "url('images/bg3.jpg')";
	document.getElementById('counter').src = "images/3.jpg";
}

var press3 = document.getElementById('button3').addEventListener("click", button3)