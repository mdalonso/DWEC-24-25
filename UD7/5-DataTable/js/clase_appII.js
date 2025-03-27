"use strict"
//En este ejemplo se cargan los datos en la tabla HTML (creada de forma estática) mediante el propio
//método DataTable de la librería DATATABLES utilizando la técnica ajax.
$(()=>{
    mostrarTabla();
})

const mostrarTabla=async()=>{
   
       $('.table').DataTable({
        //AJAX: Eta opción realiza una solicitud ajax para cargar datos en la tabla y permite hacer
        //la correspondencia entre los datos recibidos y las columnas de la tabla.
        //Opciones de ajax son las mismas que las del método ajax de JQuery:
        //- url (obligatorio): url del servidor al que se realiza la solicitud.
        //- type: tipo de solicitud HTML, en este caso ya que lo que estamos es solicitando datos del servidor
        //- data: pasa parámetros al servidor para la solicitud. En este caso el servidor (que es un archivo php)
        //          recibe un parámetro llamado 'perro' que gestiona internamente de manera que si el
        //          parámetro está vacío devuelve todos los perros de la base de datos.
        //- dataType: tipo de datos que se van a recibir del servidor.
        ajax:{
           url:'php/mostrar.php',//URL de la solicitud
           type:'GET', //Tipo de solicitud
           data:{//Datos que se pasan a la solicitud
            perro:''
           },
           //Otros posibles valores para dataType son:
           //- xml: Trata la respuesta como un documento XML
           //- text: Devuelve la respuesta como una cadena de texto plano.
           //- html: Trata la respuesta como un documento HTML
           //- script: ejecuta la respuesta com oun script de JS
           dataType:'json' //Tipo de datos que se espera recibir (json por defecto)

           //Otros posibles parámetros:
           //- headers : Cabeceras HTTP
           //- error: función para manejar los errores que puedan producirse. Esta función recibe como parámetros el objeto XHR,
           //           una cadena de texto descriptiva del error (timeout, error, abort o parseerror) y mensaje de error del servidor. 
        },
        //COLUMNS:permite establecer parámetros de inicialización de las columnas. Recibe un array con un
        //elemento por cada columna de la tabla de forma obligatoria. Cada elemento es un objeto JS con
        //las características que queramos aplicar a la columna o null si no se quiere aplicar
        //ninguna configuración
        // En este ejemplo se utiliza la opción data que determina la fuente de datos de la columna.
        
         columns:[{
            //La fuente de datos de la primera columna es el campo chip del objeto JSON recibido desde
            //el servidor.
            data: "chip",//Clave del JSON que se usa en la columna
            title:"Microchip", //Título de la columnma
            searchable:false//Indica si la búsqueda que se realiza mediante la caja de texto rastrea también esta columna
        },
        {
            //La fuente de datos de la primera columna es el campo nombre del objeto JSON recibido desde
            //el servidor.
            data: "nombre",
            orderable:false //Indica si la columna es ordenable o no (true por defecto)
        },
        {
            //La fuente de datos de la primera columna es el campo raza del objeto JSON recibido desde
            //el servidor.
            data: "raza"
        },
        {
            //La fuente de datos de la primera columna es el campo fechaNac del objeto JSON recibido desde
            //el servidor.
            data: "fechaNac"
        }
        ], 
        //Establece el idioma en el que se muestra la tabla
        language:{
            url:'../../assets/librerias/DataTables/es-Es.json'
        },
        //opciones relacionadas con la paginación:

        paging: true,// (Indica si la tabla se pagina o no. Por defecto true)
        pageLength: 5,//Número de filas por página (solo funciona si paging=true)
        pagingType:'full_numbers', //muestra los botones First y last + el número de página
        ordering:true,//Indica si se pueden ordenar los datos (true por defecto)
        searching:true,//Activa o desactiva la barra de búsqueda (true por defecto)
 
        //SELECT: extensión Select de la librería que permite automatizar la selección de una fila.
        select:true
        
        
    });
    
    
}