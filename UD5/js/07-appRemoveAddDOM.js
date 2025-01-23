"use strict"

//AÑADIR Y ELIMINAR NODOS AL DOM**********************************************

//USO DE LA LIBRERÍA SWEET ALERT
//Codificar esto después de ver el resto del código
//El evento mostrará un aviso utilizando la librería sweetalert2
//Ver el enlace a la librería en Moodle.

const evento=()=>{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Nuevo Enlace',
    showConfirmButton: false,
    timer: 1000
  })
}

 
//Eliminar el nodo por si mismo
document.addEventListener("DOMContentLoaded", ()=>{
//Localizamos el primer elemento del DOM de clase navegacion
    const navegacion=document.querySelector(".navegacion");
    console.log(navegacion);
    //Tiene 4 hijos (los 4 enlaces)
    console.log(navegacion.children);

//ELIMINAREMOS EL PRIMER NODO HIJO DE DIFERENTES FORMAS**************
//(descomentar cada forma para probarlas)
//1 forma: eliminar el nodo: desde el propio nodo.
//Debemos localizarlo y posteriormente aplicarle un remove().

  const nodoBorrar=document.querySelector(".navegacion a");
  console.log(nodoBorrar);

  //nodoBorrar.remove();

  //Otras formas de localizar el nodo es utilizando Traversing...
//Con firstElementChild acceder al primer hijo que sea un nodo de tipo element
//Hasta ahora, para localizar un nodo, hemos utilizado propiedades del propio nodo.
//Otra forma de localizar nodos es mediante las relaciones padre-hijo (TRAVERSING)
    //console.log(navegacion.firstElementChild);//Utiliza traversing para localizar un elemento
//El método remove() elimina el nodo 
    //navegacion.firstElementChild.remove();
//Ahora sólo tiene 3 hijos
    //console.log(navegacion.children);

//A través de la colección children
    //navegacion.children[0].remove()

//2º FORMA: removeChild(): Eliminar el nodo desde el padre. 
//Se le pasa como parámetro el nodo que se quiere eliminar
    //navegacion.removeChild(nodoBorrar);
    //navegacion.removeChild(navegacion.children[0]);//Localizando el nodo a borrar con traversing.

//USO DE SWEET ALERT
//CREAREMOS UN NUEVO ENLACE DENTRO DEL ELEMENTO.
//Utilizamos createElement que recibe como parámetro una cadena que indica el el tipo del nodo que se va a
//crear mediante su etiqueta HTML.
//Creamos un nodo de tipo <a></a>. Será de tipo element.
  const enlace=document.createElement('a');
//Le ponemos un texto
  enlace.textContent="Nuevo enlace";
//Asignamos el destino del enlace mediante su atributo href (#--> Se situará al principio de la página)
  enlace.setAttribute("href", '#');
//Se establece lo que ocurrá cuando se haga click sobre el enlace.
  enlace.addEventListener("click", evento)

//Añadiremos el enlace en la posición que queramos...
//...añadir al menú al final con appendChild
  //navegacion.appendChild(enlace); //(descomentar esta línea para probarlo)

//...añadirlo en otra posición
//En este caso lo añadiremos entre el primer y el segundo enlace
//usamos insertBefore al que le pasamos el nodo que queremos insertar (enlace) y nodo delante del cual queremos
//insertarlo (children[1])
  //navegacion.insertBefore(enlace, navegacion.children[1]);
})



