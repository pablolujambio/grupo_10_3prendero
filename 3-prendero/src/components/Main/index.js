import React, {Component} from 'react'
import Remera from './images/Remera.jpg';

const  Main = () =>  {
    return ( 
        <main>
       <div className="lineaarriba">
     
						<div className="caja">
                        <div className="contiene">
								<div className="body">
									
										<div className="izq">
                                            <div className="uno">
											<p> Productos en base de datos</p>
                                            </div>
                                            <div className="dos">
											<p> 135</p>
                                            </div>
										</div>
										<div className="der">
											<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
                         </div>

                         <div className="caja">
                        <div className="contiene">
								<div className="body">
									
										<div className="izq">
                                            <div className="uno">
											<p> Categorias en base de datos</p>
                                            </div>
                                            <div className="dos">
											<p> 135</p>
                                            </div>
										</div>
										<div className="der">
											<i className="fas fa-bars fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
                         </div>
                          

                         <div className="caja">
                        <div className="contiene">
								<div className="body">
									
										<div className="izq">
                                            <div className="uno">
											<p> Usuarios en base de datos</p>
                                            </div>
                                            <div className="dos">
											<p> 135</p>
                                            </div>
										</div>
										<div className="der">
											<i className="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
                         </div>
                          
                          
							
						</div>

                        <div class="centro">
					
						<div class="caja">
							
								<div class="arriba">
                                    <div class= "titulo">
									<h6>Ultimo producto en la base de datos</h6>
                                    </div>
								</div>
								<div class="abajo">
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

								</div>
							
						</div>

                        <div class="caja">
							
								<div class="arriba">
                                    <div class= "titulo2">
									<h6>Categorias en base de datos</h6>
                                    </div>
								</div>
								<div class="abajo">
                               
                                <div class="cajas">
										
												<div class="caja">
                                                <div class="categoria">
                                                <p>Category 01</p>
                                                </div>
												</div>
											
										
										
										
												<div class="caja">
                                                <div class="categoria">
                                                <p>Category 02</p>
                                                </div>
												</div>
											
										
										
										
												<div class="caja">
                                                <div class="categoria">
                                                <p>Category 03</p>
                                                </div>
												</div>
										
									
									
										
												<div class="caja">
                                                <div class="categoria">
                                                <p>Category 04</p>
                                                </div>
												</div>
										
									
										
										
												<div class="caja">
                                                    <div class="categoria">
                                                <p>Category 05</p>
                                                </div>
												</div>
											
										
										
										
												<div class="caja">
                                                <div class="categoria">
                                                <p>Category 06</p>
                                                </div>
												</div>
										
										
							

								</div>
                                </div>
						</div>
                        </div>
       
        </main>
 )
}
    
export default Main;