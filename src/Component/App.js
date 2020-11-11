import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header'
import AgregarCita from './AgregarCita'
import ListaCita from './ListaCita'

class App extends Component{

//Los metodos nativos de react se escriben al principio y mantienes 
//tu code mas organizado vale.

  //creamos el state
  state = {
    citas:{}
  }

  componentDidMount(){
    //getItem cuando hay que mostrar
    const citasLS = localStorage.getItem('citas')
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }


  componentDidUpdate(){
    ///setItem cuando ahy cambios
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = infoCita => {
    //hacemos una copia del state
    const citas = {...this.state.citas};

    //agregar al state actual
    citas[`citas${Date.now()}`] = infoCita; 

    //set al state
    this.setState({
      citas
    })
  }  

  borrarCita = id => {
    //leer el state
    const citas = {...this.state.citas}
    // console.log(id)
    // console.log(citas)
    //borrarlo del state
    delete citas[id]

    //actualizar el state
    this.setState({
      citas
    })
  }

  render(){
    return (
      <div className="App">
        <Header 
          titulo = "ADMINISTRADOR DE CITAS"
        />
        <div className="content_main">
          <div className="content_form_main">
            <Header
              titulo = "Agrega Las Citas Aqui"
            />
            <AgregarCita
              crearCita = {this.crearCita}
            />
          </div>
          <div className="citas">
              <ListaCita
                citas = {this.state.citas}
                borrarCita = {this.borrarCita}

              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
