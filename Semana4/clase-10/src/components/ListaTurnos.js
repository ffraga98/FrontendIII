function ListaTurnos(props) {
    return(
        <ul>
            {props.turnos.map((turno,index)=> 
                <li key={index}> 
                    <p>Turno: {index}</p>
                    <p>Paciente: {turno.apellido}, {turno.nombre}</p>
                </li>
            )}
        </ul>
    );

}
export default ListaTurnos