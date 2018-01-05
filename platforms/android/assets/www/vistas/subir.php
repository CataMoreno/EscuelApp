<?php 
$archivo = $_FILES['images'];
	foreach ($_FILES["images"]["error"] as $key ) {
	    $name = $_FILES["images"]["name"][$key];
	    move_uploaded_file( $_FILES["images"]["tmp_name"][$key], "Archivos/" . $_FILES['images']['name'][$key]);
	}
	echo "<h2>listo</h2>";	
 ?>