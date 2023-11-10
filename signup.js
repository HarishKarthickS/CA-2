let userDt=window.localStorage.getItem('userDt');
let howToPlay=document.getElementById('button1');
let startGame=document.getElementById('button2');
let signup=document.getElementById('abs');
let playrules=document.getElementById('abs1');
let exit=document.getElementById('exit');
window.localStorage.setItem('userName','');
let userName=window.localStorage.getItem('userName');
window.localStorage.setItem('userDob','');
let userdob=window.localStorage.getItem('userDob');
howToPlay.onclick= () =>{
    signup.style.visibility='hidden';
    playrules.style.visibility='visible';
}
exit.onclick = () =>{
    signup.style.visibility='visible';
    playrules.style.visibility='hidden';
}
startGame.onclick= () =>{
    let name1=document.getElementById("name").value;
    let dob=document.getElementById("dob").value;
    window.localStorage.setItem('userName','1');
    window.localStorage.setItem('userName',name1.toString());
    window.localStorage.setItem('userDob',dob.toString());
}