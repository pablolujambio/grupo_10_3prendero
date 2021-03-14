import React, {Component} from 'react'
import Remera from './images/Remera.jpg';
import Article from './Article';
import Categories from './Article/Categories';
import Card from './Article/Card';
import Table from './Article/Table';
import Lastproduct from './Article/lastproduct';

const  Main = () =>  {
    return ( 
        <main>
       <div className="lineaarriba">
     
       <Card />  
    
                      
							
						</div>

                        <div class="centro">
					
						
                        <Article 
                        titulo="Ultimo producto en base de datos"
                        >
                          <Lastproduct /> 
                                    
                            </Article>
                        <Article 
                        titulo="Categoriás en base de datos"
                        >
                              <Categories />  
                            
                            
                        </Article>
                       
                        </div>

                        <div class="lineaabajo">

                        <h1 class="h3 mb-2 text-gray-800">Todos los productos en la base de datos</h1>

                        <div class="contenedortabla">
						<div class="body">
							<div class="tabla">
								<table class="table" width="100%"  cellspacing="0">
                                    
									<thead >
										<tr>
											<th>Nombre</th>
											<th>Descripción</th>
											<th>Precio</th>
											<th>Categoría</th>
											<th>Talle</th>
											<th>Sexo</th>
										</tr>
									</thead>
                                  
                                   
                                    <Table /> 

                                 
 
                                   
									
								</table>
							</div>
						</div>
					</div>
				</div>
        <div class="ver">
               
               <button class="llamar"><a href="http://localhost:3001">3PRENDERO</a></button>
          </div>
        </main>
 )
}
    
export default Main;