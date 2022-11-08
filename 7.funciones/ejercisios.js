function saludo(nombre,apellido){
    let saludo='hola como estas '+nombre+' '+apellido
    return saludo
}
//para usar una funcion debo llamar a la funcion 
console.log(saludo('Luis','Rivera'))

//function contarVocales(texto)
const contarVocales = palabra => {
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales
}

const cadena = 'CHINO ES GUAPO'
const vocales = contarVocales(cadena)
console.log(vocales)

//calculadora
function sumar(a,b,operacion){
    
    if(operacion == 'suma'){
        total = a + b;
    }else if( operacion == 'resta'){
    total = a - b;
    }else if(operacion == 'multiplicacion'){
        total = a * b;
    }else if(operacion == 'divicion'){
        total = a /b ;
        
    }  
    return total
    
}
console.log(sumar(6,2,"resta"))