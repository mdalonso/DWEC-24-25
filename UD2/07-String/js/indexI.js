"use strict"; //Obligatorio declarar variables y constantes

//Creación de cadenas:(2 formas)
let txt1=new String("Cadena1");
let txt2="Cadena2";

//txt1 es un objeto String
console.log(txt1);
//txt2 es una cadena primitiva
console.log(txt2);

//Se puede utilizar tanto comillas dobles como simples pero en el caso de querer que estas formen
//parte de la cadena, es necesario utilizar unas para delimitar y las otras dentro de la cadena.
//(si usamos comilla doble para delimitar, dentro de la cadena usaremos simples y viceversa)
//a no ser que los "escapemos"
//PAra mostrar caracteres especiales hay es "Escaparlos" con la barra inclinada \
let txt3='<input type="checkbox",name="coche"\>Audi A6';//Si no escapamos en caracter>, no funcionará.
let txt4="<input type='checkbox',name='coche'\>Audi A6";
let txt5="<input type=\"checkbox\",name=\"coche\"\>Audi A6";

console.log(txt3);
console.log(txt4);
console.log(txt5);


//Ejemplos de FROMCHARCODE

//mostrar abecedario
for (let index =65; index <= 90; index++) {//65=A-90=Z (mayúsculas)
  document.write(String.fromCharCode(index)); //convertir el valor numérico a caracter 
}

//mostrar 20 letras del alfabeto de forma aleatoria para usar de paso alguna función matemática.
document.write("<br>");//Imprime un retorno de carro (para crear espacio)

for (let index = 0; index <= 20; index++) {
  //generar un número aleatorio entre 65 y 90
  //Math.random crea un número aleatorio entre 0-1
  //ese número se multiplica por el rango total (90-65)
  //Le sumamos 65 para que esté dentro de los valores entre 65 y 90
  //Valor mínimo: 0*25+65=65 --> letra A
  //Valor máximo: 1*25+65=90 --> letra Z
  const numAscc=Math.round(Math.random()*(90-65))+65;
  document.write(String.fromCharCode(numAscc))
}