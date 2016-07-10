<?php
$cmd = "sudo nohup sh play.sh \"".str_replace(" ", "%20", $_GET["url"])."\"". " > /dev/null &";
shell_exec($cmd);
    echo "ok";
?>