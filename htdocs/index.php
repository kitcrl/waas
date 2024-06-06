<?php

   // phpinfo();

  $db = mysqli_connect("127.0.0.1:3306", "crl", "00000000", "aip");

  if ( $db == false )
  {
    echo mysqli_connect_error();
  }

?>