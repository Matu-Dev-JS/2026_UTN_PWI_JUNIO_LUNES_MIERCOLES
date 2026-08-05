//Funciones
//Sirven para guardar bloques de codigo parametrizables
//Las funciones pueden retornar un resultado
//Cuando usamos el retorno, la funcion corta su ejecucion


//tipoIva = 'general', 'reducido', 'aumentado'
/* function determinarPorcentajeIva (tipoIva){
    let factor_porcentaje = 0
    if(tipoIva === 'general'){
        factor_porcentaje = 21
    }
    else if(tipoIva === 'reducido'){
        factor_porcentaje = 10.5
    }
    else if(tipoIva === 'aumentado'){
        factor_porcentaje = 27
    }
    return factor_porcentaje
}


function calcularIva (precio, tipoIva){
    let iva = precio * (determinarPorcentajeIva(tipoIva) / 100)
    return iva
}



let iva800 = calcularIva(800, 'reducido')
console.log('El iva de $800 es $' + iva800)

let iva1000 = calcularIva(1000, 'reducido')
console.log('Guadamos en DB') */


/* 
crear la funcion calcular que recibira 3 parametros
    a: es un numero
    b: es un numero
    operacion: es un string que puede ser '+' o '-'
Si la operacion es + debera retornar el resultado de la suma de a + b
Si la operacion es - debera retornar el resultado de la resta de a - b

NO se solicita el uso de PROMPTS
*/