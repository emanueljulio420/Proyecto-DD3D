import React from 'react';
import '../css/style.css'

function NuestrosEmpleados(){

    return(
        
        <div className="">
        <br/><br/>
        <h1 className="text-center">Nuestros Empleados</h1>
        <br/><br/>
        <table className="ta">
            <tr>
                <td className="tablita">empleado</td>
                <td className="tablita">edad</td>
                <td className="tablita">telefono</td>
                <td className="tablita">correo</td>
            </tr>
            <tr>
                <td className="tablita"> carlos david  </td>
                <td className="tablita"> 40 </td>
                <td className="tablita"> 3424324 </td>
                <td className="tablita"> carlosdavid@kmsoft.com </td>
            </tr>
            <tr>
                <td className="tablita"> andre tobon </td>
                <td className="tablita"> 18</td>
                <td className="tablita"> 99999999</td>
                <td className="tablita"> o.tobon@kmsoft.com </td>
            </tr>
            <tr>
                <td className="tablita"> julian giraldo </td>
                <td className="tablita"> 28</td>
                <td className="tablita"> 3455</td>
                <td className="tablita"> g.giraldo@kmsoft.com</td>
            </tr>
            <tr>
                <td className="tablita"> juliano ortiz </td>
                <td className="tablita"> 35 </td>
                <td className="tablita"> 5656 </td>
                <td className="tablita"> juli_ortiz@kmsoft.com </td>
            </tr>
        
        
        </table>
        <br/><br/>
    </div>
    )

};

export default NuestrosEmpleados;