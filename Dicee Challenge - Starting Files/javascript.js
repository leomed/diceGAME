var randomNumber1 = Math.floor(Math.random() * 6 + 1);// 1 - 6

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var imgLeft = document.getElementsByClassName("img1")[0];
var imgRight = document.getElementsByClassName("img2")[0];

var dice1 = imgLeft.setAttribute("src" , "images/dice" + randomNumber1 + ".png");

var dice2 = imgRight.setAttribute("src" , "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
var title = document.querySelector("div > h1");

title.textContent = "Player 1 Wins";
} else {
	var title = document.querySelector("div > h1");
	title.textContent = "Player 2 Wins";
}

if (randomNumber1 === randomNumber2) {
	var title = document.querySelector("div > h1");
	title.textContent = "Draw";
}