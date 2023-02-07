'use strict'
const errMsg = document.querySelector('.login--form p')
function checkLogin() {

   
        const formLogin = document.querySelector(".login--form");
        formLogin.addEventListener("submit", function (event) {
        event.preventDefault(); 
      
       
        const logins = {
           
            email: event.target.querySelector("[name=email-login]").value,
            password: event.target.querySelector("[name=password").value,
         };
    
         
        const loginJson = JSON.stringify(logins);
         
       if (logins.email==='' || logins.password==='' ){
        errMsg.innerText='l\'Email et mot de passe sont obligatoires'
       }  else {

           fetch("http://localhost:5678/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json"  },
                body: loginJson
            }).then(res=> res.json())
            .then(function(data) {
                if(data.token){ 
                    window.localStorage.setItem("token", data.token);
                    window.localStorage.setItem("userId", data.userId);
                    window.location.href = 'index.html';
                }else if (data.message){
                     console.log(data.message);
                     errMsg.innerText='Utilisateur non trouvé';
                }else if (data.error){
                    console.log('password error');
                    errMsg.innerText='Mot de passe incorrect'
                }
            });


       }
        });
    
    }




checkLogin();

