const button = document.getElementById("button");
let userDt=window.localStorage.getItem('userDt');
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