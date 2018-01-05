/*Al Aceptar los terminos y condiciones enviamos el usuario y la contraseña y validamos en validar.php 
 que tipo de usuario va a ingresar, guardamos todos los datos relacionados con el y lo redirecionamos al home*/
$("#sql").click(function(){
    u = $("#txtLogin").val();
    p = $("#txtPasswd").val();

    if (u != "" && p != "") {
      // Validamos si los datos ingresados son diferentes de vacios
        var datos = {
          user:  u,
          clave: p
        };
        //Enviamos los datos a la url especificada 
        $.getJSON(ruta+"validar_prueba.php", datos, function(data){
          //Validamos lo que obtenemos en data
          if (data != "") {
            if (data[10] == 2) {
              id = data[0];
              localStorage.setItem("Id_Docente", id);
              idD = localStorage.getItem("Id_Docente");

              usu_id = data[1];
              localStorage.setItem("usuario", usu_id);
              usu = localStorage.getItem("usuario");

              nombre = data[2];
              localStorage.setItem("nom_Docente", nombre);
              nom_Doc = localStorage.getItem("nom_Docente");
              
              fecha_nac = data[3];
              localStorage.setItem("fecha_docen", fecha_nac);
              Fd = localStorage.getItem("fecha_docen");

              genero = data[4];
              localStorage.setItem("genero_D", genero);
              gen = localStorage.getItem("genero_D");

              direccion = data[5];
              localStorage.setItem("direc_D", direccion);
              dir = localStorage.getItem("direc_D");

              telefono = data[6];
              localStorage.setItem("tel", telefono);
              td = localStorage.getItem("tel");

              email = data[7];
              localStorage.setItem("correo", email);
              email_docente = localStorage.getItem("correo");

              titulo = data[8];
              localStorage.setItem("titulo_D", titulo);
              tituD = localStorage.getItem("titulo_D");

              estado = data[9];
              localStorage.setItem("estadoD", estado);
              estadoD = localStorage.getItem("estadoD");

              rol = data[10];
              localStorage.setItem("rol_D", rol);
              r = localStorage.getItem("rol_D");

              foto = data[11];
              localStorage.setItem("rol_D", foto);
              foto_doc = localStorage.getItem("rol_D");

              inst = data[12];
              localStorage.setItem("instD", inst);
              insD = localStorage.getItem("instD");

              grupos = data[13];
              localStorage.setItem("grup", grupos);
              grupD = localStorage.getItem("grup");

              anos = data[14];
              localStorage.setItem("anod", anos);
              anoD = localStorage.getItem("anod");

              rol_n = data[15];
              localStorage.setItem("rolnombre_D", rol_n);
              r_n = localStorage.getItem("rolnombre_D");

              $('#defaultModal').modal('show');
              $("#btn-enviar").click(function(){
              // alert(nom_Doc+" "+",Me complace darle la más cordial bienvenida a la EscuelApp. \n Este portal le informa sobre las actividades a desarrollar durante cada periodo . Además tendra constante comunicación con los diferentes padres de Familia.");
               window.location.href = ('vistas/home_docente.html?nombre='+nom_Doc+'&email='+email_docente+'&foto='+foto_doc+'&ide='+idD+'&inst='+insD+'&grupo='+grupD+'&ano='+anoD+'&id_doc='+idD+'&tel='+td+'&rol='+rol_n);

             });

            }else if(data[18] == 3){
             id = data[0];
             localStorage.setItem("Id_student", id);
             idD = localStorage.getItem("Id_student");

             id_ins = data[1];
             localStorage.setItem("id_inst", id_ins);
             idIns = localStorage.getItem("id_inst");

             grupo = data[2];
             localStorage.setItem("grupo", grupo);
             gr = localStorage.getItem("grupo");

             nomE = data[3];
             localStorage.setItem("nombre_Student", nomE);
             nom_Student = localStorage.getItem("nombre_Student");

             id_Est = data[4];
             localStorage.setItem("ident_st", id_Est);
             idE = localStorage.getItem("ident_st");

             gen = data[6];
             localStorage.setItem("generoE", gen);
             genE = localStorage.getItem("generoE");

             direcA = data[7];
             localStorage.setItem("direccion", direcA);
             direcAc = localStorage.getItem("direccion");

             tel = data[8];
             localStorage.setItem("telefono", tel);
             telA = localStorage.getItem("telefono");

             id_Ac = data[9];
             localStorage.setItem("ident_Ac", id_Ac);
             idAcd = localStorage.getItem("ident_Ac");

             nomAcu = data[10];
             localStorage.setItem("nom_acudiente", nomAcu);
             nombre = localStorage.getItem("nom_acudiente");

             email = data[14];
             localStorage.setItem("emailA", email);
             email_A = localStorage.getItem("emailA");

             id_usu = data[16];
             localStorage.setItem("ide_usu", id_usu);
             idu = localStorage.getItem("ide_usu");

             foto = data[17];
             localStorage.setItem("foto_Ac", foto);
             fotoA = localStorage.getItem("foto_Ac");

             ano = data[19];
             localStorage.setItem("año", ano);
             aano = localStorage.getItem("año");

             rol_A = data[20];
             localStorage.setItem("rol_nombre", rol_A);
             roll = localStorage.getItem("rol_nombre");
             // Mostramos la Modal de los Terminso Y Condiciones y si le da aceptar Ingresa al Home
              $('#defaultModal').modal('show');
                $("#btn-enviar").click(function(){
                  window.location = ('vistas/home.html?nombre='+nomAcu+'&email='+email_A+'&tel='+telA+'&foto='+fotoA+'&id='+idu+'&ano='+aano+'&ins='+idIns+'&grupo='+gr+'&id_E='+idD+'&rol='+roll);
                });
            }
          }else{
            $("#mensaje").html("<div class='alert alert-danger'><b>Error</b> Datos Incorrectos</div>");
            $("#txtLogin").val('');
            $("#txtPasswd").val('');
            setTimeout(function() {
                 $("#mensaje").fadeOut(1500);
            },4000);
          }  
    });  

    }else{
       $("#mensaje").html("<div class='alert alert-danger'><b>Error </b>Datos Vacios</div>");
    }
});


