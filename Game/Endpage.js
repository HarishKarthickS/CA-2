var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
var score = urlParams.get("score");
var levelboard=document.getElementById("level-board");
var scoreBoard = document.getElementById("score-board");
var name1=document.getElementById("name");
var playAgainButton = document.getElementById("play-again-button");
var nameDt=window.localStorage.getItem("userName");
let lowdt=window.localStorage.getItem('lowDt');
let meddt=window.localStorage.getItem('medDt');
let highdt=window.localStorage.getItem('highDt');
name1.innerHTML=nameDt;
scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) => {
  location.href = "./game.html";
};
if(lowdt=='1'){
   levelboard.innerHTML='Easy';
}
else if(meddt=='1'){
    levelboard.innerHTML='Medium';
}
else if(highdt=='1'){
    levelboard.innerHTML='High';
}