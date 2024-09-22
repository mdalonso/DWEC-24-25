"use strict"; //Obligatorio declarar variables y constantes
"use strict";
/*EJEMPLO DE CLASE
- Crear una variable booleana con el constructor por defecto (sin parámetros)
- Probamos a crear variables booleanas pasándoles como parámetro un valor numérico
- Probamos a crear variables booleanas pasándoles como parámetro un valor de cadena
- Uso del valor contenido en un objeto de tipo BOOLEAN
*/


let vf=new Boolean();//crear la variable como un objeto Boolean sin darle un parámetro le asigna un valor de FALSE
console.log(vf);//el valor que contiene es false pero al imprimirlo lo que obtendremos es un objeto

//Convierte una expresión en un valor booleano primitivo
console.log("Convertir una expresión en un valor primitivo booleano:")
console.log(Boolean(5+63));

//Crear variables de tipo BOOLEAN pasándole diferentes valores numéricos
console.log("Crear objeto Boolean a partir de valores numéricos:")
let vfNum1=new Boolean(44);//true
let vfNum2=new Boolean(-585);//true
let vfNum3=new Boolean(0);//El valor 0 se convierte a false.

//sólo el valor 0 se considera FALSE
console.log(vfNum1);//true
console.log(vfNum2);//true
console.log(vfNum3);//false

//Crear variables de tipo BOOLEAN pasándole diferentes cadenas
console.log("Crear objeto Boolean a partir de cadenas:")
let vfCad1=new Boolean("");
let vfCad2=new Boolean("hola");
//La cadena vacía se considera un valor FALSE
console.log(vfCad1);//false
console.log(vfCad2);//true

//Para poder hacer uso del valor contenido en un objeto BOOLEAN hay que usar VALUEOF
//Si no se usa VALUEOF, podemos tener resultados inesperados.
if (vfNum3){
//Se muetra el mensaje aunque vfNum3 contiene el valor falso porque al contener algún elemento (no está vacío)
//el objeto es TRUE, aunque el valor que contiene sea false

    console.log("Se supone que el valor es verdadero pero no es cierto porque el objeto contiene un valor false"); 
}
if (!vfNum3.valueOf())
    console.log("Este mensaje se imprime porque se accede correctamente el valor de la variable")    





