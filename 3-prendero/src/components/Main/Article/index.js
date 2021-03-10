import React, { useEffect, useState } from 'react';
import Resourses from '../../../requests/Resourses';


const Article = ({titulo , children}) => {
    return (
        <div class="caja">
							
        <div class="arriba">
            <div class= "titulo2">
            <h6>{titulo}</h6>
            </div>
        </div>
        
       
       
                
        {children}        
                    
                
                
       
                
    

        
        </div>

    )
}

export default Article;