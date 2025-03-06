<?php
//Este script requiere dos parámetros:valor y nombre, por tanto el script que haga
//uso de él debe de pasarle estos dos parámetros con los mismos nombres.
    //Preguntamos por el valor de la variable
    if($_REQUEST['valor']=="POST"){
        echo "Hola ".$_REQUEST["nombre"]." has pulsado el botón POST";//devuelve texto plano
    }else{
        echo "Hola ".$_REQUEST["nombre"]." has pulsado el botón GET";
    }
?>