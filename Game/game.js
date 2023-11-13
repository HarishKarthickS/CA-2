var audio = new Audio("./bgm/game.mp3");
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
let low=document.getElementById("low");
let med=document.getElementById('med');
let high=document.getElementById("high");
window.localStorage.setItem('lowDt','');
window.localStorage.setItem('medDt','');
window.localStorage.setItem('highDt','');
let lowdt=window.localStorage.getItem('lowDt');
let meddt=window.localStorage.getItem('medDt');
let highdt=window.localStorage.getItem('highDt');
low.onclick = () =>{
    window.localStorage.setItem('lowDt','1');
    location.href='game-low.html';
}
med.onclick = () =>{
    window.localStorage.setItem('medDt','1');
    location.href='game-med.html';
}
high.onclick = () =>{
    window.localStorage.setItem('highDt','1');
    location.href='game-high.html';
}