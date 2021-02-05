let nombre= document.getElementById('nombre');
let apellido=document.getElementById('apellido');
let nomusuario =document.getElementById('username');
let email =document.getElementById('email');
let contraseña=document.getElementById('password');
let recontraseña =document.getElementById('repassword');

let form = document.querySelector('#form');

let errornombre= document.querySelector('#errornombre');
let errorapellido= document.querySelector('#errorapellido');
let erroruser= document.querySelector('#erroruser');
let erroremail= document.querySelector('#errormail');
let errorpassword= document.querySelector('#errorpass');
let errorrepassword= document.querySelector('#errorrepass');



form.addEventListener('submit',function(evento){

    let emailvalido  = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

    evento.preventDefault();
    errornombre.innerText = "";
    errorapellido.innerText = "";
    erroruser.innerText = "";
    erroremail.innerText = "";
    errorpassword.innerText = "";
    errorrepassword.innerText = "";

    if (nombre.value.length == 0)  {
        errornombre.innerText = "Este campo esta vacio";
    
    }
    else if (nombre.value.length < 2){
        errornombre.innerText = "Debe tener minimo 2 caracteres"
        
    }
    else if (apellido.value.length == 0){
        errorapellido.innerText = "Este campo esta vacio";
    
        
    }
    else if (apellido.value.length < 2){
        errorapellido.innerText = "Debe tener minimo 2 caracteres"
        
    }
    else if (nomusuario.value.length == 0){
        erroruser.innerText = "Este campo esta vacio";
        
    }
    else if (nomusuario.value.length < 2){
        erroruser.innerText = "Debe tener minimo 2 caracteres"
        
    }
    else if (email.value.length == 0){
        erroremail.innerText = "Este campo esta vacio";}
    else if (!emailvalido.test(email.value)){
            erroremail.innerText = "Debe ser valido";}
     else if (contraseña.value.length == 0){
        errorpassword.innerText = "Este campo esta vacio";
                
            }
     else if (contraseña.value.length < 8){
        errorpassword.innerText = "Debe tener minimo 8 caracteres"
                
            }
    else if (recontraseña.value.length != contraseña.value.length){
             errorrepassword.innerText = "las contraseñas no coinciden"
             }
        
    else{
        form.submit()
    }
    
    


})