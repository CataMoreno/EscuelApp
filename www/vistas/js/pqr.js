$(document).on('click','#btn_enviar_pqr' ,function(){
    var data = {
        tipo:    $('#tipo_solicitud').val(),
        mensaje: $('#mensaje').val()
    };
    
    $.getJSON("http://fcsih.edu.co/sih_prueba/mobile/pqr.php",data,function(data){

        if (data = "1") {
            alert("Queja Enviada Correctamente");
             tipo:    $('#tipo_solicitud').val('');
             mensaje: $('#mensaje').val('');
        }else{
            alert("Intentalo de Nuevo");
        }
    }); 
});