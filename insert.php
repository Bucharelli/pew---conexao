<?php
include 'conecta.php';

$usuario = $_POST ['login'];
$email = $_POST ['email'];
$senha =  $_POST ['senha'];
$telefone =  $_POST ['telefone'];
$img = "null";

$sql = "insert into tb_usuario (nm_usuario, nm_email, nm_senha, nr_fone) values ('$usuario', '$email', '$senha', '$telefone')";

if($conn->query($sql)){
    echo "Nome: ".$usuario." <br> Email: ".$email."<br> Senha: ".$senha."<br> telefone: ".$telefone."<br>";
}
?>