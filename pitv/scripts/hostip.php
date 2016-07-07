<?php
$host = str_replace(".LOCAL", "", strtoupper(gethostname()));
$ip = firstword(exec('hostname -I'));
if(isset($_GET["host"])){
    echo $host;
}else{
echo "$host.LOCAL - $ip";
}


function firstword($str)
{
 return (preg_match('/(\S)*/', $str, $matches) ? $matches[0] : $str);
}

?>