let US=document.getElementById("US");
let Norway=document.getElementById("Norway");
let Brazil=document.getElementById("Brazil");
let Panama=document.getElementById("Panama");
let Germany=document.getElementById("Germany");
let Estonia=document.getElementById("Estonia");
let Kenya=document.getElementById('Kenya');
let Mexico=document.getElementById("Mexico");
let UK=document.getElementById("UK");
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
    US.style.display="none";
    Norway.style.display="block";
    resetTime(timerId)
}
option2.onclick=()=>{
    let country1=document.getElementById("country1");
    var country = country1.value;
    if (country=="United States") score++;
    resetTime(timerId)
    US.style.display="none";
    Norway.style.display="block";
}
option3.onclick=()=>{
    resetTime(timerId)
    Norway.style.display="none";
    Brazil.style.display="block";
}
option4.onclick=()=>{
    let country=document.getElementById("country2").value;
    if (country=="Norway") score++;
    resetTime(timerId)
    Norway.style.display="none";
    Brazil.style.display="block";
}
option5.onclick=()=>{
    resetTime(timerId)
    Brazil.style.display="none";
    Panama.style.display="block";
}
option6.onclick=()=>{
    let country=document.getElementById("country3").value;
    if (country=="Brazil") score++;
    resetTime(timerId)
    Brazil.style.display="none";
    Panama.style.display="block";
}
option7.onclick=()=>{
    resetTime(timerId)
    Panama.style.display="none";
    Germany.style.display="block";
}
option8.onclick=()=>{
    let country=document.getElementById("country4").value;
    if (country=="Panama") score++;
    resetTime(timerId)
    Panama.style.display="none";
    Germany.style.display="block";
}
option9.onclick=()=>{
    resetTime(timerId)
    Germany.style.display="none";
    Estonia.style.display="block";
}
option10.onclick=()=>{
    let country=document.getElementById("country5").value;
    if (country=="Germany") score++;
    resetTime(timerId)
    Germany.style.display="none";
    Estonia.style.display="block";
}
option11.onclick=()=>{
    resetTime(timerId)
    Estonia.style.display="none";
    Kenya.style.display="block";
}
option12.onclick=()=>{
    let country=document.getElementById("country6").value;
    if (country=="Estonia") score++;
    resetTime(timerId)
    Estonia.style.display="none";
    Kenya.style.display="block";
}
option13.onclick=()=>{
    resetTime(timerId)
    Kenya.style.display="none";
    Mexico.style.display="block";
}
option14.onclick=()=>{
    let country=document.getElementById("country7").value;
    if (country=="Kenya") score++;
    resetTime(timerId)
    Kenya.style.display="none";
    Mexico.style.display="block";
}
option15.onclick=()=>{
    resetTime(timerId)
    Mexico.style.display="none";
    UK.style.display="block";
}
option16.onclick=()=>{
    let country=document.getElementById("country8").value;
    if (country=="Mexico") score++;
    resetTime(timerId)
    Mexico.style.display="none";
    UK.style.display="block";
}
option17.onclick=()=>{
    resetTime(timerId)
    UK.style.display="none";
    Paraguay.style.display="block";
}
option18.onclick=()=>{
    let country=document.getElementById("country9").value;
    if (country=="United Kingdom") score++;
    resetTime(timerId)
    UK.style.display="none";
    Paraguay.style.display="block";
}
option19.onclick=()=>{
    location.href = "./Endpage.html?score=" + score;
}
option20.onclick=()=>{
    let country=document.getElementById("country10").value;
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