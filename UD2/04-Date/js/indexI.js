"use strict"; //Obligatorio declarar variables y constantes

//EN ESTE EJEMPLO SE TRABAJA EL USO DE LA CLASE DATE
//====================================================

//Definición de objetos DATE utilizando distintas instancias del constructor.
let fechaHoy=new Date();//fecha actual
let fechaMilis=new Date(454545454);//454545454 milisegundos desde 01/01/1970 (timespan)
let fechaCadena=new Date('01-12-2025');//OJO El formato que interpreta como MM-DD-YYYY (formato de fecha corto)
let diasResta;

//cuando queremos rescatar la fecha en forma de cadena, el formato que obtenemos es Thu Jan 01 1970 00:00:00 GMT+0000
//que es el mismo devuelto por el método toString() aplicado a un objeto Date.
document.write(`La fecha de hoy es ${fechaHoy}`);
document.write(`<br>La fecha parámetros milisegundos ${fechaMilis}`);
document.write(`<br>La fecha parámetros cadena ${fechaCadena}`);

//Uso de métodos getMonth, getDate y getFullYear
document.write(`<br>El mes ${fechaHoy.getMonth()+1} el día ${fechaHoy.getDate()} del año ${fechaHoy.getFullYear()}`);

//MOSTRAR LA FECHA EN DIFERENTES FORMATOS*******************************************************
//toLocaleDateString devuelve la feha (sólo la fecha) en formato local. En españa devuelve
//una cadena con formato DD/MM/YYY
document.write(`<br>La fecha de hoy con formato local ${fechaHoy.toLocaleDateString()}`);

//toLocaleString devuelve la fecha y la hora en formato local. En España será en formato DD/MM/YYY HH:mm:ss
document.write(`<br>La fecha de hoy con formato  ${fechaHoy.toLocaleString()}`);

//toDateString devuelve la fecha, como localeDateString pero sin darle formato local
document.write(`<br>La fecha de hoy con formato II ${fechaHoy.toDateString()}`);//formato universal

//toLocaleTimeString devuelve la hora (sólo la hora) en formato local. En españa devuelve
//una cadena con formato HH:mm:ss
document.write(`<br>La hora con formato local ${fechaHoy.toLocaleTimeString()}`);

//OPERACIONES CON FECHAS*************************************************************************

//Sumar 20 días a la fecha actual
//setDate establece el valor del objeto Date
fechaHoy.setDate(fechaHoy.getDate()+20);
document.write(`<br>La fecha futura es: ${fechaHoy.toLocaleDateString()}`)

//restar dos fechas. Se pueden restar o sumar dos objetos Date directamente pero obtenemos e resultado en milisegundos
diasResta=fechaHoy-new Date();
//Al hacer la operación resta podemos comprobar que obtenemos el resultado en milisegundos.
document.write(`<br>La fecha restada es: ${Math.round(diasResta)} milisegundos`);
//Para expresarlo en días, es necesario hacer manualmente la conversión.
document.write(`<br>La fecha restada es: ${Math.round(diasResta/1000/60/60/24)} días`);

