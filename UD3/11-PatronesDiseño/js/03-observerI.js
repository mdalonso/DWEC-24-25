"use strict";
//Se define una clase ServicioDeMensajes que permitirá suscribir
//a otros objetos para que sean avisados cuando ocurra algún evento.

//Esta clase mantiene un array con todos los objetos suscritos a las
//notificaciones. Este array estará vacío en un primer momento.
class ServicioDeMensajes {
    constructor() {
      this.observadores = [];
    }
    //El método suscribir. Añade un objeto como observador al array de
    //observadores.
    suscribir(observador) {
      this.observadores.push(observador);
    }
    //El método enviarMensaje define el mensaje que se enviará y 
    //hace uso del método que envía las notificaciones.
    enviarMensaje(mensaje) {
      console.log(`Nuevo mensaje: ${mensaje}`);
      this.notificar(mensaje);
    }
    //El método notificar envia la notificación a todos los observadores.
    //Los observadores deben tener algún método público que invocar, que es
    //el que recoge la acción con la que responde el observador.
    notificar(mensaje) {
      this.observadores.forEach(observador => observador.actualizar(mensaje));
    }
  }
  //La clase usuario será la plantilla para definir observadores.
  class Usuario {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    actualizar(mensaje) {
      console.log(`${this.nombre} ha recibido el mensaje: ${mensaje}`);
    }
  }
  
  const servicioMensajes = new ServicioDeMensajes();
  const usuario1 = new Usuario("Ana");
  const usuario2 = new Usuario("Juan");
  
  servicioMensajes.suscribir(usuario1);
  servicioMensajes.suscribir(usuario2);
  
  servicioMensajes.enviarMensaje("Hola, ¿cómo estás?");
  // "Nuevo mensaje: Hola, ¿cómo estás?"
  // "Ana ha recibido el mensaje: Hola, ¿cómo estás?"
  // "Juan ha recibido el mensaje: Hola, ¿cómo estás?"
  
