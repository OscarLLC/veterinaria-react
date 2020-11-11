import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Cita extends Component{
    render(){
        const {propietario, fecha, hora, mascota, sintomas} = this.props.info;
        return(
            <div className="content_cita">
                <p className="text_cita"><strong>Mascota:</strong> {mascota}</p>
                <p className="text_cita"><strong>Dueño:</strong> {propietario}</p>
                <p className="text_cita"><strong>Fecha:</strong> {fecha}</p>
                <p className="text_cita"><strong>Hora:</strong> {hora}</p>
                <p className="text_cita"><strong>Sintomas:</strong> {sintomas}</p>
                <button 
                    onClick = {() => {this.props.borrarCita(this.props.idCita)}}
                    className ="btn_delete">Borrar &times;</button>
            </div>
            // para saber si el state esta vacio podemos hacer esto
            // $r trae todo el objeto
            // $r.state.citas vemmos si el state esta vacio
            // con Object.keys($r.state.citas) nos trae el array
        )
    }
}

Cita.protoTypes = {
    info: PropTypes.shape({
        propietario: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        mascota: PropTypes.string.isRequired,
        sintomas: PropTypes.func.isRequired
    })
}


export default Cita;