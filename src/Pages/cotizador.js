import React from 'react';
import Copyright from '../Components/Copyright';
import Header from '../Components/Header'
import Cantidad from '../Components/Cantidad'

function cotizador() {

    return (
        <div className="cotizador">
            <Header />
            <Cantidad />
            <Copyright />
        </div>

    )
}

export default cotizador;