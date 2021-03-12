import React from 'react';



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