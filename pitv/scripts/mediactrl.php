<?php
$action = $_GET["action"];
if($action == "play"){
    shell_exec("sudo echo -n p > /tmp/omx");
}else if($action == "stop"){
    shell_exec("sudo echo -n q > /tmp/omx");
}else if($action == "backward"){
    shell_exec("sudo echo -n $'\x1b\x5b\x44' > /tmp/omx");
}else if($action == "forward"){
    shell_exec("sudo echo -n $'\x1b\x5b\x43' > /tmp/omx");
}else if($action == "voldown"){
    shell_exec("sudo echo -n - > /tmp/omx");
}else if($action == "volup"){
    shell_exec("sudo echo -n + > /tmp/omx");
}else if($action == "info"){
    shell_exec("sudo echo -n z > /tmp/omx");
} 
?>