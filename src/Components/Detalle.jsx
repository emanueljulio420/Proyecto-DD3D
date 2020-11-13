import React from 'react';

import '../css/style.css'

function Detalle() {
    return (
        <div className="text-center">
            <h1>Detalle del pedido</h1>
            <br></br>
            <br></br>

            <p>Cantidad                         5</p>
            <br></br>
            <br></br>

            <p>Valor unitario                     $10.000</p>
            <br></br>
            <br></br>

            <p>Valor total $50.000</p>
            <br></br>
            <br></br>

            <p>Descripción del pedido</p>
            <br></br>
            <br></br>

            <table className="ta">
            <tr>
                <td className="tablita">Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloi.</td>
            </tr>
            </table>

        




        </div>

    )
}

export default Detalle;