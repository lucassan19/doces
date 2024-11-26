<?php

$dbservidor = "localhost";
$dbusuario = "root";
$dbsenha = "";
$dbbanco = "projeto";

$conn = new mysqli($dbservidor,$dbusuario,$dbsenha,$dbbanco);

if ($conn->connect_error) {
    echo "Erro";
}
   
else {
    echo "Conexão efetuada com sucesso";
}

?>

