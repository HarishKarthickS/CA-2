var audio = new Audio("./bgm/High.mp3");
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
let Kenya=document.getElementById('Kenya');
let Norway=document.getElementById("Norway");
let Mongolia=document.getElementById("Mongolia");
let Panama=document.getElementById("Panama");
let Hungary=document.getElementById("Hungary");
let Estonia=document.getElementById("Estonia");
let Tunisia=document.getElementById("Tunisia");
let Mexico=document.getElementById("Mexico");
let southAfrica=document.getElementById("south-africa");
let Paraguay=document.getElementById("Paraguay");
let option1=document.getElementById("op1");
let option2=document.getElementById("op2");
let option3=document.getElementById("op3");
let option4=document.getElementById("op4");
let option5=document.getElementById("op5");
let option6=document.getElementById("op6");
let option7=document.getElementById("op7");
let option8=document.getElementById("op8");
let option9=document.getElementById("op9");
let option10=document.getElementById("op10");
let option11=document.getElementById("op11");
let option12=document.getElementById("op12");
let option13=document.getElementById("op13");
let option14=document.getElementById("op14");
let option15=document.getElementById("op15");
let option16=document.getElementById("op16");
let option17=document.getElementById("op17");
let option18=document.getElementById("op18");
let option19=document.getElementById("op19");
let option20=document.getElementById("op20");
let score=0;
option1.onclick=()=>{
    Kenya.style.display="none";
    Norway.style.display="block";
    resetTime(timerId)
}
option2.onclick=()=>{
    let country=document.getElementById("country").value;
    if (country=="Kenya") score++;
    resetTime(timerId)
    Kenya.style.display="none";
    Norway.style.display="block";
}
option3.onclick=()=>{
    resetTime(timerId)
    Norway.style.display="none";
    Mongolia.style.display="block";
}
option4.onclick=()=>{
    let country=document.getElementById("country").value;
    if (country=="Norway") score++;
    resetTime(timerId)
    Norway.style.display="none";
    Mongolia.style.display="block";
}
option5.onclick=()=>{
    resetTime(timerId)
    Mongolia.style.display="none";
    Panama.style.display="block";
}
option6.onclick=()=>{
    let country=document.getElementById("country").value;
    if (country=="Mongolia") score++;
    resetTime(timerId)
    Mongolia.style.display="none";
    Panama.style.display="block";
}
option7.onclick=()=>{
    resetTime(timerId)
    Panama.style.display="none";
    Hungary.style.display="block";
}
option8.onclick=()=>{
    let country=document.getElementById("country").value;
    if (country=="Panama") score++;
    resetTime(timerId)
    Panama.style.display="none";
    Hungary.style.display="block";
}
option9.onclick=()=>{
    resetTime(timerId)
    Hungary.style.display="none";
    Estonia.style.display="block";
}
option10.onclick=()=>{
    let country=document.getElementById("country").value;
    if (country=="Hungary") score++;
    resetTime(timerId)
    Hungary.style.display="none";
    Estonia.style.display="block";
}
option11.onclick=()=>{
    resetTime(timerId)
    Estonia.style.display="none";
    Tunisia.style.display="block";
}
option12.onclick=()=>{
    let country=document.getElementById("country").value;
    if (country=="Estonia") score++;
    resetTime(timerId)
    Estonia.style.display="none";
    Tunisia.style.display="block";
}
option13.onclick=()=>{
    resetTime(timerId)
    Tunisia.style.display="none";
    Mexico.style.display="block";
}
option14.onclick=()=>{
    let country=document.getElementById("country").value;
    if (country=="Tunisia") score++;
    resetTime(timerId)
    Tunisia.style.display="none";
    Mexico.style.display="block";
}
option15.onclick=()=>{
    resetTime(timerId)
    Mexico.style.display="none";
    southAfrica.style.display="block";
}
option16.onclick=()=>{
    let country=document.getElementById("country").value;
    if (country=="Mexico") score++;
    resetTime(timerId)
    Mexico.style.display="none";
    southAfrica.style.display="block";
}
option17.onclick=()=>{
    resetTime(timerId)
    southAfrica.style.display="none";
    Paraguay.style.display="block";
}
option18.onclick=()=>{
    let country=document.getElementById("country").value;
    if (country=="South Africa") score++;
    resetTime(timerId)
    southAfrica.style.display="none";
    Paraguay.style.display="block";
}
option19.onclick=()=>{
    location.href = "./Endpage.html?score=" + score;
}
option20.onclick=()=>{
    let country=document.getElementById("country").value;
    if (country=="Paraguay") score++;
    location.href = "./Endpage.html?score=" + score;
}


let timer=document.getElementById("timer")
var time = 42;
var timerId;
function startTimer() {
  time = 42;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./Endpage.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();