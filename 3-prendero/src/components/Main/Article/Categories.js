import React, { useEffect, useState } from 'react';
import Resourses from '../../../requests/Resourses';


function Categories  (titulo) {

    const [data, setData] = useState({
       productosporcategoria : []
      

       
    });

    useEffect( () => {
            
                Resourses.products().then(function(Productos){
                    setData({productosporcategoria: Productos.data.productosporcategoria})
                })
            }, []
        )

    return (
        data.productosporcategoria.map((item) =>
        <div class="abajo">    
       <div class="cajas">
    <div class="caja"> 
       <div class="categoria">
       <div class="uno">
        <p>{item.nombre}</p>
        </div>
        <div class="dos">
         <p>{item.Cantidad}</p>
         </div>
        
       </div>
    
       </div>
       
       </div>
        </div>
        ) )
    }

    export default Categories;