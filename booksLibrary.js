$(document).ready(function() {
  login();
});
function login() {
  var username = localStorage.username;
  console.log('Username: ',username);
  if (username.charAt(0) == 'u') {
    var stu = new student(username);
    // Call AJAX get data from getbooks.php
      $(document).ready(function () {
        $.ajax({
            type: 'GET',
            url: 'getbooks.php',
            async: true,
            data: { },
            dataType: 'json',
            success: function (data) {
              // If we get data from server,
              console.log("Data from server", data);
              alert("STUDENT JSON");
              createTable(data, stu);
            },
            error: function (jqXHR, textStatus, error)
            {
            // If could not load from server
            // It means books.txt is empty, then we create new library
                    alert("Create Library from Scratch");
                    var lib = new library();
                    // Create (Push) 4 new shelfs
                    lib.shelves.push(new shelf("Art"));
                    lib.shelves.push(new shelf("Sport"));
                    lib.shelves.push(new shelf("Science"));
                    lib.shelves.push(new shelf("Literature"));
                    // Then Create (Push) 24 new books
                    for (var i = 0; i <= 24; i++)
                    {
                      var bk = new book('B', i);
                      lib.books.push(bk);
                      if (i % 4 == 0) lib.shelves[0].books_on_shelf.push(bk);
                      if (i % 4 == 1) lib.shelves[1].books_on_shelf.push(bk);
                      if (i % 4 == 2) lib.shelves[2].books_on_shelf.push(bk);
                      if (i % 4 == 3) lib.shelves[3].books_on_shelf.push(bk);
                    }
                // Then createTable
                    createTable(lib, stu);
            }
          });
        })
  }
  else if (username.toLowerCase() == "admin") {
    $(document).ready(function () {
      $.ajax({
          type: 'GET',
          url: 'getbooks.php',
          async: true,
          data: { },
          dataType: 'json',
          success: function (data) {
            // console.log("Data from server", data);
            alert("ADMIN JSON");
            createTable(data, stu);
          },
          error: function (jqXHR, textStatus, error)
          {
            // If could not load from server
            // It means books.txt is empty, then we create new library
              alert("Create Library from Scatch");
              var lib = new library();
              // Create (Push) 4 new shelfs
              lib.shelves.push(new shelf("Art"));
              lib.shelves.push(new shelf("Sport"));
              lib.shelves.push(new shelf("Science"));
              lib.shelves.push(new shelf("Literature"));
              // Then Create (Push) 24 new books
              for (var i = 0; i <= 24; i++) {
                var bk = new book('B', i);
                lib.books.push(bk);
                if (i % 4 == 0) lib.shelves[0].books_on_shelf.push(bk);
                if (i % 4 == 1) lib.shelves[1].books_on_shelf.push(bk);
                if (i % 4 == 2) lib.shelves[2].books_on_shelf.push(bk);
                if (i % 4 == 3) lib.shelves[3].books_on_shelf.push(bk);
              }
              createTable(lib, stu);
          }
      });
    })
  }
}
function check(book, library) {
  var book = (book.innerHTML).replace(/[^\d.]/g, '');
  for (var i = 0; i < library.books.length; i++) {
    if (library.books[i].bookID == book) {
      if (library.books[i].presence == 1) {
        alert("Book: " + library.books[i].type + library.books[i].bookID + " is still available");
        break;
      } else {
        alert("This book is already checked out by " + library.books[i].borrowed);
        break;
      }
    }
  }
}
function createTable(library, student) {
  document.body.innerHTML = "";
  var body = document.getElementsByTagName("body")[0];
  var table = document.createElement("table");
  var tBody = document.createElement("tbody");
  var row = document.createElement("tr");
  for (var i = 0; i < 4; i++) {
    var cell = document.createElement("th");
    var text = document.createTextNode(library.shelves[i].name);
    cell.style.backgroundColor = "#4CAF50";
    cell.appendChild(text);
    row.appendChild(cell);

  }
  tBody.appendChild(row);
  for (var i = 0; i < 7; i++) {
    var row2 = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
      var cell = document.createElement("td");
      try {
        var name = library.shelves[j].books_on_shelf[i].type +
          library.shelves[j].books_on_shelf[i].bookID;
        var text = document.createTextNode(name);
      } catch (e) {
        var text = document.createTextNode("");
      }
      cell.appendChild(text);
      cell.id = name;
      row2.appendChild(cell);
    }
    tBody.appendChild(row2);
  }
  table.appendChild(tBody);
  body.appendChild(table);
  table.setAttribute("border", "2");
  for (var i = 0; i < library.books.length; i++) {
    if (library.books[i].presence == 0) {
      document.getElementById(library.books[i].type + library.books[i].bookID).style.backgroundColor = "#FFA500";
    }
  }
  if (table != null) {
    for (var i = 0; i < table.rows.length; i++) {
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].onclick = function() {
          checkout(this, library, student);
        }
      }
    }
  }
  //Only Create Add button if username is admin
  if (localStorage.username == 'admin')
  createButton();
}
function checkout(book, library, student) {
  if (localStorage.username.charAt(0) == 'u'){
      var book = (book.innerHTML).replace(/[^\d.]/g, ''); // ex B5
      var username = student.username;
      if (student.books.length >= 2) {
        alert("You cannot check out any more books");
      } else
      {
        for (var i = 0; i < library.books.length; i++) {
          if (library.books[i].bookID == book) {
            if (library.books[i].presence == 1) {
              library.books[i].borrowed = username;
              library.books[i].presence = 0;
              student.books.push(library.books[i]);
              document.getElementById(library.books[i].type + library.books[i].bookID).style.backgroundColor = "#FFA500";
              //Store library on books.txt
              //TODO: Store library on server
              phpPOST(library);
              alert("Checked out book " + library.books[i].type + library.books[i].bookID);
              break;
            } else {
              alert("This book is already checked out by " + library.books[i].borrowed);
              break;
            }
          }
        }
      }
  }
  if (localStorage.username == 'admin'){
    //Check if book is available or borrowed
    check(book, library);
  }
}
function phpPOST(data) {
  datatoPOST = JSON.stringify(data);
  console.log('Data to Post',datatoPOST);
  $.ajax({
      type: 'POST',
      url: 'getbooks.php',
      async: true,
      data: {datatoPOST},
      dataType: 'json',
      success: function(response) {
        alert('Post Success',response);
      },
      error: function () {
        alert('Post data ...(Check books.txt)');
      }
  });
}
function createButton() {
  //Create Button
  var button= "";
  button += '<input type="text" name="book_name" placeholder="Book Name" id="book_nameID">';
  button += '<input type="text" name="shelf" placeholder="Shelf (Art, Sport, Science, Literature)" id="shelf_ID">';
  button += '<button type="button" name="add_book" id="btnID">Add Book</button>';
  $('body').append(button);
}
function library() {
  this.books = [];
  this.shelves = [];
}
function shelf(_name) {
  this.books_on_shelf = [];
  this.name = _name;
}
function book(_type, _id) {
  this.type = _type;
  this.borrowed;
  this.bookID = _id;
  this.presence = 1;
}
function student(id) {
  this.username = id;
  this.books = [];
}
