<?php
include './config.php';
  //header('Access-Control-Allow-Origin: *');
 //header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
 //header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
 header('Content-type: text/plain; charset=utf-8');
 
$array=$_POST['nutrientphp'];
$sql;

$conn = new mysqli($server, $user, $pass, $dbname);
$conn->set_charset("utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

else{
for($x = 0; $x < count($array); $x++) {

   $sql ="INSERT INTO `ppisforlife`.`post_nutrient` (`post`, `nutrient`) VALUES ('".$_POST['databaseid']."', '$array[$x]')";
 if ($conn->query($sql) === TRUE) {
            //echo "success ";
		   

         } 
 else {
           echo "Error: " . $sql . "<br>" . $conn->error;
      }
}



}
$conn->close();

?> 