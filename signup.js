// Creating an audio element for background music
var audio = new Audio("./bgm/signup.mp3");

// Getting references to volume and mute buttons
let volume = document.getElementById("volume");
let mute = document.getElementById("mute");

// Variable to toggle between play and pause states
let i = 0;

// Event listener for the sound button to toggle audio play/pause and button display
sound.onclick = () => {
  if (i == 0) {
    // If audio is not playing, play it
    audio.play();
    // Display the volume icon and hide the mute icon
    volume.style.display = "block";
    mute.style.display = "none";
    i = 1;
  } else {
    // If audio is playing, pause it
    audio.pause();
    // Display the mute icon and hide the volume icon
    volume.style.display = "none";
    mute.style.display = "block";
    i = 0;
  }
}

// Retrieving user data from localStorage
let userDt = window.localStorage.getItem('userDt');

// Getting references to HTML elements
let howToPlay = document.getElementById('button1');
let startGame = document.getElementById('button2');
let signup = document.getElementById('abs');
let playrules = document.getElementById('abs1');
let exit = document.getElementById('exit');

// Setting initial values in localStorage
window.localStorage.setItem('userName', '');
let userName = window.localStorage.getItem('userName');
window.localStorage.setItem('userDob', '');
let userdob = window.localStorage.getItem('userDob');

// Event listener for the "How to Play" button to switch visibility
howToPlay.onclick = () => {
    signup.style.visibility = 'hidden';
    playrules.style.visibility = 'visible';
}

// Event listener for the "Exit" button to switch visibility
exit.onclick = () => {
    signup.style.visibility = 'visible';
    playrules.style.visibility = 'hidden';
}

// Event listener for the "Start Game" button to store user data in localStorage
startGame.onclick = () => {
    let name1 = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    
    // Storing user data in localStorage
    window.localStorage.setItem('userName', name1.toString());
    window.localStorage.setItem('userDob', dob.toString());
}
