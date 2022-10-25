var valor1 = 2;
var valor2 = 2;
var suma = valor1 + valor2;
var producto = valor1 + valor2;
var documento = 'la suma es ' +  suma + ' y el producto es ' + producto;

console.log(suma)
console.log(producto)
console.log(documento)
//pos seguira el orden primero me votara el resultado y luego el documento

var nombre = 'jose';
var nota = 3;

//SIMPLES: con una sola condicion
if(nota >= 5){
    console.log(nombre + ' esta aprobado con '+ nota)
} /COMPUESTO desde aqui va con los dobles/
else{
    console.log(nombre + ' esta desaporbado con '+ nota)
}
//ANIDADAS
var nombre = 'manuel';
var nota = 2;

if(nota>=7){
    console.log(nombre + ' esta aprobado con '+ nota)
}
else{
    if(nota>=5){
        console.log(nombre + ' esta con chance con '+ nota)
    }
    else{
        console.log(nombre + ' ya reprobo con' + nota)
    }
}/A diferencia de una estructura secuencial pos este no sigue el orden, pos se salta si es necesario/