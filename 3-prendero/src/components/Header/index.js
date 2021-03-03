import React from 'react';
import logo from './images/logo.jpg';


const Header = () => {
    return (
        <header>
  
   
   
        <div class="linea">
            <a href="/" >
                <img class="logo" src={logo} alt="logo"/>
            </a>
            <ul>
                <li><a href="#">HOMBRE</a></li>
                <li><a href="#">MUJER</a></li>
                <li><a href="#">KIDS</a></li>
            </ul>
            <form>
                <input type="text" placeholder="Search" id="search" name="search" /><button type="submit"><i class="fas fa-search"></i></button>
             
            </form>
    
           
            
        <div class="icons">
           
        

           
            <button type="submit"><i class="fas fa-user"></i></button>
        
        </div> 
    
        </div>
        
    
      
           
       
       
       
       
       
    </header>
    )
}

export default Header;
