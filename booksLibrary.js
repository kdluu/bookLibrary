
$(document).ready(function (){
  var username = localStorage.username;
  var password = localStorage.password;
  if (username == 'admin') {
    createAdmintable();
  }
  if (username.charAt(0) == 'u' ) {
    createStudenttable();
  }

});
function createAdmintable() {
  $(document).ready(function () {
      $.ajax({
        type: 'GET',
        url: 'getbooks.php',
        async: true,
        data: { },
        dataType: 'json',
        success: function (data) {
          var book_data = '';
          $.each(data, function(key, value){
            book_data += '<tr>';
            book_data += '<td>' +value.Art+ '</td>';
            book_data += '<td>' +value.Sport+ '</td>';
            book_data += '<td>' +value.Science+ '</td>';
            book_data += '<td>' +value.Literature+ '</td>';
          });
          $('#library').append(book_data);
          //TODO: Create Add Book For admin
          // ID: book_nameID,shelf_ID,btnID
          var addbook = '<input type="text" name="book_name" placeholder="Book Name" id="book_nameID">';
          addbook += '<input type="text" name="shelf" placeholder="Shelf (Art, Sport, Science, Literature)" id="shelf_ID">';
          addbook +='<button type="button" name="add_book" id="btnID">Add Book</button> ';
          $('#addbook').append(addbook);
        },
        error: function (jqXHR, textStatus, error) { }
      });
  });



}
function createStudenttable() {
  $(document).ready(function () {
      $.ajax({
        type: 'GET',
        url: 'getbooks.php',
        async: true,
        data: { },
        dataType: 'json',
        success: function (data) {
          var book_data = '';
          $.each(data, function(key, value){
            book_data += '<tr>';
            book_data += '<td>' +value.Art+ '</td>';
            book_data += '<td>' +value.Sport+ '</td>';
            book_data += '<td>' +value.Science+ '</td>';
            book_data += '<td>' +value.Literature+ '</td>';
          });
          $('#library').append(book_data);
        },
        error: function (jqXHR, textStatus, error) { }
      });
      $count = 0;
      $book =[];
      $('#library').on('click','td', function (event) {
        event.preventDefault();

              $count ++;
              if ($count > 2)
              {
                alert("Student can only borrow 2 books at a time");
                $(this).css("background-color","#ffffff");
              }
              else {
                $(this).css("background-color","#3CB371");
                localStorage.setItem("book", $(this).html().trim());
              }
      })


  });
}
