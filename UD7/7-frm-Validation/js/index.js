"use strict";

window.addEventListener("DOMContentLoaded",()=>{
    validarForm();
});

const validarForm=()=>{

    $.validator.addMethod("regla",function(value,elemento,regexp){
        const re=new RegExp(regexp);
        return re.test(value);
    });

    $("#frmFirst").validate({

        //EFECTOS QUE PODEMOS CONTROLAR ANTE LA VALIDACIÓN

        //Definimos el elemento que se va a utilizar para mostrar errores de validación
        errorElement: "em",
        //Ubicación del elemento de feedback
        errorPlacement:function(error,elemento){
            error.addClass("invalid-feedback");

            if (elemento.prop("type"=="radio")){
                error.insertAfter(elemento.parent());
            }else{
                error.insertAfter(elemento);
            }
        },
        //Resaltar el elemento que produce error
        highlight:function(elemento,errorClass,validClass){
            $(elemento).addClass("is-invalid").removeClass("is-valid");

        },

        unhighlight: function(elemento,errorClass,validClass){
            $(elemento).addClass("is-valid").removeClass("is-invalid");
        },  

        rules:{
            edad:{
                required:true,
                maxlength:3,
                number:true,
                min:18
            },
            fecha:{
                required:true,
                date:true
            },
            tipo:{
                required:true
            },
            provincia:{
                required:true
            },
            nombre:{
                required:true,
                regla:/^[A-ZÁ-Ú][A-Za-z\sñá-úÁ-Ú]{4,35}$/
            }

        },
        //Manejador del envío del formulario
        submitHandler: (form)=>{
            enviar();
        },

        messages:{
            nombre:{
                required: "hola pepe",
                regla: "Formato del nombre incorrecto"
            }
        }

    })

}

const enviar=()=>{
    let exito=document.getElementById("exito");
    exito.innerText("El formulario se ha enviado con éxito");

    setTimeout(()=>{
        exito.innerText="";
        limpiar();
    },3000);
}

const limpiar=()=>{
    const inputText = document.getElementsByTagName("input");
  
    for (let ele of inputText){
        ele.value="";
    }  

  const radios = document.getElementsByName("tipo");
  //limpiar los inputs
  /*   inputText.forEach((elemento,ind) => {
    elemento.value = "";
  });   */
  
  //limpiar los checked
  radios.forEach((elemento) => {
    elemento.checked = false;
  });

  //document.querySelector("option:first-child").setAttribute("selected");
//  getElementsByTagName("option").setAttribute("selected",true);
  //establecer el foco en el input de nombre
  document.getElementById("nombre").focus();
}