import React from 'react';
import asi from '../img/Quienes.jpg';
import '../css/style.css'


function Quines() {
    return (
        
        <div className="melo">
         <img className="pepe" src={asi} width="400"></img>
         <br></br>
         <div className="textopepe">
            
            <h1>Quienes somos</h1>
            <p className="w"> Diseño digital 3D</p>
            <p>
               Somos uno empresa Colombiana de Innovación y Diseño Digital ubicada en Medellín, Antioquía. 
                <br/><br/>
                Con más de 10 años acumulados de experiencia en el desarrollo de diseños digitales y otras
                herramientas de Tecnología, Entornos Web y Desarrollo Móvil.
                <br/><br/>
            </p>
        </div>
    </div>


);
}
    
    export default Quines;