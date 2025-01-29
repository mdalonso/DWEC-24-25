"use strict";
/** OBJETIVOS DE ESTE EJEMPLO:
 * - VALIDAR EL USUARIO CON UNA EXPRESIÓN REGULAR: debe comezar por @, contener sólo letras y dígitos y tener una 
 * longitud mínima de 6 caracteres.
 * - VALIDAR LA CONTRASEÑA CON UNA EXPRESIÓN REGULAR: Que tenga al menos una letra minúscula, al menos una MAYÚSCULA,
 * al menos un dígito y al menos un carácter especial. Con una logitud de entre 8 y 16 caractéres.
 * - RECUPERAR LA CONTRASEÑA ASOCIADA AL USUARIO en caso de que se haya almacenado en las cookies.
 * - GUARDAR COOKIES en el momento de la validación si se ha marcado el check. La cookie tendrá una duración de 1 mes.
 * 
 * OJO: Este ejemplo es para ilustrar la validación de formularios y el guardado de cookies
 *  pero NO SE DEBEN DE GUARDAR COOKIES EN EL NAVEGADOR
 * Y, EN TODO CASO, ESTAS COOKIES DEBERÍAN GUARDARSE ENCRIPTADAS UTILIZANDO LA API NATIVA CRYPTO.
 * 
 * Lo que se hace habitualmente es enviar la clave al servidor a través de https y encriptada además para
 * mayor seguridad. En el servidor se valida al usuario y se genera un token de sesión que es lo que
 * se envía al navegador. Ese token se guarda en una cookie o en localStorage y se envía de nuevo al 
 * servidor cada vez que se requiere autenticar al usuario para hacer alguna operación.
 * Los tokens tienen una fecha de expiración. Si el token expira el usuario debe de volver a autenticarse.
 */
window.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("usuario").addEventListener("blur",validarUsuario);
    document.getElementById("usuario").addEventListener("blur",leerCookies);
    document.getElementById("contrasena").addEventListener("blur",validarContrasena);
    document.getElementById("enviar").addEventListener("click",ingresar);
})

const validarUsuario=()=>{
    const usuario=document.getElementById("usuario");
    const error=document.getElementById("errusuario");

    //Se comprueba en primer lugar que se ha introducido un usuario ya que si no se ha introducido
    //ningún valor, no se puede validar.
    if (usuario.value.trim()!=""){
        //Creamos la expresión regular.
        let expresion=/^@[a-zA-Z0-9]{6,}$/;
        //Comprobamos si el valor introducido se ajusta al patrón definido por la expresión regular.
        if(!expresion.test(usuario.value.trim())){
            //Si no se ajusta, entraremos en el if...
            //Se limpia el usuario y se muestra un mensaje de error en el span correspodiente.
            //Los mensajes de error tienen que dar al usuario información precisa para que
            //este pueda solventarlo.
            usuario.value="";
            error.innerText="El nombre de usuario debe ser una cadena que comience con @, \n"+
            " contenga sólo minúsculas y dígitos y una longitud mínima de 6 caracteres.";
            //No dejamos abandonar la caja de texto del nombre de usuario hasta que no se meta un
            //valor correcto (esto se puede complementar por repetir la validación en el submit si no se
            //quiere forzar al usuario a que se mantenga en este input)
            usuario.focus();
        }else{
            //Si el valor introducido se ajusta al patrón definido por la expresión regular, se limpia
            //el span de error por si previamente hubiera habido algún error de validación
            error.innerText="";
        }
    }
   
};


