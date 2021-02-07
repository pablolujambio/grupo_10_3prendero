let nombre= document.getElementById('nombrep');
let descripcion=document.getElementById('descripcion');
let imagen = document.getElementById('image');
let precio = document.getElementById('precio');

let form = document.querySelector('#form');

let errornombre= document.querySelector('#errornombre');
let errordescripcion= document.querySelector('#errordescripcion');
let errorimagen = document.querySelector('#errorimagen');
let errorprecio = document.querySelector('#errorprecio');

form.addEventListener('submit',function(evento){
    let extensiones = new RegExp(/.jpg|.jpeg|.png/i);


    evento.preventDefault();
    errornombre.innerText = "";
    errordescripcion.innerText = "";
    

    if (nombre.value.length == 0)  {
        errornombre.innerText = "Este campo esta vacio";
    
    }
    else if (nombre.value.length < 5){
        errornombre.innerText = "Debe tener minimo 5 caracteres"
        
    }
    else if (descripcion.value.length == 0){
        erroradescripcion.innerText = "Este campo esta vacio";
    
        
    }
    else if (descripcion.value.length < 20){
        errordescripcion.innerText = "Debe tener minimo 20 caracteres"
        
    }
    else if (precio.value.length == 0){
        errorprecio.innerText = "Este campo esta vacio"
    }
    
    else if (!extensiones.test(imagen.value)){
        errorimagen.innerText = "Debe ser una imagen valida";}
    else{
        form.submit()
    }
    
   
})
        
    
    


