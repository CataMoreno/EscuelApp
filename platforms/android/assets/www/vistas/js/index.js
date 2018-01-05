/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        // document.getElementById("captura").addEventListener("click", this.capturePhoto.bind(this),false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
         this.receivedEvent('deviceready');
        

         window.FirebasePlugin.onNotificationOpen(function(notification) {
            console.log(notification);
        }, function(error) {
            console.error(error);
        });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
      // $("#sql").on('click',this.onClickLanzarAlerta);
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    },
    // onClickLanzarAlerta:function()
    // {
    //   window.sqlitePlugin.echoTest(function()
    //   {
    //       var  myDB = window.sqlitePlugin.openDatabase({name: 'EscuelApp.db', location: 'default'});

    //       myDB.transaction(function(tx) {
    //       tx.executeSql('CREATE TABLE IF NOT EXISTS aeusu (aeusu_id INTEGER AUTOINCREMENT NOT NULL,'+
    //                     'aeusu_nick  text  NOT NULL,aeusu_llave  text NOT NULL,aeusu_token text,'+
    //                     'CONSTRAINT  aeusu_pkey PRIMARY KEY (aeusu_id),'+
    //                     'CONSTRAINT  uniqueusers UNIQUE (aeusu_nick, aeusu_token))');
          
    //          var t = 'ertyuiopñlkjhgfcghjotrguhi7679854';
    //           tx.executeSql('insert into aeusu VALUES (?,?,?,?)',[null,$("#txtLogin").val(), $("#txtPasswd").val(),t]);
    //           console.log(t);
          
         
    //       user = $("#txtLogin").val();
    //       localStorage.setItem("usu", user);
    //       u = localStorage.getItem("usu");

    //       pass = $("#txtPasswd").val();
    //       localStorage.setItem("paw", pass);
    //       p = localStorage.getItem("paw");

    //       tx.executeSql('SELECT * FROM aeusu where aeusu_nick = '+u+' and aeusu_llave = '+p+'', [], function (tx, results) {
    //       var len = results.rows.length, i;
    //       // $("#rowCount").append(len);
    //       if (len > 0) {
    //         // $("#defaultModal").modal('show');
    //         window.location.href = ('vistas/home_docente.html?nombre='+nom_Doc+'&email='+email_docente+'&foto='+foto_doc+'&ide='+idD+'&inst='+insD+'&grupo='+grupD+'&ano='+anoD+'&id_doc='+idD+'&tel='+td);
    //       }
    //       }, null);
    //     });       
    //   });

        // var title=1111738709;
        // var desc = "QQL-075";
        //   myDB.transaction(function(transaction) {
        //   var executeQuery = "INSERT INTO aesession (user, pass) VALUES (?,?)";
        //   transaction.executeSql(executeQuery, [title,desc]
        //   , function(tx, result) {
        //   console.log('Inserted');
        //   },
        //   function(error){
        //   alert('Error occurred');
        //   });
        // });
   // },

    capturePhoto: function(){

        navigator.camera.getPicture(onSuccess, OnFail,{
         quality: 50,
         destinationType:navigator.camera.DestinationType.DATA_URL,
         saveToPhotoAlbum:true
      }) ; 

      function onSuccess(imageData){
        var image = document.getElementById('miimagen');
        image.style.display = "block";
        image.src = "data:image/jpeg;base64," + imageData;
      }

      function OnFail(massage){
        alert('Fallo'+ massage);
      }
    }
};

app.initialize();