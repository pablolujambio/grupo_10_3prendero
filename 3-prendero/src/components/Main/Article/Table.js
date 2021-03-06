import React from 'react';

const   Table = ({Nombre, Descripcion, Precio, Categoria, Talle, Sexo}) => {
    return ( 
         
        <tbody>
        <tr>
            <th>{Nombre}</th>
            <th>{Descripcion}</th>
            <th>{Precio}</th>
            <th>{Categoria}</th>
            <th>{Talle}</th>
            <th>{Sexo}</th>
        </tr>
    </tbody>
    
        
    ) }

    export default Table;