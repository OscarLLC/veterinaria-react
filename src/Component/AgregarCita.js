import React, {Component } from 'react';
import PropTypes from 'prop-types'

class AgregarCita extends Component{
    nombreMascota = React.createRef();
    nombrePropietario = React.createRef();
    nombreFecha = React.createRef();
    nombreHora = React.createRef();
    nombreSintomas = React.createRef()

    crearNuevaCita = (e) =>{
        //prevenir el default
        e.preventDefault()

        //crear el objeto
        const nuevaCita = {
            mascota: this.nombreMascota.current.value,
            propietario: this.nombrePropietario.current.value,
            fecha:  this.nombreFecha.current.value,
            hora:  this.nombreHora.current.value,
            sintomas: this.nombreSintomas.current.value
        }

        //pasar por props 
        this.props.crearCita(nuevaCita);

        //reset form
        e.currentTarget.reset();
    
    }
    render(){
        return(
            <div className="content_form">
                <form onSubmit={this.crearNuevaCita} className="form">
                    <div className="content_campos">
                        <label className="label_form">Nombre Mascota</label>
                        <input required ref={this.nombreMascota} className="input" type="text"placeholder="Nombre Mascota" />
                    </div>
                    <div className="content_campos">
                        <label className="label_form">Nombre Dueño</label>
                        <input required ref={this.nombrePropietario} className="input" type="text" placeholder="Nombre Dueño" />
                    </div>
                    <div className="content_campos_dates">
                        <div className="dates_date">
                            <label className="label_dates">Fecha</label>
                            <input required ref={this.nombreFecha} className="input_dates" type="date" />
                        </div>
                        <div className="dates_time">
                            <label className="label_dates">Hora</label>
                            <input required ref={this.nombreHora} className="input_dates"  type="time" />
                        </div>
                    </div>
                    <div className="content_description">
                        <label className="label_textarea">Sintomas</label>
                        <textarea required ref={this.nombreSintomas} className="description"></textarea>
                    </div>
                    <div className="content_agregar">
                        <input className="agregar" type="submit" value="Agregar" />
                    </div>
                </form>
            </div>
        )
    }
}

AgregarCita.propTypes = {
    crearCita : PropTypes.func.isRequired
}

export default AgregarCita;