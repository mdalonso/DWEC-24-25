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
        //Creamos el objeto
        var xhr = new XMLHttpRequest();
        //Preparamos la solicitud
        xhr.open("POST","Data/arraynombres.php",true);
        //Establecemos la cabecera para enviar datos
        //Cuando enviamos info en el cuerpo de la solicitud es necesario indicar al servidor
        //en qué formato lo estamos haciendo para que pueda comprenderlos
        //En este caso pasamos los datos como formulario HTML tradicional, es decir, clave=valor&clave=valor....
        //Si probamos a quitar la siguiente línea se producirá un error
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //Preparamos la respuesta
        xhr.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
                //Inserte la respuesta del servidor en Sugerencia
                document.getElementById("sugerencia").innerHTML = this.responseText;
            }
        };
    
       
        //enviamos los datos
        xhr.send("nombre=" + cadena);
    }
}
