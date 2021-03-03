import React from 'react';
import logo from './images/logo.jpg';


const Footer = () => {
    return (
        <footer>
    <div class= "contenedorfooter">
        <div class="izq">
            <div class= "arriba">
                <ul>
                    <li><a href="">Trabajá con nosotros</a></li>
                    <li><a href="">Términos y condiciones</a></li>
                    <li><a href="">Privacidad</a></li>
                    <li><a href="">Ayuda</a></li>
                </ul>
            </div>
            
            <div class= "medio">
                <small>Copyright © 2015-2020 3Prendero</small>
            </div>
           
            <div class= "abajo">
                <small>Av. Rivadavia 1015, Piso 3, CP 1500, Caballito, CABA</small>
            </div>
        </div>

        <div class="der">
            <div class="iz">
                <p>SEGUINOS EN NUESTRAS REDES</p>
            </div>

            <div class="de">
                <button type="submit"><i class="fab fa-facebook"></i></button>
                <button type="submit"><i class="fab fa-twitter"></i></button>
                <button type="submit"><i class="fab fa-instagram"></i></button>
            </div>
        </div> 
    </div>
    
    <div class= "contenedor2">
        <div class= "izquierda">
            <img class="logo" src={logo} alt="logo" />
            <small>Grupo 10 © 3Prendero</small>
        </div>
    
        <div class="derecha">
            <ul>
                <li><a href="/nosotros">Sobre nosotros</a></li>
                <li><a href="">Preguntas frecuentes</a></li>
                <li><a href="">Contacto</a></li>        
            </ul>
        </div>
    </div>
</footer>
    )
}

export default Footer;
