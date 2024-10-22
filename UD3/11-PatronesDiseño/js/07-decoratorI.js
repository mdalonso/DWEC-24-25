"use strict";
//Se define una clase que será la que queramos modificar en su comportamiento
//pero sin modificar la clase en su definición.
//En este caso es una clase que simula un botón que contiene un texto (propiedad)
//y devuelve el texto en cuestión
class Boton {
    constructor(texto) {
      this.texto = texto;
    }
  
    mostrar() {
      return this.texto;
    }
  }
  //Ocasionalmente podemos necesitar que el método mostrar de la clase botón
  //haga una cosa diferente a la que tiene que hacer según su definción.
  //Para ello creamos un decorador para el botón.
  class DecoradorBoton {
    //Ese decorador tiene un constructor que recibe una instancia de la
    //clase que va a decorar, en este caso Boton.
    constructor(boton) {
      this.boton = boton;
    }
  //El decorador tendrá un método al que llamaremos igual que el
  //el método que queremos decorar y redefinimos la implementación.
  //Lo mismo se podría hacer para añadir nueva funcionalidad.
    mostrar() {
      return `*${this.boton.mostrar()}*`;  // Agrega un borde al botón
    }
  }
  
  const botonSimple = new Boton("Enviar");
  const botonConBorde = new DecoradorBoton(botonSimple);
  
  console.log(botonConBorde.mostrar());  // "*Enviar*"
  