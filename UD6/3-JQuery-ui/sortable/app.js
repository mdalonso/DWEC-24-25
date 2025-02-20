"use strict";

let aNum=[];

$(()=>{
    generarNumeros();
    $("#sortable").sortable();
    $("button").on("click",comprobar);
})

const generarNumeros=()=>{
    let contador=0;
    while (contador<5){
        let numero=Math.round(Math.random()*49)+1;
        if(jQuery.inArray(numero,aNum)<0){
            aNum.push(numero);
            contador++;
        }
    }
    console.log(aNum);
    //Cargamos el array en la lista.
    cargarNumLista();
    //ordenamos el array para tenerlo como referencia
    aNum.sort((a,b)=>{
        return a-b;
    });

    console.log(aNum);
}

const cargarNumLista=()=>{
/*     let spans=$('.ui-state-default');
    console.log(spans); */

    $('.ui-state-default span').each((indice,elemento)=>{
        $(elemento).text(aNum[indice]);
    })

}

const comprobar=()=>{
    let ordenar=true;
    //comprobamos si los span están ordenados
    $('.ui-state-default span').each((ind,ele)=>{
        if($(ele).text()!=aNum[ind]){
            ordenar=false;
        }
    });
    if (ordenar){
        mostrarMensaje("¡Los números están ordenados",true);
    }else{
        mostrarMensaje("¡Los números NO están ordenados",false);

    }
    
}

const mostrarMensaje=(mensaje,estado)=>{
    Swal.fire({
        title: mensaje,
        showCancelButton: true,
        confirmButtonText: "Continuar",
        cancelButtonText: `No seguir jugando`
      }).then((result) => {
        //Si se ha pulsado el botón "Continuar"...
        if (result.isConfirmed) {
            if(estado){ //... y en caso de que que se hayan ordenado adecuadamente...
                console.log("volver a generar numeros");
                generarNumeros(); //...se vuelven a generar los números reiniciando el juego.
            }
        
        } 
      });
}