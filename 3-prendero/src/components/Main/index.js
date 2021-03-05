import React, {Component} from 'react'
import Remera from './images/Remera.jpg';
import Article from './Article';
import Category from './Article/Category';
import Card from './Article/Card';

const  Main = () =>  {
    return ( 
        <main>
       <div className="lineaarriba">
     
       <Card 
         titulo="Productos en base de datos"
         cantidad="135"
         icono="fas fa-clipboard-list fa-2x text-gray-300"
       />  
        <Card 
         titulo="Categorias en base de datos"
         cantidad="135"
         icono="fas fa-bars fa-2x text-gray-300"
       />  
        <Card 
         titulo="Usuarios en base de datos"
         cantidad="135"
         icono="fas fa-user fa-2x text-gray-300"
       />  
                      
							
						</div>

                        <div class="centro">
					
						
                        <Article 
                        titulo="Ultimo producto en base de datos"
                        >
                                    <div class="imagen">
										<img src={Remera} alt="image" />
									</div>
									<div class= "nombre">
                                        <p>Remera blanca</p>
                                    </div>
                                    <div class= "precio">
                                     <p>$800</p>
                                     </div>
                                     <div class= "descripcion">
                                     <p>Remera blanca lisa para hombre ultima moda</p>
                                     </div>
                            </Article>
                        <Article 
                        titulo="Categorias en base de datos"
                        >
                              <Category />  
                              <Category />  
                              <Category />  
                              <Category />  
                              <Category />  
                            
                        </Article>
                       
                        </div>
       
        </main>
 )
}
    
export default Main;