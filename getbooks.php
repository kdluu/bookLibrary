<?php
if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
  // POST
  //Store data to books.txt
  file_put_contents('books.txt',($_POST));
} else {
  // GET
  //Get data from books.txt
  $bookString = file_get_contents('books.txt'); //Get content of books.txt
  echo ($bookString);

}

?>
