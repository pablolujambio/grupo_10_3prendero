import React, { useEffect, useState } from 'react';
import Resourses from '../../../requests/Resourses';


function   Lastproduct (imagen){
    
    const [data, setData] = useState({
        imagen: "",
        nombre: "",
        precio: "",
        descripcion: ""
    });

    useEffect( () => {
          
            Resourses.productsdetail().then(function(Productos){
             
                setData({imagen : Productos.data.url,
                         nombre : Productos.data.productos.nombreProducto,
                         precio : Productos.data.productos.precio,
                         descripcion : Productos.data.productos.descripcion
                 } ) 

               

            }) 
            
       
            
       
    }, []
    )
    
    let product = [{  
       
        imagen: data.imagen,
        nombre: data.nombre,
        precio: data.precio,
        descripcion: data.descripcion
       
        }]
 
    return  ( 
        product.map((item,n)=>
        <div class="abajo">
        <div class="imagen">
										<img src={item.imagen} alt="image" />
									</div>
									<div class= "nombre">
                                        <p>{item.nombre}</p>
                                    </div>
                                    <div class= "precio">
                                     <p>${item.precio}</p>
                                     </div>
                                     <div class= "descripcion">
                                     <p>{item.descripcion}</p>
                                     </div>
                                     </div>
     )

    )
    }

    export default Lastproduct;