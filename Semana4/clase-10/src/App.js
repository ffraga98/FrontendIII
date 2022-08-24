import React, { useState } from "react"
import FormularioTurnos from "./components/FormularioTurnos.js";
import ListaTurnos from "./components/ListaTurnos.js";

function App() {
  const [turnos, setTurnos] = useState([])
  
  function registrarTurno( event ){
      event.preventDefault();
      const nombre = event.target.valorNombre.value;
      const apellido = event.target.valorApellido.value;
      const turno = {
        nombre: nombre,
        apellido: apellido,
      }
      setTurnos([...turnos, turno])
      event.target.valorNombre.value= ""
      event.target.valorApellido.value = ""
      console.log(event)
  }

  return (
    <React.Fragment>
      <FormularioTurnos onRegistrar={registrarTurno}/> 
      <ListaTurnos turnos={turnos}/> 
    </React.Fragment>
  );
}

export default App;
