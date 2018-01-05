$(document).on('click', '#enviar_anuncio', function(){
 var datos = {
     fecha_fin:  $("#fecha_fin").val(),
     titulo:     $("#titulo").val(),
     contenido:  $("#contenido").val(),
     grupo:      $("#grupo").val(),
     tipo:      'Crear'
 };
  if (datos != "") {
    //Enviamos los datos a la url especificada 
    $.getJSON("http://192.168.1.54/sih_prueba/mobile/crud_Anuncios.php", datos, function(data){
      //Validamos lo que obtenemos en data
      if (data != "") {
        alert('Anuncio Creado Correctamente');
        window.location = '../vistas/home_docente.html';


      }else{
        alert('Datos Incorrectos');
      }
    });
  }else{
    alert('Datos Vacios');
  }
});