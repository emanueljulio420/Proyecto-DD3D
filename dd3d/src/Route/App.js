import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import ceo  from '../Pages/Ceo';
import cotizador from '../Pages/cotizador';
import pedido from '../Pages/DetalleDelPedido';
import nuestraempresa from '../Pages/NuestraEmpresa';

const App = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ceo} />
                <Route exact path="/nuestra" component={nuestraempresa} />
                <Route exact path="/detalle" component={pedido} />
                <Route exact path="/cotiza" component={cotizador} />

                </Switch>
        </BrowserRouter>

)};

export default App;