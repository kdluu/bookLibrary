<?php
// header('Content-Type: text/plain');

$bookString = file_get_contents('books.txt'); //Get content of books.txt
echo ($bookString);
// echo json_encode($bookString, true);
?>
