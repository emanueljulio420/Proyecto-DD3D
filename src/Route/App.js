import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Ceo  from '../Pages/ceo';
import cotizador from '../Pages/cotizador';
import pedido from '../Pages/DetalleDelPedido';
import nuestraempresa from '../Pages/NuestraEmpresa';

const App = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Ceo} />
                <Route exact path="/nuestra" component={nuestraempresa} />
                <Route exact path="/detalle" component={ pedido} />
                <Route exact path="/cotiza" component={ cotizador} />

                </Switch>
        </BrowserRouter>

)};

export default App;