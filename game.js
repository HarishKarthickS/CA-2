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
    location.href='./Game/game-low.html';
}
med.onclick = () =>{
    window.localStorage.setItem('medDt','1');
    location.href='./Game/game-med.html';
}
high.onclick = () =>{
    window.localStorage.setItem('highDt','1');
    location.href='./Game/game-high.html';
}