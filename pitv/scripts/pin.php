<?php
$pin = file_get_contents("pin.txt");
    if($_GET["pin"] === "get"){
        echo $pin;
    }else{
        file_put_contents("pin.txt", $_GET["pin"]);
        $pin = file_get_contents("pin.txt");
        shell_exec("sh presskey.sh p");   
        echo "ok";
}
?>