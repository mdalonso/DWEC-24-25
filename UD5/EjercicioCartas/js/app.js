"use strict";

//1- Crear nuevas cartas que se van a añadir al tablero.
//2- Eliminar la primera carta
//    ¿Cómo localizamos la primera carta?

let cartaSeleccionada = null;
document.addEventListener("DOMContentLoaded", () => {
  //establecer evento click a los objetos con la clase carta
    for (let element of document.querySelectorAll(".carta")){
        element.addEventListener("click", hacerClick)
    }

    document.querySelector("#addCarta").addEventListener("click", agregarCarta);
    document.querySelector("#delCarta").addEventListener("click", eliminarFirstCart);
    document.querySelector("#addSecondCarta").addEventListener("click", addSecondCarta)
    document.querySelector("#delSecondCarta").addEventListener("click", delSecondCarta)
    document.querySelector("#updateCarta").addEventListener("click", updateSecondCarta)
    document.querySelector("#accChildren").addEventListener("click", accederHijosBoton)
    document.querySelector("#accBrotherNext").addEventListener("click", accederHermanoSiguienteBoton)
    document.querySelector("#accBrotherPrevious").addEventListener("click",accederHermanoAnteriorBoton)

});

// Agregar un evento al botón "Agregar Carta"

//Agregamos una nueva carta.
const agregarCarta = () => {
  //La carta se crea como un div
    const nuevaCarta = document.createElement("div");
  //Se le añade la clase carta para cambiar su apariencia
    nuevaCarta.classList.add("carta");
  //Se le cambia el contenido
    nuevaCarta.textContent = "Nueva Carta";
    nuevaCarta.addEventListener("click", hacerClick);
  //Se añade la carta al tablero como último hijo.
    document.getElementById("tablero").appendChild(nuevaCarta);
  };

const hacerClick =function() {
  if (!this.classList.contains("resaltada")) {
      this.classList.add("resaltada");
     if (cartaSeleccionada === null) {
        cartaSeleccionada = this;
      } else {
        if (this.textContent === cartaSeleccionada.textContent) {
       
          this.removeEventListener("click",hacerClick)
          cartaSeleccionada.removeEventListener("click",hacerClick)
          cartaSeleccionada = null;
        // El jugador encontró una pareja
        } else {
            setTimeout(() => {
              this.classList.remove("resaltada");
              cartaSeleccionada.classList.remove("resaltada");
              cartaSeleccionada = null;
          }, 1000);
        }
      }
  }
};



// Agregar un evento al botón "Eliminar Primera Carta"
//Para localizar un elemento tenemos:
//- getElementByID
//- getElementByTagName
//- getElementByName
//- getElementByClassName
const eliminarFirstCart=()=> {
  const cartas = document.querySelectorAll(".carta");
  //Si hay más de una carta...
  if (cartas.length > 0) {
    //...Elminaremos el hijo correspondiente a la primera carta.
    document.querySelector("#tablero").removeChild(cartas[0]);
  }
};


const updateSecondCarta=() => {
  const cartas = document.querySelectorAll(".carta");
  if (cartas.length > 1) {
    cartas[1].textContent = "Segunda Carta Modificada";
  }
};


const addSecondCarta=() => {
  const cartas = document.querySelectorAll(".carta");
  if (cartas.length > 1) {
    cartas[1].classList.add("resaltada");
  }
};


const delSecondCarta=() => {
  const cartas = document.querySelectorAll(".carta");
  if (cartas.length > 1) {
    cartas[1].classList.remove("resaltada");
  }
};


const accederHijosBoton=() => {
  const tablero = document.querySelector("#tablero");
  const hijos = tablero.children;
  console.log("Hijos del tablero:", hijos);
};


const accederHermanoSiguienteBoton= () => {
  const cartas = document.querySelectorAll(".carta");
  if (cartas.length > 1) {
    const hermanoSiguiente = cartas[1].nextElementSibling
    console.log("Hermano siguiente de la segunda carta:", hermanoSiguiente);
  }
};

const accederHermanoAnteriorBoton= () => {
  const cartas = document.querySelectorAll(".carta");
  if (cartas.length > 1) {
    const hermanoAnterior = cartas[1].previousElementSibling;
    console.log("Hermano anterior de la segunda carta:", hermanoAnterior);
  }
};
