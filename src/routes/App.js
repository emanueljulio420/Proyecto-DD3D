import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Ceo  from '../Pages/ceo';

const App = () => {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Ceo} />

                </Switch>
        </BrowserRouter>

)};

export default App;