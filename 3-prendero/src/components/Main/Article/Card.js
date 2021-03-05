import React from 'react';

const   Card = ({titulo, cantidad, icono}) => {
    return ( 
     
        <div className="caja">
        <div className="contiene">
                <div className="body">
                    
                        <div className="izq">
                            <div className="uno">
                            <p> {titulo}</p>
                            </div>
                            <div className="dos">
                            <p>{cantidad}</p>
                            </div>
                        </div>
                        <div className="der">
                            <i className={icono}></i>
                        </div>
                    </div>
                </div>
         </div>

    ) }

    export default Card;