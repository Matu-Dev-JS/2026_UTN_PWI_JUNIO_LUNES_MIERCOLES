import { useState } from "react";
const Counter = () => {

    //El estado es cuanto va a valer el contador en la app
    //Si este contador cambia de valor la app debe re-renderizar
    const [count, setCount] = useState(0)
    function handleIncrement() {
        //Mi estado contador ahora vale lo que valia antes mas 1
        setCount(count + 1)
    }
    const handleDecrement = () => { 
        //Mi estado contador ahora vale lo que valia antes menos 1
        setCount(count - 1)
    }

    console.log('[Counter.jsx] Me renderize')
    return (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={handleDecrement}>-</button>
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