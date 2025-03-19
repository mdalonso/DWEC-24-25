"use strict";

//Con AXIOS nos ahorra un .then

//Solicitud global con Axios (GET sin parámetros)
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    console.log("SOLICITUD GET GLOBAL**************");
    console.log(response);//objeto response de Axios
    //Los datos consisten en un array de objetos JSON que se pueden extraer del
    //objeto directamente.
    let json = response.data;
    json.forEach(element => {
        console.log(element.username);
    });
})
.catch((error)=>{
    console.log({error});
    console.log("Tenemos un error ",error.status);
})
.finally(()=>{
    console.log("---Me muestro siempre, haya error o no---");
    
})
//Solicitud GET con parámetros
axios.get("https://jsonplaceholder.typicode.com/users",{params:{id:3}})
.then(response=>{
    console.log("SOLICITUD GET CON PARÁMETROS**************");
    console.log(response);
    let json = response.data;
    json.forEach(element => {
        console.log(element.username);
    });
})
.catch((error)=>{
    console.log({error});
    console.log("Tenemos un error ",error.status);
})
.finally(()=>{
    console.log("---Me muestro siempre, haya error o no---");
    
})
//Solicitud POST para el envío de información.
//La información se pasa en forma de objeto
axios.post("https://jsonplaceholder.typicode.com/users", {
    name: "Lola",
    username: "ProfeDWEC",
    email: "lola@iestrassierra.com"
})
.then(response => {
    console.log("SOLICITUD POST***************************");
    console.log("Usuario creado:");
    //cuando se trata de un POST, el objeto response contiene los datos que se han introducido
    console.log(response.data);
})
.catch(error => {
    console.log("Tenemos un error ", error.response?.status);
})
.finally(() => {
    console.log("---Me muestro siempre, haya error o no---");
});
