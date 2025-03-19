"use strict";
//Ejemplo de petición Get sin parámetros utilizando funciones
//async/await con axios.
async function miPeticionGet(){
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        let json = await response.data;
        console.log("PETICIÓN GET GENÉRICOS *********************");
        json.forEach(element => {
            console.log(element.name); // Mostramos el nombre de cada usuario
        });
    } catch (error) {
        console.log("Tenemos un error ",error.response.status);
    }finally{
        console.log("--Me ves siempre--");
    }
}
//Ejemplo de petición Get con parámetros utilizando funciones
//async/await con axios.
async function miPeticionGetParams(id) {
    try {
        //Podemos pasar los parámetros en la URL...
        //(Esta API devuelve un objeto JSON cuando se pasan los parámetros en la URL porque
        //asume que estás solicitando un único elemento)
        ///////////////////////
        // let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        // let usuario = response.data;
        // console.log("PETICIÓN GET CON PARÁMETROS***************");
        // console.log(`Nombre: ${usuario.name}`);
        // console.log(`Username: ${usuario.username}`);
        // console.log(`Email: ${usuario.email}`);
        ///////////////////////
        //...o bien en params
        //(Esta API devuelve un array de objetos JSON cuando los parámetros se pasan
        //a través de params ya que asume que la consulta puede dar lugar a varios
        //elementos en lugar de uno solo, como en el caso del paso de parámetros por URL)
        ///////////////////////
        let response = await axios.get("https://jsonplaceholder.typicode.com/users", {
                 params: { id:id } // ✅ Pasamos el ID como parámetro en la URL
                     });
        let usuario = response.data;
        console.log("PETICIÓN GET CON PARÁMETROS***************");
        console.log(`Nombre: ${usuario[0].name}`);
        console.log(`Username: ${usuario[0].username}`);
        console.log(`Email: ${usuario[0].email}`);
            ///////////////////////
            
       
    } catch (error) {
        console.log("Tenemos un error ", error.response?.status || error.message);
    } finally {
        console.log("--Me ves siempre--");
    }
 }


//Ejemplo de petición Get con parámetros utilizando funciones
//async/await con axios.
async function miPeticionPost(id) {
    try {
        // Enviamos una solicitud POST con el ID del usuario en el cuerpo de la petición
        let response = await axios.post("https://jsonplaceholder.typicode.com/users", {
            name: "Lola",
            username: "ProfeDWEC",
            email: "lola@iestrassierra.com"  // Enviamos el ID como parte del cuerpo de la petición
        });
        console.log("PETICIÓN POST *************************");
        // Extraemos los datos de la respuesta.
        //En las solicitudes POST, el objeto de respuesta contiene los datos que se han
        //insertado en el caso de que la solicitud se haya resuelto con éxito.
        let usuario = response.data;

        // Mostramos los datos del usuario devuelto por la API
        console.log(`Usuario obtenido mediante POST:`);
        console.log(`ID: ${usuario.id}`);
        console.log(`Nombre: ${usuario.name}`);
        console.log(`Username: ${usuario.username}`);
        console.log(`Email: ${usuario.email}`);

    } catch (error) {
        // Capturamos errores y mostramos el código de error o el mensaje
        console.log("Tenemos un error ", error.response?.status || error.message);
    } finally {
        // Este bloque se ejecuta siempre, haya error o no
        console.log("--Me ves siempre--");
    }
}

// Llamamos a la función pasando el ID del usuario que queremos obtener
miPeticionGet();
miPeticionGetParams(3);
miPeticionPost(1);
