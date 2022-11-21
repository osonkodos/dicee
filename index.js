var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var src1 = "images/dice" + randomNumber1 + ".png";
var src2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);

var winner = "player"

if (randomNumber1 > randomNumber2) {
  winner = "Player 1 won!"
} else if (randomNumber1 < randomNumber2) {
  winner = "Player 2 won!"
} else { winner = "It is a draw!"}

document.querySelector("h1").textContent = winner;
