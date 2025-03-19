var noOfLives = document.getElementById("livesNo");
var msg = document.getElementById("message");
var submit = document.getElementById("submit");
var randomNumber = Math.floor(Math.random()*100)+1;
var lives = 5;
submit.onclick = () => {
    console.log("Random Number:", randomNumber);
    var input = parseInt(document.getElementById("number").value);
    if(isNaN(input)||input<1||input > 100) {
        msg.style.display = "inherit";
        msg.innerHTML = "Please enter a valid number between 1 and 100!";
        return;
    }
    lives--;
    if(input===randomNumber)
    location.href = "./win.html";
    else if(lives===0) 
    location.href = "./lose.html";
    else{
        if(input>randomNumber)
        msg.innerHTML = "Oops! Your guess is too high!";
        else 
        msg.innerHTML = "Oops! Your guess is too low!";
        msg.style.display = "inherit";
        noOfLives.innerHTML = lives;
    }
};
