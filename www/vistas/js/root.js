		//Archivo root js para crear mis variables de inicio y utilizarlas de los otros archivos
		var ruta = "http://fcsih.edu.co/agendaescolar/controles/mobile/"; 
        var archivos = "http://fcsih.edu.co/agendaescolar/archivos/"; 

		// MENU
        $('#home').on('click',function(){
             window.location.href = ('home.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&id='+ide+'&ano='+año+'&ins='+ins+'&grupo='+grupo+'&id_E='+id_es+'&rol='+rol);
        });

        $('#cronograma').on('click',function(){
             window.location.href = ('cronograma.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&id='+ide+'&ano='+año+'&ins='+ins+'&grupo='+grupo+'&id_E='+id_es+'&rol='+rol);
        });

        $('#horario_acudiente').on('click',function(){
             window.location.href = ('horario_acudiente.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&id='+ide+'&ano='+año+'&ins='+ins+'&grupo='+grupo+'&id_E='+id_es+'&rol='+rol);
        });

        $('#excusas').on('click',function(){
             window.location.href = ('excusas.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&id='+ide+'&ano='+año+'&ins='+ins+'&grupo='+grupo+'&id_E='+id_es+'&rol='+rol);
        });

        $('#consulta_docente').on('click',function(){
             window.location.href = ('consulta_docente.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&id='+ide+'&ano='+año+'&ins='+ins+'&grupo='+grupo+'&id_E='+id_es+'&rol='+rol);
        });

        $('#consulta_institucion').on('click',function(){
             window.location.href = ('consulta_institucion.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&id='+ide+'&ano='+año+'&ins='+ins+'&grupo='+grupo+'&id_E='+id_es+'&rol='+rol);
        });

        $('#atencion_publico').on('click',function(){
             window.location.href = ('atencion_publico.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&id='+ide+'&ano='+año+'&ins='+ins+'&grupo='+grupo+'&tel='+tel+'&id_E='+id_es+'&rol='+rol);
        });

        $('#solicitud').on('click',function(){
             window.location.href = ('solicitud.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&id='+ide+'&ano='+año+'&ins='+ins+'&grupo='+grupo+'&id_E='+id_es+'&rol='+rol);
        });

        $('#comunicados').on('click',function(){
             window.location.href = ('comunicados.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&id='+ide+'&ano='+año+'&ins='+ins+'&grupo='+grupo+'&id_E='+id_es+'&rol='+rol);
        });

        $('#materiales').on('click',function(){
             window.location.href = ('materiales.html?nombre='+nombreset+'&email='+email+'&foto='+foto+'&id='+ide+'&ano='+año+'&ins='+ins+'&grupo='+grupo+'&id_E='+id_es+'&rol='+rol);
        });
