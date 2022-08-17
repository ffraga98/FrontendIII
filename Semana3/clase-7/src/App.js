import  Palabra from "./components/Palabra.js"
import React from "react"

function App() {
    const lista = ["HOLA", "HOLA", "HOLA", "MUNDO"];

    const mapear = (lista) => {
        return lista.map( (palabra, index) => {
            return (
                <React.Fragment> 
                    <Palabra key={index} palabra={palabra}/>
                </React.Fragment>
            )
    })}
    
    
    return mapear(lista)
}

export default App;
