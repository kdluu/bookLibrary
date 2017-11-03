bookLirary README:

A. Login.js and Login.html

    1. Create login.html and login.js to validate user.
    2. If username and password = 'admin', then login as #librarian (admin),
    if login username starts with U*****, then login as #undergraduate students.
    3. User must be validate first before direct to booksLibrary.html. (username is store in localStorage)

B. booksLibrary.js bookLibrary.html
  1. Recall from localStorage to get username. Then direct to different view.
    * admin has ability to add book to library. (Note: librarian could not borrow book.) 
    * undergraduate students could borrow up to 2 books at a time. The cell that contains a book has been borrowed should change to green (or different color).
  2. If username is admin:
    I. Using AJAX to get content of books.txt in getbooks.php:
      a. If there is no data get back, which means books is empty, a new book library will be create.
      b. If there is data back from AJAX, book library will be loaded from an existing one.
    II. Also, admin could create new book and add to library.
      FAILED. I could not implement, add new book to library.
  3. If user start with 'U' or 'u':
      a. If there is no data get back, which means books is empty, a new book library will be create.
      b. If there is data back from AJAX, book library will be loaded from an existing one.
      c. Student could borrow book from library. and the cell in table data should change color.
      d. Student could see who borrowed book.
C. getbooks.php
  Using get_contents and put_contents to recall and store data to books.txt.
  However, the REQUEST_METHOD should be specify, unless, books.txt will be clear each time when we call get_contents.
  NOTE: When using AJAX POST, remember to change permission of books.txt, unless POST will failed. (Ex: chmod 777 ./books.txt)

OVERALL:
SUCCESS:

  1. Implemented login.js and login.html with css style.
  2. Using AJAX to POST and GET JSON data from getbooks.php.
  3. Implemented file_get_contents and file_put_contents in getbooks.php to recall and store value.
  4. Student could click to cell (row) to borrow books.
  5. Admin could see what book is available and what book is borrowed.
  6. Create add button for admin. And change color of borrowed books cell.

FAILED:
  1. Late, I could not finished the project on time.
  2. Could not implement add button to library and information of the books.
