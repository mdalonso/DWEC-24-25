//Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded",() => {

    document.getElementById("cambiaContenido").addEventListener("click",cambiaContenido);
    
    //Función que realiza la solicitud AJAX
    function cambiaContenido() {  
        //Creamos un nuevo objeto XMLHttpRequest
        var xhr = new XMLHttpRequest();
        console.log("1 - Objeto XMLHttpRequest creado.");

         //Configuro la solicitud
         console.log("Configurando la solicitud...");
         /**
          * - GET: tipo de solicitud
          * - "holamundo.txt": archivo del que quiero obtener la información
          * - true: Indica que la sollicitud es asíncrona, false para síncrona
          */
         xhr.open("GET","Data/holamundo.txt",true);
        
        //Definimos la función que se ejecutará de forma asíncrona
        xhr.onreadystatechange =() =>{
            console.log("Estado cambiado: ", xhr.readyState);
    
            //Verificamos si la solicitud se ha completado correctamente
            if(xhr.readyState === 4 && xhr.status === 200){//Me ha contestado a la petición y además es una respuesta OK
                console.log("Respuesta recibida");
                //Inserto la respuesta en el DOM
                document.getElementById("texto").innerHTML = xhr.responseText;
            }
        }

        //Envío la solicitud
        console.log("Enviando solicitud.");
        xhr.send();

    }

});