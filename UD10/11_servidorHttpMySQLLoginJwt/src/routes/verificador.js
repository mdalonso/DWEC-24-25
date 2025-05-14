"use strict";

import jwt from 'jsonwebtoken';
import { SECRETO } from '../../config.js'

//verifyToken es una función middleware que permite comprobar si el token enviado desde
//el lado del cliente dentro de la solicitud es correcto.
const verifyToken=(req,res,next)=>{
    //utilizamos el operador de cortocircuito para rescatar el valor del token
    //Si no está en la cabecera x-access-token se busca en la cabecera authorization

    const token=req.header('x-access-token') || req.header('authorization');
    console.log(token);
    //Si no se ha enviado ningún token no se autoriza el acceso
    if (!token){
        return res.status(401).json({mensaje:'Token de autorización requerido'});
    }
    //Mediante el método verify podemos determinar si el token es o no válido conel fin
    //de autorizar al usuario.
    jwt.verify(token,SECRETO,(error,decode)=>{
        //En el caso de que se haya producido algún error en la validación...
        //(error no nulo)
        if (error){
            //...elaboramos una respuesta adecuada a la situación.
            return res.status(400).json({mensaje:"Token no válido"});
        //Si el token es válido...
        }else{//(error es nulo)
            //Incluimos la información extraída del token (payload incluido en el 
            //parámetro decode) en el objeto request para que sea utilizado, si se necesita,
            //en el controlador que se dispare tras producirse una verificación positiva.
            console.log(decode);
            //El campo decode no existe en el objeto request. Lo que estamos haciendo
            //con esta instrucción es añadirle el campo decode con el contenido
            //del payload del token (esto es un comportamiento típico de JS con los
            //objetos)
            req.decode=decode;
            //Se da paso al controlador correspondiente.
            next();
        }
    });
       
}

export default verifyToken;