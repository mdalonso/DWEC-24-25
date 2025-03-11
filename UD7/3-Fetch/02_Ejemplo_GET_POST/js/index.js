document.addEventListener("DOMContentLoaded",() =>{
    document.querySelector("#GET").addEventListener("click",mostrarMensajeGET);
    document.querySelector("#POST").addEventListener("click",mostrarMensajePOST);

});

function mostrarMensajeGET(){
    //Se realiza la solicitud GET (por defecto) con fetch.
    //El script ejemplo.php requiere dos parámetros: valor con el método utilizado (GET/POST) y
    //nombre con una cadena
    //Al ser una solicitud GET los parámetros se pasan en la URL
    fetch("ejemplo.php?valor=GET&nombre=María")
    //El primer .then gestiona el objeto RESPONSE
    .then( response=>{
        if(!response.ok){
            throw ("Error de comunicación");
        }
        //Como sabemos que la información que devuelve el servidor es en formato texto
        //la extraemos del objeto response con .text()
        return response.text();
    })
    //El segundo .then gestiona los datos extraídos del objeto response
    .then(data => {
        document.querySelector("#mensaje").textContent = data;
    })
    //Gestión del rechazo de la promesa de fetch
    .catch(error => {
        console.error(error);
    });
}
function mostrarMensajePOST(){
    fetch("ejemplo.php",{method:'POST', headers:{'Content-Type': 'application/x-www-form-urlencoded'} ,body:`valor=POST&&nombre=Antonio`})
    .then( response=>{
        if(!response.ok){
            throw ("Error de comunicación");
        }
        return response.text();
    })
    .then(data => {
        document.querySelector("#mensaje").textContent = data;
    })
    .catch(error => {
        console.error(error);
    });
}
