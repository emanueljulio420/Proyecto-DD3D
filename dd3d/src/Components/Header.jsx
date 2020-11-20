import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.jpeg';
import '../css/style.css'

function Header() {
    return (

    <div>
        <div className="logo ">
        <br/><br/>
        <img className="" src={Logo} width="400" ></img>
        </div>
        <div className="hola">
           <Link to="/">
           <button id="f"> CEO </button>
           </Link >
           <Link to="/nuestra">
           <button id="f"> NUESTRA EMPRESA </button>
           </Link>
           <Link to="/cotiza">
           <button id="f"> COTIZADOR </button>
           </Link>
           
        
         </div>
         
    </div>
    );
}

export default Header;