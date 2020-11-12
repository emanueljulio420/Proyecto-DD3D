import React from 'react';
import Logo from '../img/Logo.jpeg';
import '../css/style.css'

function Header() {
    return (

    <div>
        <div className="logo">
        <br/><br/>
        <img className="" src={Logo} width="400" ></img>
        </div>
        <div className="hola">
           <button id="f"> CEO </button>
           <button id="f"> NUESTRA EMPRESA </button>
           <button id="f"> COTIZADOR </button>
        
         </div>
         
    </div>
    );
}

export default Header;