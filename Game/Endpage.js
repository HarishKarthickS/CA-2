var audio = new Audio("./bgm/endpage.mp3");
let volume=document.getElementById("volume");
let mute=document.getElementById("mute");
let i=0;
sound.onclick=()=>{
  if(i==0){
  audio.play();
  volume.style.display="block";
  mute.style.display="none";
  i=1;}
 else{
     audio.pause();
     volume.style.display="none";
     mute.style.display="block";
     i=0;
   }
}
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