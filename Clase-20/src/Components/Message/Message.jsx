function Message (propiedades){
    return (
        <div>
            <h2>{propiedades.autor}</h2>
            <p>{propiedades.contenido}</p>
            <div>{propiedades.fecha}</div>
            <div>{propiedades.estatus_envio}</div>
            <hr />
        </div>
    )
}
export default Message