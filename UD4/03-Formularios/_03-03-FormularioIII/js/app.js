"use strict"
/**
 * En este ejemplo se ilustra la validación de un formulario con elementos
 * de diferente tipo.
 * 
 * La validación se puede realizar en diferentes momentos (no excluyentes):
 * - Al introducir información en los elementos del formulario.
 * - En el envío del formulario (submit)
 * 
 * Otro evento de formulario que se utiliza habitualmente es el reset (limpiar el formulario)
 * Objetos de tipo button <button></button>: Este tipo de objetos tiene una propiedad type que
 * puede tomar el valor button, submit (por defecto) y reset.
 * - El valor reset, hace que el botón invoque al evento reset que limpia el formulario.
 * - El valor submit, lanza el evento de envío del formulario.
 * 
 */

window.addEventListener("DOMContentLoaded",()=>{
    const formulario=document.getElementById("frmFirst");
    const edad=document.getElementById("edad");

    //establecer evento al submit del formulario
    //Realizaremos validación al lanzar este evento
    formulario.addEventListener("submit", validar);
    //establecer evento al reset del formulario
    formulario.addEventListener("reset", limpiar);

    //establecer el evento blur para comprobar que edad sea >=18
    //blur=pérdida de foco
    edad.addEventListener("blur", comprobarEdad)
})

//VALIDACIÓN EN EL SUBMIT
const validar=(evento)=>{
   //anular envío ya que da error ya que el formulario no está asociado a ningún servidor
   evento.preventDefault();

   //Validación de objetos de tipo input
   validarInputs();
   //Validación de los radiobuttons
   validarRadio();
}

//Acción asociada al evento reset
const limpiar=()=>{
    alert("limpiar")
}

//Acción de validación cuando la caja de texto de la edad pierde el foco
const comprobarEdad=function(evento){
    //comprobar que sea mayor de edad
    //Se selecciona el span de error para usarlo 
    const error=document.getElementById("erredad");
    //this es el elemento del DOM al que se asocia el evento
    if(this.value<18){
       error.innerText="La edad debe ser mayor o igual a 18 años"
       this.focus(); //establecer el foco
    }else{
        error.innerText="";
    }
}
//Se comprueba que todas las cajas de texto tienen contenido
const validarInputs=function(){
    //seleccionar todos los objetos cuyo atributo name sea texto (NOMBRE, EDAD, FECHA y PROVINCIA)
    //Es la forma en la que se han agrupado todos los elementos de texto que el usuario debe rellenar
    const inputText=document.getElementsByName("texto")
    //Se recorre la colección formada por todos los elementos con nombre "texto" para comprobar si
    //están vacíos.
    for (let elemento of inputText){
        //Se localiza el span de error asociado a cada uno de los elementos de información que deben
        //haber sido rellenados para poder mostrar la información de error si fuera necesario.
        const error=document.getElementById(`err${elemento.id}`)
        if(elemento.value==""){
            //Si la caja de texto está vacía se mostrará el mensaje de error en el span correspondiente.
            error.innerText="El campo es requerido"
        }else{
            error.innerText="";
        }
    }
}
//Se valida la selección de una opción de los radiobutton (por defecto están los dos a false)
const validarRadio=function(){
    //seleccionar todos los objetos cuyo atributo name sea tipo (que son los radiobuttons)
    const radios=document.getElementsByName("tipo")
    //Se selecciona el span de error correspondiente a los radiobutton
    const errorTexto=document.getElementById(`errtipo`);
    //Por defecto, error es true porque ninguno de los dos radiobutton está marcado al cargar el formulario
    let error=true;
    //Se comprueba que se ha marcado alguno recorriendo la colección de radiobuttons con un forEach o de
    //cualquier otra manera
    radios.forEach(elemento=>{
        if(elemento.checked){
            error=false;
        }    
    })
    //Si no se ha seleccionado ninguno (error=true), se muestra el mensaje de error en el span correspondiente
    if (!error){
        errorTexto.innerText=""
    }else  {
        errorTexto.innerText="El campo es requerido"
    }   
}