const validarContrasena=()=>{
    const contrasena=document.getElementById("contrasena");
    const error=document.getElementById("errcontrasena");
    //Se comprueba en primer lugar que se ha introducido una contraseña ya que si no se ha introducido
    //ningún valor, no se puede validar.
    if (contrasena.value.trim()!=""){
        //Construímos la expresión regular
        //Aquí utilizamos aserciones.
        //Las aserciones permiten comprobar si la expresión cumple con el patrón sin consumir caracteres
        //En este caso se utiliza una aserción de futuro positivo, esto es, permite comprobar si lo que viene
        //detrás se cumple pero sin consumir caracteres, por tanto, siempre está mirando la cadena desde
        //el principio de la misma. Estructura: (?=expresión) donde expresión es el patrón que debe cumplirse después.
        //Por ejemplo, la primera parte de la expresión regular ((?=.*[a-z]))
        //Significa que debe haber cualquier caracter (.) ninguna o muchas vecees (*) y una letra minúscula. Después de la letra
        //minúscula ya da igual lo que venga porque ya se cumple el requisito.
        
        let expresion=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,._!?¿¡#$]).{8,16}$/;
        //^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,\._\!\?¿¡#$]).{8,16}$ Con esta expresión nos aseguramos que no haya
        //espacios en blanco (?!.*\s) (ASERCIÓN DE FUTURO NEGATIVO)
        if(!expresion.test(contrasena.value)){
            //Si la cadena no se ajusta al patrón, entramos en el if...
            //Se limpia la caja de texto de la contraseña
            contrasena.value="";
            //Se le da un mensaje claro y conciso al usuario.
            error.innerText="La contraseña debe cumplir con: \n"+
            "- Contener al menos una minúscula \n"+
            "- Contener al menos una mayúscula \n"+
            "- Contener al menos un número \n"+
            "- Contener al menos un carácter especial \n"+
            "- Tener entre 8 y 16 caracteres";
            //Mantenemos el foco hasta conseguir que el usuario introduzca un valor correcto
            contrasena.focus();
        }else{
            //Si el valor se ajusta al patrón, se limpia el span de error por si hubiera habido errores previos
            error.innerText="";
        }
    }
   
};

//Leemos las cookies para recuperar la contraseña asociada al usuario
const leerCookies=()=>{
    //Si hay cookies guardadas...
    if (document.cookie.length>0){
        //...transformamos la cadena con las cookies en un array utilizando como separador el carácter ;
        let aCookie=document.cookie.split(";");
        console.log(document.cookie);
        //Tenemos que recorrer ese array para poder comprobar cada cookie 
        for (let index = 0; index < aCookie.length; index++) {
            //De cada elemento del array, que tiene el formato clave=valor, formamos un array con dos elementos
            let aDatos=aCookie[index].split("=");
            //el elemento 0 contendrá la clave y el elemento 1 contendrá el valor asociado a esa clave.
            console.log(aDatos[0]);
            console.log(aDatos[1]);
            //Si el contenido del elemento 0 es igual al valor introducido en la caja de texto del nombre del usuario...
            if (aDatos[0].trim()==document.getElementById("usuario").value.trim()){
                console.log(document.getElementById("usuario").value.trim());
                //...recuperamos el valor asociado a esa cookie que es la contraseña asociada a ese nombre de usuario
                document.getElementById("contrasena").value=aDatos[1];
            } 
        }
    }
};


const ingresar=(e)=>{
    //Anulamos el evento por defecto para que no se produzca un error ya que no tenemos la
    //página asociada a ningún servicio servidor.
    e.preventDefault();

    //Comprobamos que el usuario ha introducido valores. 
    //Aquí no hacemos validación pero de esta forma estamos forzando a que el usuario introduzca valores
    //y por tanto, a validar esos valores que hemos introducido.
    let error=false;
    if (document.getElementById("usuario").value.trim()==""){
        document.getElementById("usuario").placeholder="Dato Requerido";
        error=true;
    }
    if (document.getElementById("contrasena").value.trim()==""){
        document.getElementById("contrasena").placeholder="Dato Requerido";
        error=true;
    }
    //Si falta algún dato no se entra en el if porque faltan datos en el formulario
    if(!error){
        //Comprobamos que si el check está marcado, en cuyo caso es necesario grabar la cookie correspondiente
        const grabar=document.getElementById("check");
        if (grabar.checked){//checked devuelve true si el objeto está marcado.
            //Preparamos la fecha de caducidad de la cookie (1 mes)
            //Para ello, averiguamos la fecha actual
            let fecha=new Date();
            //Al mes de la fecha actual le sumamos 1 para que sea la misma fecha en el mes próximo.
            fecha.setMonth(fecha.getMonth()+1);
            //Guardamos la cookie que será la cadena clave=valor
            //clave es el usuario introducido y valor es la contraseña introducida
            //Además, configuramos la fecha de expiración de la cookie.
            document.cookie=`${document.getElementById("usuario").value.trim()}=${document.getElementById("contrasena").value.trim()};expires=${fecha.toUTCString()}`;
            console.log("Se ha guardado la contraseña");
            console.log(document.cookie);
        }
        //Indicamos al usuario que se ha logueado
        alert("Usuario logueado");
        //Limpiamos el formulario
        document.getElementById("usuario").value="";
        document.getElementById("contrasena").value="";
    }



};