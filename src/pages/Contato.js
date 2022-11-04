import React from 'react';
import { Link } from 'react-router-dom';
 
function Contato(){
    return (
        <div>
            <h1>Contato</h1>  
            <Link to={'/'}>Home</Link>
            <Link to={'/empresa'}>Empresa</Link>         
        </div>
    )   
}

export default Contato;