"use strict";
//Tenemos una única clase pero esta clase se puede configurar de forma diferente.
//Ventajas de usar este patrón:
//- Centraliza la lógica de creación. Si en un futuro se cambia la forma en que se asignan los tipos, sólo hay que modificar la clase FabricaUsuario, no buscar en todos los sitios donde
//     se crean usuarios.
//- Evita condicionales dispersos: No se repite código. Encapsulamos todos los if/else en único punto en vez de tener que comprobarlo cada vez.
//- Facilita la escalabilidad: Si queremos establecer nuevos tipos de usuario, sólo hay que modificar la fábrica, no todos los lugares donde se crean usuarios.
class Usuario {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  }
  
  //La clase FABRICA permite asignar diferente tipo al usuario según lo que recibimos como
  //parámetro.
  class FabricaUsuario {
    static crearUsuario(nombre, tipo) {
      if (tipo === "admin") {
        return new Usuario(nombre, "Administrador");
      } else if (tipo === "cliente") {
        return new Usuario(nombre, "Cliente");
      } else {
        throw new Error("Tipo de usuario no soportado.");
      }
    }
  }
  
  const usuarioAdmin = FabricaUsuario.crearUsuario("Carlos", "admin");
  console.log(usuarioAdmin);  // Usuario { nombre: 'Carlos', tipo: 'Administrador' }
  

