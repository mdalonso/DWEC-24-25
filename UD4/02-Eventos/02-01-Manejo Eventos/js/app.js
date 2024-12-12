"use strict"


/**
 * 
 Existen eventos relacionados directamente con la interacción del usuario y otros que no, 
 por ejemplo, el evento load de una ventana que se lanza automáticamente cuando se carga
 un documento html.

 */

//Declaración de eventos con el MODELO TRADICIONAL (modelo en línea) (Netscape)
//(Para probar esto descomentar primero una función y después descomentar la otra.)
//Se define la función...
//Podemos definirla como expresión de función/función flecha...
const cargar=()=>{
     alert("Página cargada:");
 }

//...o de la forma tradicional

/* function cargar(){
     alert("Página cargada")
} */

//Ejemplo de manejo de eventos usando el modelo "tradicional"
//...Y después asignarla al evento correspondiente al objeto en este caso al evento load 
//del objeto windows.

window.onload=cargar;

//A TENER EN CUENTA:
//- LOS NOMBRE DE LOS EVENTOS SIEMPRE VAN EN MINÚSCULAS.
//- Esto permite lanzar los eventos de forma manual simplemente llamándolo por su nombre

//Los eventos se pueden lanzar manualmente utilizando este método.
//window.onload;//Descomentar esta línea para probar el lanzamiento manual del evento.

//MODELO DE GESTIÓN DE EVENTOS W3C (Método addEventListener)******************
//EJEMPLO: Cuando se pulse el botón Enviar, aparecerá un mensaje con la información 
//introducida en los campos de texto.

//función anónima arrow que definirá el comportamiento cuando se pulse el botón.
//accBoton es el manejador de evento y recibe como parámetro de entrada un objeto de tipo Event.
//Si ese evento no se va a utilizar, no es necesario hacer referencia explícita a él. 

const accBoton=(evento)=>{
    //Accedemos a los elementos del documento involucrados
    const boton=document.getElementById("enviar");
    const nombre=document.getElementById("nombreId")
    const apellidos=document.getElementById("apellidosId")
    //Se muestra el mensaje
    //getElementById devuelve un objeto de tipo Element. Ese objeto tiene una propiedad value que almacena
    //el contenido del elemento html.
    alert(`El nombre es ${document.getElementById("nombreId").value} y los apellidos son ${apellidos.value}`);
    
    //**********eliminar el evento click del botón
    //(Ver explicación de evento removeEventListener más abajo)
    boton.removeEventListener("click",accBoton);

    //*******Anular la acción por defecto del botón (submit)
    //Un elemento de tipo button puede ser de 3 tipos: submit (por defecto), button y reset:
    // - submit: envío del formulario
    // - button: no tiene acción predeterminada
    // - reset: Restablece todos los campos su valor predeterminado.
    
    //La acción por defecto de el botón cuando se hace click sobre él es el submit (envío de los datos)
    //Como se le ha asignado otra acción diferente y sólo queremos que haga esta que función
    //que estamos creando, eliminamos la acción por defecto con el método preventDefault()
    
    //Para aplicar el preventDefault es necesario hacer referencia al evento que dispara el manejador
    //por eso se le ha pasado como parámetro de entrada la variable "evento".

    evento.preventDefault();

    //El preventDefault no haría falta si el botón fuera de tipo button (type=button)
}

/******************** Método addEventListener:
 * - Asigna un evento a un objeto específico del documento.
 *
 - Recibe tres argumentos: el tipo de evento, la función a ejecutar y un valor booleano
 para indicar cuándo hay que capturar el evento (opcional). Si es en la fase de captura se le pasará true
 y si es en la fase de burbujeo se le pasará false (Lo veremos un poco más adelante)
- Fase de burbujeo es cuando al activar un evento en un elemento, si su nodo padre en el DOM
tiene registrado otro evento, éste se activa automáticamente, y así sucesivamente, escalando en la jerarquía del
DOM.
- La función es el manejador del evento y puede recibir como parámetro de entrada un objeto EVENT aunque
no es necesario hacer referencia explícita a él si no se va a utilizar.

Si se quieren asignar varios eventos a un mismo objeto hay que llamar a addEvenListener
para el mismo elemento.
 */

//DOMContentLLoaded es el tipo de evento que se dispara cuando el documento ha terminado de cargar
//Cuando se acabe de cargar la página, se asignará el evento al botón con id "enviar"
//Este es el proceso habitual ya que la asignación de un evento a un elemento que no se ha cargado produciría un error.
window.addEventListener("DOMContentLoaded", ()=>{
    //establecer evento click al botón
    const boton=document.getElementById("enviar");
    //Cuando se pulse el botón (evento click) se llamará a la función accBoton
    boton.addEventListener("click",accBoton);

    //También se puede definir la función dentro de la propia llamada a addEventListener
    //En ese caso, para hacer referencia al elemento en cuestión hay que usar THIS.
    //OJO: Para hacer uso del THIS no se pueden utilizar funciones flecha.
    //Ejemplo: cuando la caja de texto del nombre reciba el foco el nombre,
    //cambiará su color de fondo
    //Podemos acceder a las propiedades de estilo de un elemento mediante style.
    document.getElementById("nombreId").addEventListener("focus",function(){
       this.style.backgroundColor="Cyan";
    })
    //cuando pierda el foco el nombre, quitar fondo
    document.getElementById("nombreId").addEventListener("blur",function(){
        this.style.backgroundColor="";
     })
})

//MÉTODO REMOVEEVENTLISTENER.*********************
//Los "escuchadores" también puede eliminarse para que un elemento no responda a un
//determinado evento (removeEventListener) --> Descomentar la línea removeEventListener de accBoton()

