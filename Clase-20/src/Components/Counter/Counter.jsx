import { useState } from "react";
const Counter = () => {

    //El estado es cuanto va a valer el contador en la app
    //Si este contador cambia de valor la app debe re-renderizar
    const [count, setCount] = useState(0)
    function handleIncrement() {
        //Mi estado contador ahora vale lo que valia antes mas 1
        setCount(
            (prevCounter) => {
                return prevCounter + 1
            }
        )
    }
    const handleDecrement = () => { 
        //Mi estado contador ahora vale lo que valia antes menos 1
        setCount(count - 1)
    }

    console.log('[Counter.jsx] Me renderize')

    /* 
    Contador parte 2:
    Si el contador vale 10 poner un mensaje en rojo indicando 'Has alcanzado el limite' y deshabilitar el boton de sumar
    Si el contador vale 0: 
        - debe haber un boton de comprar unicamente (este al dar click incrementara el contador)
        - No estaran el boton de +, - o el contador
    
    */
    return (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={handleDecrement} disabled={false}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}
export default Counter

function sumar (a, b){
    return a + b
}

const restar = (a, b) => {
    return a - b
}