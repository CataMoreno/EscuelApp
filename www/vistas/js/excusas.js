$(document).on('click', '#btn_enviar_excusa', function(){
 var datos = {
 	   estudiante:  $("#Estudiante").val(),
 	   desde:       $("#desde").val(),
     hasta:       $("#hasta").val(),
     tipo:        $("#tipo_ausencia").val(),
     adjunto:     $("#miimagen").val(),
     mensaje:     $("#mensaje").val()
 };
     //Enviamos los datos a la url especificada 
      $.getJSON("http://192.168.1.54/sih_prueba/mobile/excusas.php", datos, function(data){
          //Validamos lo que obtenemos en data
          console.log(data);
          if (data > 0) {
                // $("#Mostrar").html("<p>Buscando...</p>");
               alert(data);
          }else{
              
          }

     });
});


//     document.addEventListener("DOMContentLoaded",()=>{
//     let form = document.getElementById('form_subir');
//     form.addEventListener("submit", function(event){
//       event.preventDefault();
//       subir_archivo(this);
//     });
// });

// function subir_archivo(form){
//   let barra_estado = form.children[5].children[0],
//   span = barra_estado.children[0],
//   boton_cancelar = form.children[7].children[1];

//   barra_estado.classList.remove('barra_verde','barra_roja');

//   let peticion = new XMLHttpRequest();

//   peticion.upload.addEventListener("progress",(event)=>{

//       let porcentaje = Math.round(event.loaded / event.total) * 100

//       console.log(porcentaje);
//       barra_estado.style.width = porcentaje + '%';
//       span.innerHTML = porcentaje+'%';
//   });

//   peticion.addEventListener("load", ()=>{
//     barra_estado.classList.add("barra_verde");
//     span.innerHTML = "Proceso Completo";

//   });

//   peticion.open('post','http://192.168.1.54/sih_prueba/mobile/excusas.php');
//   peticion.send(new FormData(form));

//   boton_cancelar.addEventListener("click", ()=>{
//     peticion.abort();
//     barra_estado.classList.remove("barra_verde");
//     barra_estado.classList.add("barra_roja");
//     span.innerHTML = "Proceso Cancelado";
//   });
// }