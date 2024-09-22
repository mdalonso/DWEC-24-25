"use strict"; //Obligatorio declarar variables y constantes
//EN ESTE EJEMPLO:
//  - OBJETO SCREEN.
//  - OBJETO NAVIGATOR
//  - OBJETO LOCATION

//OBJETO SCREEN*************************************
//averiguar las dimensiones del objeto screen.
//Podemos acceder al objeto SCREEN a través de la propiedad screen del objeto window.

//Mostramos el ancho y el alto de la pantalla en píxeles
document.write(`<h3>La resolución de la pantalla es ${window.screen.width}x${screen.height} </h3>`);

//OBJETO NAVIGATOR*************************************
//averiguar idioma del navegador
//Consultar la documentación oficial en mdn web docs para aprender cómo se forman las etiquetas de lenguaje.
console.log(navigator.language);
if(navigator.language=="es-ES"){
  alert('El idioma del navegador es español');
}else{
  alert('El idioma del navegador no está en español');
}

//Podemos averiguar si las cookies están habilitadas o no

console.log(navigator.cookieEnabled)
//mostrar SO y motores de HTML
document.write (`<h3>El sistema operativo es ${navigator.userAgent}</h3>`);

//OBJETO LOCATION********************************
//Mostrar el servidor (dominio) y el puerto donde se aloja la dirección que estamos accediendo.
console.log("host:",location.host);

//Mostrar el servidor (dominio)
console.log("hostname:",location.hostname);

//Mostrar la dirección url completa.
console.log("dirección:",location.href);

//Ruta de la carpeta donde se aloja el archivo html dentro del servidor.
console.log("path:",location.pathname);

//Puerto con el que se establece la comunicación con la url.
console.log("puerto:",location.port);

//protocolo utilizado en la conexión
console.log("protocolo:",location.protocol);



