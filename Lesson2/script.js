const Username= document.getElementById('username');
const Password=document.getElementById('password');
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click",(e)=>{
    e.preventDefault();
    if(Username.value=="123" && Password.value=="123"){
        window.location="/mainpage/index.html";
        alert("Login Success!!!!");
    }else{

        
        alert("Failed to Login!");
    }
});
