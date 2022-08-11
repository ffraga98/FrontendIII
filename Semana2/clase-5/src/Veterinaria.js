import React from "react"
import Perro from "./components/Perro.js"

class Veterinaria extends React.Component{
    lista = [
        {
            nombre: "Firulais",
            edad: 11,
            sexo: "Macho",
            raza: "Paston aleman",
            tamanio: "Grande",
        },        {
            nombre: "Maya",
            edad: 13,
            sexo: "Hembra",
            raza: "Pug",
            tamanio: "Chico",
        },
        {
            nombre: "Pipo",
            edad: 5,
            sexo: "Macho",
            raza: "Schauzer",
            tamanio: "Mediano",
        },
        {
            nombre: "Pacha",
            edad: 2,
            sexo: "Hembra",
            raza: "Mestizo",
            tamanio: "Chico",
        },
    ]

    listarPerros( perros ){
        return perros.map( perro =>{
            return (
                <Perro 
                nombre={perro.nombre}
                edad={perro.edad}
                sexo={perro.sexo}
                raza={perro.raza}
                tamanio={perro.tamanio}
                />
            )
        })
    }

    render(){
        return (
            <React.Fragment>
                {this.listarPerros(this.lista)}
            </React.Fragment>
        )
    }
}

export default Veterinaria