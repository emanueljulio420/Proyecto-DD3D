import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Ceo  from '../Pages/ceo';
import nuestraempresa from '../Pages/NuestraEmpresa';

const App = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Ceo} />
                <Route exact path="/nuestra" component={nuestraempresa} />

                </Switch>
        </BrowserRouter>

)};

export default App;