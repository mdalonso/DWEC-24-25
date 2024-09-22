"use strict"; //Obligatorio declarar variables y constantes

/*Ejemplo en el que vamos a ver:
- Diferencias entre una variable numérica y el objeto NUMBER.
- Reconocimiento de valores no numéricos (NaN).
- Pedir un valor al usuario y comprobar que es un valor numérico.*/

/*Definimos dos variables que van a contener valores numéricos. Una contendrá 
un valor numérico primitivo y la otro contendrá un objeto de tipo NUMBER. 
Ambas tendrán el mismo valor y las compararemos.*/

let num1=new Number(23);//objeto Number que contiene el valor 23
let num2 =23;//valor primitivo number
let num3="aa11"//para comprobación de valores no numéricos.


console.log(num1==num2);//Muestra TRUE porque está comparando sólo los valores.
console.log(num1===num2);//no son exactamente iguales porque num1 es una variable que contiene un valor numérico y num2 es una variable de tipo NUMBER

//Si imprimimos los tipos de ambas variables.
console.log(typeof num1);//object
console.log(typeof num2);//number(primitivo)

//isNaN(); no es un número devuelve true y si es un número devuelve false. Aquí se usa la funcion global
console.log(isNaN(num1));//devuelve FALSE porque SÍ contiene un valor numérico
console.log(isNaN(num2));//devuelve FALSE porque SÍ contiene un valor numérico
console.log(isNaN(num3));//devuelve TRUE porque NO contiene un valor numérico.

//isNaN como método estático de Number
console.log(Number.isNaN(num1));//devuelve FALSE porque SÍ contiene un valor numérico
console.log(Number.isNaN(num2));//devuelve FALSE porque SÍ contiene un valor numérico
console.log(Number.isNaN(num3));//devuelve FALSE porque aunque no contiene un valor numérico, ese valor no es NAN, sino una cadena.


//Pedir un valor numérico hasta que el usuario introduzca un valor numérico correcto.

let numero=prompt("Introduzca un número");
//La función global isNaN realiza coerción de tipos pero no es un parseador por lo que aplicada sobre
//cualquier cadena que no contenga estrictamente dígitos, devolverá true.
while (isNaN(numero) || numero==""){
  numero=prompt("Error, no es un número!!\nIntroduzca un número");
}
console.log(numero);

//Para operar con ese valor hay que parsearlo porque se trata de una cadena. Por ejemplo, sumarle 50

console.log(`El resultado de sumar 50 a ${numero} es ${Number.parseInt(numero)+50}`);