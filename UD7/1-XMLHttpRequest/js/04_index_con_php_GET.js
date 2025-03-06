document.addEventListener("DOMContentLoaded",()=>{
    //Agregar un event listener al campo nombre
    document.getElementById("nombre").addEventListener("keyup",mostrarNombres);

});

function mostrarNombres(e){
    //Obtengo el valor actual del campo
    var cadena = e.target.value;

    //Si la cadena está vacía, limpio la sugerencia que ya tenía
    if (cadena.length == 0){
        document.getElementById("sugerencia").innerHTML = "";
        return;//Salgo de la función
    }else{
        //Crear objeto
        var xhr = new XMLHttpRequest();

         /**Configuramos la solicitud al servidor
         * - "GET": Tipo de solicitud
         * - "archivo.php?nombre=" + cadena
         * - true o false
         */
        //Las solicitud de tipo GET suelen incorporar los parámetros en la propia URL en el formato:
        //url?parametro=valor
         xhr.open("GET","Data/arraynombres.php?nombre=" + cadena,true);
         //Preparación de la respuesta
        xhr.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
                //Inserte la respuesta del servidor en Sugerencia
                document.getElementById("sugerencia").innerHTML = this.responseText;
            }
        };
       //Envío de la solicitud
        xhr.send();
    }
}