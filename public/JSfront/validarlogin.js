
let nomusuario =document.getElementById('username');

let contraseña=document.getElementById('password');

let form = document.querySelector('#form');


let erroruser= document.querySelector('#erroruser');

let errorpassword= document.querySelector('#errorpass');

form.addEventListener('submit',function(evento){


    evento.preventDefault();
   
    erroruser.innerText = "";
 
    errorpassword.innerText = "";
    

    
    if (nomusuario.value.length == 0){
        erroruser.innerText = "Este campo esta vacio";
        
    }
    
    
     else if (contraseña.value.length == 0){
        errorpassword.innerText = "Este campo esta vacio";
                
            }

                
     else{
        form.submit()
     }
    
    


})

