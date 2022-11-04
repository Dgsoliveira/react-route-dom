import React from 'react';
import { Link } from 'react-router-dom';
 
function Home(){
    return (
        <div>
            <h1>Home</h1>  
            <Link to={'/contato'}>Contato</Link>
            <Link to={'/empresa'}>Empresa</Link>       
        </div>
    )   
}

export default Home;