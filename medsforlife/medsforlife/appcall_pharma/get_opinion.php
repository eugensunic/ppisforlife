<?php
include '../config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$json;
$contentArray = array();

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset('utf8');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("
SELECT id, assoc_username, pharm_tought, url, flag, phalone 
FROM pharmacist
WHERE flag= ?
ORDER BY id ASC");

$stmt->bind_param("s", $one);

// params
$one = $_GET['param_0'];

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3, $col_4, $col_5, $col_6);
while ($stmt->fetch()) {
    $json = array(
        'id' => $col_1,
        'assoc_username' => $col_2,
        'pharm_tought' => $col_3,
        'url' => $col_4,
        'flag' => $col_5,
        'phalone' => $col_6
  
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$conn->close();

echo json_encode($contentArray, JSON_UNESCAPED_UNICODE);

?>
