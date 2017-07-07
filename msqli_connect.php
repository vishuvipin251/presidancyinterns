<?php
DEFINE ('my_User', 'studentUser');
DEFINE ('my_password', 'Heya1');
DEFINE ('my_host', 'localhost');
DEFINE ('my_DB', 'appy');

$dbc = @mysqli_connect(my_host, my_User, my_password, my_DB)
OR  die('Could not connect to Mysql'. mysqli_connect_error());
?>
