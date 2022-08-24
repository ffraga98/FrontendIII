function FormularioTurnos(props) {
    return (
        <form onSubmit={props.onRegistrar}>
            <p>Nombre: <input type="text" name="valorNombre" /></p>
            <p>Apellido: <input type="text" name="valorApellido" /></p>
            <input type="submit" value="Registrar" />
        </form>
    );
}

export default FormularioTurnos;