import React from 'react'

export default function LoginForm() {
    function handleSubmit (evento){
        evento.preventDefault() //Evita que se recarge la pagina
        const form = evento.target //target es una referencia del elemento de donde se desencadeno el evento
        const email = form.email_login.value
        const password = form.password.value
        console.log("Datos de inicio de sesion:", email, password)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Iniciar sesion</h1>
            <div>
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='email' name='email_login' id='email'/>
            </div>
            <div>
                <label htmlFor='password'>Contraseña:</label>
                <br/>
                <input type='password' name='password' id='password'/>
            </div>
            <button type='submit'>Iniciar sesion</button>
        </form>
    )
}


/* 
En react existen 2 tipos de formularios
Los normales:
    Capturamos su valor al enviar el formulario.
Controlados:
    Capturamos su valor al cambiar de valor cualquiera de sus campos, basicamente tenemos un estado que en tiempo real captura cada minimo cambio en el formulario
*/