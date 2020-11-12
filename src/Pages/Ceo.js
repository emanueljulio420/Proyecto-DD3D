import React from 'react';
import Copyright from '../Components/Copyright';
import Header from '../Components/Header'
import Cartas from '../Components/Cartas'
import Dedico from '../Components/Dedico'
import David from '../Components/David'
import Herramientas from '../Components/Herramientas'

import { data } from '../utils/mocks/data';

function Ceo() {

    return (
        <div className="Ceo">
            <Header />
            <David />
            <Dedico />
            <Cartas datos = { data }/>
            <Herramientas/>
            <Copyright />
        </div>

    )
}

export default Ceo;