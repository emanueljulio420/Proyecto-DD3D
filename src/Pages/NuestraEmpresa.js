import React from 'react';
import Copyright from '../Components/Copyright';
import Header from '../Components/Header'
import Quienes from '../Components/Quienes'
import NuestroEquipo from '../Components/NuestroEquipo'
import NuestrosEmpleados from '../Components/NuestrosEmpleados'


function nuestraempresa() {

    return (
        <div className="nuestraempresa">
            <Header />
            <Quienes />
            <NuestroEquipo/>
            <NuestrosEmpleados/>
            <Copyright />

        </div>

    )
}

export default nuestraempresa;