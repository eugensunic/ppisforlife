<?php

 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
 header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$server ="160.153.16.43";
$user="eusunic";
$pass="mili7788";
$dbname="ppisforlife2";



$conn = new mysqli($server, $user, $pass, $dbname);
$conn->set_charset('utf8');



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else{


  if ($result = $conn->query("SELECT MAX(id) as id FROM post")) 
{

    while($row = $result->fetch_array(MYSQL_ASSOC)) 
    {
            $myArray[] = $row;

    }
    echo json_encode($myArray,JSON_UNESCAPED_UNICODE);
 }

}


?>

