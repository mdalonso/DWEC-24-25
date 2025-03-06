document.addEventListener("DOMContentLoaded",() =>{
    //Asignación de eventos
    document.getElementById("cargaCatalogo").addEventListener("click",cargaCatalogo);
});

//Función para la solicitud AJAX para obtener el XML
function cargaCatalogo() {  
    //Creamos el objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    //Preparamos la solicitud
    xhr.open("GET","Data/cd_catalog.xml",true);
    //Preparamos la respuesta.
    //En la consola podremos comprobar que durante el proceso, el estado de la solicitud
    //va cambiando ya que con cada cambio se volverá a disparar el evento readyStateChange
    xhr.onreadystatechange = function (){
        console.log("Estado cambiado (Estado): ", xhr.readyState);
        console.log("Status: ", xhr.status);
        //Si la solicitud se resuelve (readyState=4) y es con éxito (status=200)
        if(this.readyState == 4 && this.status == 200){
            cargarXML(this);
        }
    };
    //Enviamos la solicitud
    xhr.send();
}

  //Función que procesa el XML recibido y lo muestra por pantalla
function cargarXML(xml){
    var docXML = xml.responseXML;
    //Definimos la estructura de la tabla
    var tabla = "<tr><th>Artista</th><th>Título</th></tr>";

    //Obtenemos todos los elementos <CD> dentro del XML en un array
    //Los métodos de localización también se pueden utilizar para navegar
    //elementos de un documento XML (además de HTML como venías haciendo)
    var discos = docXML.getElementsByTagName("CD");

    //Recorremos todos los CDs y extraemos artista y título
    for(var i=0 ; i < discos.length ; i++){
        //Creo una fila nueva
        tabla += "<tr><td>";
        tabla += discos[i].getElementsByTagName("ARTIST")[0].textContent;//es el 0 pq se que solo hay un elemento ARTIST
        tabla += "</td><td>";
        tabla += discos[i].getElementsByTagName("TITLE")[0].textContent;
        tabla += "</td></tr>";
    }
    //Inserto la tabla dentro del mi HTML
    document.getElementById("demo").innerHTML = tabla;
}