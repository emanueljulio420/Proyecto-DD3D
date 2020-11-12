import React from 'react';
import '../css/style.css'

class Cartas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const { datos } = this.props;

        return (
            <div className="container">
                <br /><br />
                <h2 className="text-center">¿Cómo puedo ayudarte?</h2>
                <br /><br />
                <div className="card-deck mb-3 text-center">
                    {datos.map((pricing, index) => {
                        return (
                            <div className="card mb-4 shadow-sm bg-warning">
                                <br />
                                <h4 id="texto" className="my-0 font-weight-normal"><font style={{ marginRight: "vertical-align: inherit;" }}><font style={{ marginRight: "vertical-align: inherit;" }}>{pricing.nombre}</font></font></h4>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li id="texto"><font style={{ marginRight: "vertical-align: inherit;" }}><font style={{ marginRight: "vertical-align: inherit;" }}>{pricing.contenido}</font></font></li>
                                    </ul>
                                    <button id="botoncito" type="button" className="btn btn-lg btn-block"><font style={{ marginRight: "vertical-align: inherit;" }}><font style={{ marginRight: "vertical-align: inherit;" }}>VER SERVICIO</font></font></button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        );
    }
}

export default Cartas;