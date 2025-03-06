document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("cargaCatalogo").addEventListener("click",cargaCatalogo);
    
});

//Función para la solicitud AJAX para obtener el JSON
function cargaCatalogo() { 
    //Crear objeto
    var xhr = new XMLHttpRequest();
    //Preparar solicitud
    xhr.open("GET","Data/cd_catalog.json",true);
    //preparar respuesta
    xhr.onreadystatechange = function (){
        console.log("Estado cambiado: ", xhr.readyState);
        console.log("Status: ", xhr.status);
        if(this.readyState == 4 && this.status == 200){
            cargarJSON(JSON.parse(this.responseText));
        }
    };
    //enviar respuesta
    xhr.send();
}

function cargarJSON(jsonData){
    console.log(jsonData);
    //Definimos la estructura de la tabla
    var tabla = "<tr><th>Artista</th><th>Título</th></tr>";

    //Obtenemos todos los elementos del JSON dentro de "CATALOG"
    var discos = jsonData.CATALOG;//CATALOG es un array de 3 elementos

    for(var i=0 ; i < discos.length ; i++){
        //Creo una fila nueva
        tabla += "<tr><td>";
        tabla += discos[i].ARTIST;
        tabla += "</td><td>";
        tabla += discos[i].TITLE;
        tabla += "</td></tr>";
    }
    //Inserto la tabla dentro del mi HTML
    document.getElementById("demo").innerHTML = tabla;
}