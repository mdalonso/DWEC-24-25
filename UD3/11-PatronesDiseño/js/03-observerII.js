"use strict";
//SISTEMA QUE RECIBE DATOS Y SI ESTÁN FUERA DE RANGO EMITE UNA ALERTA.
class FuenteDeDatos {
    constructor() {
      this.observadores = [];
    }
  
    suscribir(observador) {
      this.observadores.push(observador);
    }
  
    nuevaLectura(dato) {
        //Se recibe el nuevo dato. Aquí estaría el código de procesamiento que haría la lectura por ejemplo de unos sensores
      console.log(`Nueva lectura de datos: ${dato}`);
      this.notificar(dato);
    }
  
    notificar(dato) {
      this.observadores.forEach(observador => observador.enviarAlerta(dato));
    }
  }
  
  class SistemaDeAlertas {
    enviarAlerta(dato) {
      if (dato > 100) {
        console.log("¡Alerta! Dato fuera de rango:", dato);
      }
    }
  }
  
  const fuenteDeDatos = new FuenteDeDatos();
  const sistemaAlertas = new SistemaDeAlertas();
  
  fuenteDeDatos.suscribir(sistemaAlertas);
  
  fuenteDeDatos.nuevaLectura(150);
  // "Nueva lectura de datos: 150"
  // "¡Alerta! Dato fuera de rango: 150"

  
