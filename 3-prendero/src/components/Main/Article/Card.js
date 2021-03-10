import React, { useEffect, useState } from 'react';
import Resourses from '../../../requests/Resourses';


function   Card (titulo, cantidad, icono){
    
    const [data, setData] = useState({
        countUsers: 0,
        countCategoria: 0,
        countProducts: 0
    });

    useEffect( () => {
        Resourses.users().then(function(usuarios){
            Resourses.products().then(function(Productos){
                
                setData({countProducts : Productos.data.cantidad, 
                    countUsers : usuarios.data.cantidad,
                    countCategoria : Productos.data.cantidadtipos} ) 
               

            }) 
            
        })
            
       
    }, []
    )
    
    let cardDetail = [{  
       
        titulo:"Productos en base de datos",
        cantidad:data.countProducts,
        icono:"fas fa-shopping-cart fa-2x text-gray-300"
        },
        {
        titulo:"Categorias en base de datos",
        cantidad:data.countCategoria,
        icono:"fas fa-clipboard-list fa-2x text-gray-300"
        },
        {
        titulo:"Usuarios en base de datos",
        cantidad:data.countUsers,
        icono:"fas fa-user fa-2x text-gray-300"
        }
     ]
 
    return  ( 
        cardDetail.map((item,n)=>
        <div className="caja">
        <div className="contiene">
                <div className="body">
                    
                        <div className="izq">
                            <div className="uno">
                            <p> {item.titulo}</p>
                            </div>
                            <div className="dos">
                            <p>{item.cantidad}</p>
                            </div>
                        </div>
                        <div className="der">
                            <i className={item.icono}></i>
                        </div>
                    </div>
                </div>
         </div>)

    ) }



    export default Card;