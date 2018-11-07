<?php
require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$to = "info@xdss.com.co"; //correo de contacto

//informacion de formulario
$nombre = htmlentities($_POST['name']);
$telefono = $_POST['telefono'];
$Email = htmlentities($_POST['email']);
$Mensaje = nl2br(htmlentities($_POST['Mensaj']));

if($nombre == "" ||  $Email == "" || $telefono == "" || $Mensaje == ""):
	echo '<br/> <div class="alert alert-danger"> Todos los campos son requeridos </div>';
else:
	$mail ->From = $Email;
    $mail->addAddress($to);
    $mail->Subject = $nombre;
    $mail->isHtml(true);
    $mail->Body = '<strong>'.$nombre.' </strong> le ha enviado el siguiente mensaje: <br/> <p>'.$Mensaje.'</p> <br/>'.$telefono.'<br/>'.$Email;
    $mail->CharSet = 'UTF-8';
    $mail->send();
echo '<br/> <div class="alert alert-success"> Información enviada correctamente </div>';
	endif;
?>