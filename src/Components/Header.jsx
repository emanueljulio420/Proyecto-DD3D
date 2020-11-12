import React from 'react';
import Logo from '../img/Logo.jpeg';
import '../css/style.css'

function Header() {
    return (

    <div>
        <div className="logo">
        <img className="" src={Logo} width="400" ></img>
        </div>

        <div className="hola">
           <a href="#" className="no"> CEO </a>
           <a href="#" className="no"> NUESTRA EMPRESA </a>
           <a href="#" className="no"> COTIZADOR </a>
        
         </div>
         
    </div>
    );
}

export default Header;