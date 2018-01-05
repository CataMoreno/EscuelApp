$(document).on("change", "#grado", function(){
  var datos = {
     grado:  $("#grado").val(),
  };
   //Enviamos los datos a la url especificada 
    $.getJSON("http://192.168.1.54/sih_prueba/mobile/asistencia.php", datos, function(data){
        //Validamos lo que obtenemos en data
        $("#asistencia").html(data);
   });
});