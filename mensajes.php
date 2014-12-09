<!DOCTYPE html>
<head>
	<title>Comentarios</title>
	<meta charset="UTF-8">
	<?php header('Content-Type: text/html; charset=utf-8'); ?>
	<link href="css/estilo3.css" rel="stylesheet">
	<link href="css/trones2.css" rel="stylesheet">
	<link href="css/estilo3.css" rel="stylesheet">
	<link href="css/trones2.css" rel="stylesheet">
</head>
<html>
	<body>
		<?php
		$name = $_POST['nombre'];
		$mail = $_POST['email'];
		$comentario = $_POST['comentario'];
		?>
		echo $name;
		echo $mail;
		echo $comentario;
		<header id="elmaxi">
			<img id="maxbol" src="images/maxi1.gif" alt="Maxi Árbol">
			<div class="hoja" onclick="goBack()">
				Volver Atrás
			</div>
		</header>

		<script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/index.js"></script>
		<script src="js/escrol.js"></script>
	</body>
</html>
