<!DOCTYPE html>
<head>
	<title>Comentarios</title>
	<meta charset="UTF-8">
	<?php header('Content-Type: text/html; charset=utf-8'); ?>
	<link href="css/estilo3.css" rel="stylesheet">
	<link href="css/trones2.css" rel="stylesheet">
</head>
<html>
	<body>
		<?php
		$name = $_POST['nombre'];
		$mail = $_POST['email'];
		$comentario = $_POST['comentario'];
		
		echo $name;
		echo $mail;
		echo $comentario;
		?>
	</body>
</html>