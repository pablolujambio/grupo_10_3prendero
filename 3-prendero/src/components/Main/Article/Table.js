import React, { useEffect, useState } from 'react';
import Resourses from '../../../requests/Resourses';

function Table (titulo) {

    const [data, setData] = useState({
       productos : []
      

       
    });

    useEffect( () => {
            
                Resourses.products().then(function(Productos){
                    setData({productos: Productos.data.productos})
                })
            }, []
        )



    return ( 
        data.productos.map((item) =>
        
        <tbody>
        <tr>
            <th>{item.nombreProducto}</th>
            <th>{item.descripcion}</th>
            <th>${item.precio}</th>
            <th>{item.tipos.nombre}</th>
            <th>{item.talle.nombre}</th>
            <th>{item.sexo.nombre}</th>
        </tr>
    </tbody>
    )
        
    ) }

    export default Table;