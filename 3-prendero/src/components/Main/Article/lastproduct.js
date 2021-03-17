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
          let  ultimoProducto
            Resourses.products().then(function(Productos){
                ultimoProducto = Productos.data.productos.length -1
                setData({imagen : `http://localhost:3001/uploads/products/` + Productos.data.productos[ultimoProducto].image,
                         nombre : Productos.data.productos[ultimoProducto].nombreProducto,
                         precio : Productos.data.productos[ultimoProducto].precio,
                         descripcion : Productos.data.productos[ultimoProducto].descripcion
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