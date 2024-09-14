"use strict"; //Obligatorio declarar variables y constantes
//declarar variables y constantes globales

//Las variables definidas con let son visibles dentro del ámbito en el que se declaran.

//nombre es una variable local al bloque
let nombre="María";

//apellidos es una variable global
var apellidos="García";

//edad es una constante
const edad=23;
//Si intentamos asignar un nuevo valor a edad, se producirá un error.
//edad=34;

if (nombre==="María") {
    //Define otra constante edad distinta a la anterior
    const edad=30;
    //nombre es otra variable local diferente a la definida anteriormente
    let nombre="Jaime"

    //La variable apellidos es la misma que se definió fuera del if
    console.log("Se llama "+ nombre + " "+ apellidos  + " y tiene "+ edad + " años.");

    //Utilizando interpolación de variables ${expresión} y template strings
    console.log(`Se llama ${nombre} ${apellidos} y tiene ${edad} años.`);
}

//Muestra la cadena tomando los valores de las variables nombre, apellidos y edad definidas en primer lugar
console.log(`Se llama ${nombre} ${apellidos} y tiene ${edad} años.`);
