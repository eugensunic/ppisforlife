<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$servername = "localhost";
$username   = "francesco";
$password   = "mili7788";
$dbname     = "ppisforlife";
$json;
$contentArray = array();

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset('utf8');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("
 SELECT COUNT(*) as amount
              FROM (SELECT pc.post
              FROM post_condition pc
              WHERE pc.`condition` IN (12, 18)
              GROUP BY pc.post
              HAVING COUNT(pc.`condition`) = 2  -- assumes no duplicates
            ) t
UNION
 SELECT COUNT(*) as amount
              FROM (SELECT pc.post
              FROM post_condition pc
              WHERE pc.`condition` IN (12, 3)
              GROUP BY pc.post
              HAVING COUNT(pc.`condition`) = 2  -- assumes no duplicates
            ) t
UNION
 SELECT COUNT(*) as amount
              FROM (SELECT pc.post
              FROM post_condition pc
              WHERE pc.`condition` IN (18, 3)
              GROUP BY pc.post
              HAVING COUNT(pc.`condition`) = 2  -- assumes no duplicates
            ) t
UNION
 SELECT COUNT(*) as amount
              FROM (SELECT pc.post
              FROM post_condition pc
              WHERE pc.`condition` IN (18, 3, 12)
              GROUP BY pc.post
              HAVING COUNT(pc.`condition`) = 3  -- assumes no duplicates
            ) t");


$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1);
while ($stmt->fetch()) {
    $json = array(
        'amount' => (string) $col_1 
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$conn->close();

echo json_encode($contentArray, JSON_UNESCAPED_UNICODE);

?>








