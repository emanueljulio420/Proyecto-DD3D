import React from 'react';
import uno from '../img/1.png';
import dos from '../img/2.png';
import tres from '../img/3.png';
import '../css/style.css';

function Herramientas() {
    return (

        <div className="monda">
            <br/><br/>
            <h1 id="texto">Herramientas de mi dominio</h1>
            <br/><br/>
            <table id="herra">
                <tr>
                    <td>Photoshop<img className="imagensita" src={uno} width="80"></img></td>
                    <td>Ilustrador<img className="imagensita" src={dos} width="80"></img></td>
                    <td>CorelDRAW<img className="imagensita" src={tres} width="80"></img></td>
                </tr>
            </table>
            <br/><br/>
        </div>

    );
}

export default Herramientas;