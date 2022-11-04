import React from 'react';
import { Link } from 'react-router-dom';
 
function Empresa(){
    return (
        <div>
            <h1>Empresa</h1> 
            <Link to={'/contato'}>Contato</Link>
            <Link to={'/'}>Home</Link>          
        </div>
    )   
}

export default Empresa;