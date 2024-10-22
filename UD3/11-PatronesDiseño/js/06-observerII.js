"use strict";
class FuenteDeDatos {
    constructor() {
      this.observadores = [];
    }
  
    suscribir(observador) {
      this.observadores.push(observador);
    }
  
    nuevaLectura(dato) {
      console.log(`Nueva lectura de datos: ${dato}`);
      this.notificar(dato);
    }
  
    notificar(dato) {
      this.observadores.forEach(observador => observador.actualizar(dato));
    }
  }
  
  class SistemaDeAlertas {
    actualizar(dato) {
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
  