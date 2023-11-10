const button = document.getElementById("button");
let userDt=window.localStorage.getItem('userDt');
let sound=document.getElementById("sound");
var audio = new Audio("./bgm/index.mp3");
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



if(userDt=='1'){
    button.onclick = () => {
        location.href = "./game.html";
      };
}
else{
    window.localStorage.setItem('userDt',0);
    button.onclick = () => {
        location.href = "./signup.html";
      };
}