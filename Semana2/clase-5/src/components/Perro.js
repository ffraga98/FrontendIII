import React from "react"

class Perro extends React.Component{
    render(){
      return (
        <React.Fragment>
          <h2>Nombre: {this.props.nombre}</h2>
          <ul>
            <li>Edad:  {this.props.edad}</li>
            <li>Sexo:  {this.props.sexo}</li>
            <li>Raza:  {this.props.raza}</li>
            <li>Tamanio:  {this.props.tamanio}</li>
          </ul>

        </React.Fragment>
      )
    }


}

export default Perro;
