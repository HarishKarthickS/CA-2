// get the button element by its id
const button = document.getElementById("button");
// get the user data from the local storage
let userDt=window.localStorage.getItem('userDt');
// get the sound element by its id
let sound=document.getElementById("sound");
// create a new audio object with the source file
var audio = new Audio("./bgm/index.mp3");
// get the volume element by its id
let volume=document.getElementById("volume");
// get the mute element by its id
let mute=document.getElementById("mute");
// initialize a variable to keep track of the sound state
let i=0;
// add an event listener to the sound element
sound.onclick=()=>{
  // if the sound is off, play the audio and show the volume icon
  if(i==0){
  audio.play();
  volume.style.display="block";
  mute.style.display="none";
  i=1;}
 // else, pause the audio and show the mute icon
 else{
     audio.pause();
     volume.style.display="none";
     mute.style.display="block";
     i=0;
   }
}

// check the user data value
if(userDt=='1'){
    // if the user data is 1, redirect to the game page when the button is clicked
    button.onclick = () => {
        location.href = "./game.html";
      };
}
else{
    // else, set the user data to 0 and redirect to the signup page when the button is clicked
    window.localStorage.setItem('userDt',0);
    button.onclick = () => {
        location.href = "./signup.html";
      };
}
