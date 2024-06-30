<?php
    $nombre = strtoupper($_POST['usuario']);
    $password = $_POST['password'];

    $mensaje = 'Hola tu nombre es '.$nombre.' <br> Tu contraseña es '.$password; 

    echo $mensaje;
?>