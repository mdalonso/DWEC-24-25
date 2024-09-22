"use strict"; //Obligatorio declarar variables y constantes
/*EJEMPLO: 
- VER LA LONGITUD DE UNA CADENA.
- RECORRER UNA CADENA
*/

let cadena ="Estamos aprendiendo el lenguaje JavaScript";//valor primitivo

//mostrar el nº de caracteres que tiene una cadena
console.log(cadena.length);

//RECORRER UNA CADENA
//La cadena constituye un array de caracteres donde el primer índice es 0.
//Por tanto, el último caracter está en el índice lenght-1
for (let index = 0; index < cadena.length; index++) {
  console.log(cadena[index]);//Se accede a cada caracter por separado con el operador [] como en los arrays
}

for (let index = 0; index < cadena.length; index++) {
  console.log(cadena.charAt(index));//o accedemos a cada caracter con el método charAt.
}

//Pero...no se puede acceder a un caracter para modificarlo como si fuera un array porque se trata de un valor primitivo
//para esto hay que utilizar de forma combinada el resto de métodos.
cadena[0]="H";
