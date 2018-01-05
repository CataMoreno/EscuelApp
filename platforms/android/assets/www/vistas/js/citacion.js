var ruta = "http://fcsih.edu.co/agendaescolar/controles/mobile/";
$(document).ready(function(){
	 $.post(ruta+"motivacion.php",function(data){
      //Validamos lo que obtenemos en data
      if (data != "") {
        $("#motivos").html(data);
      }else{
        $("#motivos").html("No hay motivo");
      }

	}); 
});

$(document).on("change", "#grupo", function(){
 	var datos = {
    tipo:'citacion',
    grado:  $("#grupo").val(),
  };
     //Enviamos los datos a la url especificada 
      $.post(ruta+"student.php", datos, function(data){
          //Validamos lo que obtenemos en data
          $("#student").html(data);
    });
});

$(document).on("click", "#btn-citar", function(){
 	var datos = {
      tipo:          'crear',
      grado: 	    	$("#grupo").val(),
      docente:      id_do,
   	  student:  	 	$("#estudiante").val(),
      motivo:  		  $("#motivo").val(),
      fecha_hora:  	$("#fecha").val(),
      lugar:  		  $("#lugar").val(),
      descripcion:  $('#descripcion').val(),
      inst:inst
    }
     //Enviamos los datos a la url especificada 
      $.post(ruta+"citacion.php", datos, function(data){
          //Validamos lo que obtenemos en data
           window.location.href = ('citacion.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&ide='+ide+'&inst='+inst+'&grupo='+grupo+'&ano='+año+'&id_doc='+id_do);
    });
});

$(document).on('click', '.Editar_C', function(){
	var datos = {
     tipo:          'actualizar',
	   id:			      $(this).attr('id'),
   	 student:  	   	$('#estudiante').val(),
     motivo:  		  $('#motivo').val(),
     fecha_hora:  	$('#fecha_hora').val(),
     lugar:  		    $('#lugar').val(),
     descripcion: 	$('#descripcion').val()
    };
    
      $.post(ruta+'citacion.php', datos, function(data){
          $("#mensaje").html(data);
           window.location.href = ('citacion.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&ide='+ide+'&inst='+inst+'&grupo='+grupo+'&ano='+año+'&id_doc='+id_do);
	});
});

$(document).on('click', '.EliminarC', function(){
	var datos = {
	   tipo:  'desactivar',
	   id:		$(this).attr('id'),
    };
      $.post(ruta+'citacion.php', datos, function(data){
           $("#mensaje").html(data);
           window.location.href = ('citacion.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&ide='+ide+'&inst='+inst+'&grupo='+grupo+'&ano='+año+'&id_doc='+id_do);
	});
});

