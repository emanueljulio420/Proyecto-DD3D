import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'

function Cantidad() {
    return (


        <div className="text-center">

            <p className="text-center">
                Realice una cotización de un pedido, con el valor unitario que usted considere conveniente
            </p>

            <form>
               
            <div className="form-group">
            <label for="">  Cantidad
    
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
            </label>
         </div>
               
                 <div className="form-group">
                        <label for="">Valor unitario
                        <input className="form-control" id="exampleFormControlSelect1">
                        
                        </input>
                        </label>
                </div>

                    <p className="letra">Valor total</p>
                
                    <div className="form-group">
                        <label for="">descripción del pedido
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows=""></textarea>
                        </label>
                    </div>
                    </form>
                    <Link to="/detalle">
                    <button id="Y"> Enviar </button>   
                    </Link>

</div>


  

        

    );
    
}

export default Cantidad;