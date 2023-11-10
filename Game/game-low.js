var audio = new Audio("./bgm/Easy.mp3");
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
let india=document.getElementById('india');
let australia=document.getElementById("australia");
let brazil=document.getElementById("brazil");
let canada=document.getElementById("canada");
let china=document.getElementById("china");
let egypt=document.getElementById("egypt");
let france=document.getElementById("france");
let germany=document.getElementById("germany");
let italy=document.getElementById("italy");
let japan=document.getElementById("japan");
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
let option21=document.getElementById("op21");
let option22=document.getElementById("op22");
let option23=document.getElementById("op23");
let option24=document.getElementById("op24");
let option25=document.getElementById("op25");
let option26=document.getElementById("op26");
let option27=document.getElementById("op27");
let option28=document.getElementById("op28");
let option29=document.getElementById("op29");
let option30=document.getElementById("op30");
let option31=document.getElementById("op31");
let option32=document.getElementById("op32");
let option33=document.getElementById("op33");
let option34=document.getElementById("op34");
let option35=document.getElementById("op35");
let option36=document.getElementById("op36");
let option37=document.getElementById("op37");
let option38=document.getElementById("op38");
let option39=document.getElementById("op39");
let option40=document.getElementById("op40");
window.localStorage.setItem("score",'');
let scoreDt=window.localStorage.getItem("score");
country15=["India","Australia","Brazil","Canada","China","Egypt","France","Germany","Italy","Japan","Kenya","Mexico","South-africa","UK","US"];
let score=0;
option1.onclick=()=>{
    india.style.display="none";
    australia.style.display="block";
    resetTime(timerId)
}
option2.onclick=()=>{
    resetTime(timerId)
    india.style.display="none";
    australia.style.display="block";
}
option3.onclick=()=>{
    resetTime(timerId)
    score++;
    india.style.display="none";
    australia.style.display="block";
}
option4.onclick=()=>{
    resetTime(timerId)
    india.style.display="none";
    australia.style.display="block";
}
option5.onclick=()=>{
    resetTime(timerId)
    australia.style.display="none";
    brazil.style.display="block";
}
option6.onclick=()=>{
    resetTime(timerId)
    score++;
    australia.style.display="none";
    brazil.style.display="block";
}
option7.onclick=()=>{
    resetTime(timerId)
    australia.style.display="none";
    brazil.style.display="block";
}
option8.onclick=()=>{
    resetTime(timerId)
    australia.style.display="none";
    brazil.style.display="block";
}
option9.onclick=()=>{
    resetTime(timerId)
    brazil.style.display="none";
    canada.style.display="block";
}
option10.onclick=()=>{
    resetTime(timerId)
    brazil.style.display="none";
    canada.style.display="block";
}
option11.onclick=()=>{
    resetTime(timerId)
    brazil.style.display="none";
    canada.style.display="block";
}
option12.onclick=()=>{
    resetTime(timerId)
    score++;
    brazil.style.display="none";
    canada.style.display="block";
}
option13.onclick=()=>{
    resetTime(timerId)
    canada.style.display="none";
    china.style.display="block";
}
option14.onclick=()=>{
    resetTime(timerId)
    score++;
    canada.style.display="none";
    china.style.display="block";
}
option15.onclick=()=>{
    resetTime(timerId)
    canada.style.display="none";
    china.style.display="block";
}
option16.onclick=()=>{
    resetTime(timerId)
    score++;
    canada.style.display="none";
    china.style.display="block";
}
option17.onclick=()=>{
    resetTime(timerId)
    china.style.display="none";
    egypt.style.display="block";
}
option18.onclick=()=>{
    resetTime(timerId)
    china.style.display="none";
    egypt.style.display="block";
}
option19.onclick=()=>{
    resetTime(timerId)
    china.style.display="none";
    egypt.style.display="block";
}
option20.onclick=()=>{resetTime(timerId)
    china.style.display="none";
    egypt.style.display="block";
}
option21.onclick=()=>{
    resetTime(timerId)
    egypt.style.display="none";
    france.style.display="block";
}
option22.onclick=()=>{
    resetTime(timerId)
    egypt.style.display="none";
    france.style.display="block";
}
option23.onclick=()=>{
    resetTime(timerId)
    score++;
    egypt.style.display="none";
    france.style.display="block";
}
option24.onclick=()=>{
    resetTime(timerId)
    egypt.style.display="none";
    france.style.display="block";
}
option25.onclick=()=>{
    resetTime(timerId)
    france.style.display="none";
    germany.style.display="block";
}
option26.onclick=()=>{
    resetTime(timerId)
    score++;
    france.style.display="none";
    germany.style.display="block";
}
option27.onclick=()=>{
    resetTime(timerId)
    france.style.display="none";
    germany.style.display="block";
}
option28.onclick=()=>{
    resetTime(timerId)
    france.style.display="none";
    germany.style.display="block";
}
option29.onclick=()=>{
    resetTime(timerId)
    germany.style.display="none";
    italy.style.display="block";
}
option30.onclick=()=>{
    resetTime(timerId)
    germany.style.display="none";
    italy.style.display="block";
}
option31.onclick=()=>{
    resetTime(timerId)
    germany.style.display="none";
    italy.style.display="block";
}
option32.onclick=()=>{
    resetTime(timerId)
    score++;
    germany.style.display="none";
    italy.style.display="block";
}
option33.onclick=()=>{
    resetTime(timerId)
    score++;
    italy.style.display="none";
    japan.style.display="block";
}
option34.onclick=()=>{
    resetTime(timerId)
    italy.style.display="none";
    japan.style.display="block";
}
option35.onclick=()=>{
    resetTime(timerId)
    italy.style.display="none";
    japan.style.display="block";
}
option36.onclick=()=>{
    resetTime(timerId)
    italy.style.display="none";
    japan.style.display="block";
}
option37.onclick=()=>{
    resetTime(timerId)
    location.href = "./Endpage.html?score=" + score;
}
option38.onclick=()=>{
    resetTime(timerId)
    score++;
    location.href = "./Endpage.html?score=" + score;
}
option39.onclick=()=>{
    resetTime(timerId)
    location.href = "./Endpage.html?score=" + score;
}
option40.onclick=()=>{
    resetTime(timerId)
    location.href = "./Endpage.html?score=" + score;
}
let timer=document.getElementById("timer")
var time = 30
var timerId;
function startTimer() {
  time = 30;
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