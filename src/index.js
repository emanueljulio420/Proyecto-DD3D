import React from 'react';
import ReactDOM from 'react-dom';

/*import Ceo from './Pages/Ceo'
import NuestraEmpresa from './Pages/NuestraEmpresa';
import Cotizador from './Pages/cotizador';
import DetalleDelPedido from './Pages/DetalleDelPedido';*/

import App from './Route/App'

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import cotizador from './Pages/cotizador';

ReactDOM.render(
  <>
  <App/>
  </>,
  document.getElementById('root')
);
