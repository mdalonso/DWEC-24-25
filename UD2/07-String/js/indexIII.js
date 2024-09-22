"use strict"; //Obligatorio declarar variables y constantes
//EJERCICIO DE EJEMPLO:
//Permitir la entrada de un dato que contenga
//nombre y 2 apellidos
//Tenemos que controlar que la entrada contiene 3 palabras
//no es null, ni vacío. Si esto ocurre, mostrar mensaje
//de error y volver a pedir dato.
//Crear un array y en cada posición tendrá nombre, primer
//apellido y segundo apellido.
//mostrar un mensaje indicando el nombre es ...., el primer apellido es ...;
// y el segundo apellido es ...

//Crear un usuario,primer caracter del nombre, 3 primeras letras
//del primer apellido y las 3 últimas letras del segundo apellido

//declaración variables
let aNomApe, usuario;
let cadena=prompt("Introduca nombre y 2 apellidos");
 //Si no se ha introducido nada o bien no se han introducido los tres elementos que se piden (nombre+2 apellidos)
while (cadena==null ||cadena=="" ||cadena.split(" ").length!=3){
  //split utiliza como separador el caracter "espacio"
  //lenght es a longitud del array que almacena las subcadenas.
  //Si todo es correcto, split habrá creado un array de longitud 3 y cada uno de los elementos tendrá
  //el nombre, el primer apellido y el segundo apellido
 
  cadena=prompt("¡¡Error, al introducir datos\nIntroduca nombre y 2 apellidos")
}

//extraer nombre y apellidos mediante el método split en un array
aNomApe=cadena.split(" ");//aNomApe es el array de subcadenas

//mostrar datos por separado
console.log(`El nombre es ${aNomApe[0]} el primer apellido es ${aNomApe[1]} el segundo apellido es ${aNomApe[2]}`);

//crear usuario
//aNomApe[subcadena][caracter_dentro_de_la_subcadena]
//Se puede tratar cada elemento del array como una cadena individual aplicándole los métodos correspondientes.
usuario=`${aNomApe[0][0]}${aNomApe[1].slice(0,3)}${aNomApe[2].slice(-3)}`;

//mostrar usuario todo en minúsculas

console.log(`El usuario es ${usuario.toLowerCase()}`);




