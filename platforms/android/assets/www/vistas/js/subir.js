$(document).on('click', '#enviar', function(){
  var input = document.getElementById("images"),
      formdata = false;
    
  if (window.FormData) {
    formdata = new FormData();
    document.getElementById("subir").style.display = "none";
  }
	function showUploadedItem (fuente) {
  	var list = document.getElementById ("lista de imágenes"),
      Li = document.createElement ("li"),
      Img = document.createElement ("img");
    Img.src = fuente;
    Li.appendChild (img);
    List.appendChild (li);
};

if (input.addEventListener) {
  input.addEventListener("change", function (evt) {
    var i = 0, len = this.files.length, img, reader, file;
    
    document.getElementById("response").innerHTML = "Uploading . . ."
    
    for ( ; i < len; i++ ) {
      file = this.files[i];
  
      if (!!file.type.match(/image.*/)) {

      } 

      	if (formdata) {
		  $.ajax({
		    url: "subir.php",
		    type: "POST",
		    data: formdata,
		    processData: false,
		    contentType: false,
		    success: function (res) {
		      document.getElementById("response").innerHTML = res; 
		    }
		  });
		}

    }
      
  }, false);
}

}

