import React from 'react';
import Copyright from '../Components/Copyright';
import Header from '../Components/Header'
import Detalle from '../Components/Detalle'

function pedido() {

    return (
        <div className="pedido">
            <Header />
            <Detalle />
            <Copyright />
        </div>

    )
}

export default pedido;