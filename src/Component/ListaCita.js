import React, {Component} from 'react'
import Cita from '../Component/Cita'
import PropTypes from 'prop-types'


class ListaCita extends Component{
    render(){
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No Hay Citas' : 'Administra Tus Citas Aqui'
        return(
            <div>
                <h4 className="text_form">{mensaje}</h4>
                {Object.keys(this.props.citas).map(cita =>(
                    <Cita 
                        key = {cita}
                        idCita = {cita}
                        info = {this.props.citas[cita]}
                        borrarCita = {this.props.borrarCita}
                    />
                ))}
            </div>
        )
    }
}

ListaCita.propTypes = {
    citas: PropTypes.object.isRequired
}

export default ListaCita;