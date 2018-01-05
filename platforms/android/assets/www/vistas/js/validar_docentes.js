	$(document).on('click', '#btnEnviar', function(){
     		 var datos = {
     		 	user:  $("#txtLogin").val(),
     		 	clave: $("#txtPasswd").val()
     		 };
		//Enviamos los datos a la url especificada 
     		 $.getJSON("http://172.16.2.23/sih_prueba/mobile/validar_docente.php", datos, function(data){
     		//Validamos lo que obtenemos en data
     		 	if (data == "1") {
     		 		alert("Bienvenid@\nEstimado Docente,Me complace darle la más cordial bienvenida a la Aplicacion Agenda Escolar. \n Este portal le informa sobre las actividades a desarrollar durante cada periodo . Además tendra constante comunicacion con los diferes padres de Familia.");
     		 		window.location = 'vistas/home_docente.html';
     		 	}else{
     		 		alert('Datos Incorrectos');
     		 	}

     		 });
     		 //alert(JSON.stringify(datos));
		   //llamado a funcion validar
		});