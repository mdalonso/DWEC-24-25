"use strict";

//Este ejemplo realiza una petición a un servidor php que se encarga de hacer
//una consulta a una base de datos.
//La información que requiere el servidor para realizar la consulta
//se envía mediante un objeto JSON.
window.addEventListener("DOMContentLoaded",inicio);

function inicio(){
    document.getElementById("mostrar").addEventListener("click",mostrar);
}

function mostrar(){
    //Quedarnos con el valor que ha pueto el usuario
    let puntos = document.getElementById("puntuacion").value;

    //Crear un objeto JSON con los datos para enviarlos al servidor
    //El servidor requiere la tabla sobre la que hacer la consulta y un valor.
    let objeto = {
        "tabla": "alumnos",
        "valor": parseInt(puntos)
    };

    //Creamos la instancia de XMLHttpRequest...
    let xhr = new XMLHttpRequest();
    let txt = "";

    //Preparar la solicitud...
    //Convertir el objeto JSON a una cadena de texto para enviarlo en la petición AJAX
    //(No se puede enviar el objeto directamente sino que hay que convertirlo en una cadena)
    //JSON.STRINGIFY convierte un objeto en una cadena en formato JSON
    let parametros = JSON.stringify(objeto);
    //GET (se pasan los parámetros en la URL)
    xhr.open("GET","Data/Ajax_JSON_bbdd.php?objeto="+parametros,true);

    //Preparar la respuesta...
    xhr.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            //Los datos se reciben en formato JSON (Ver script del servidor)
            //Por tanto es necesario parsearlos.
            console.log(this.responseText);
            let array = JSON.parse(this.responseText);
            //Recorremos el resultado para mostrarlo
            for(let a in array){
                txt += array[a].alumno + " : " + array[a].puntuacion + "<br/>";
            }

            document.getElementById("texto").innerHTML = txt;
        }
    }
    //Envío de la solicitud...
    xhr.send();
    
}