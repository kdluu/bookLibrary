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
    $('#library').on('click','td', function (event) {
      event.preventDefault();
        //  alert('Column :'+$(this).html().trim()); // Cell value
       //alert('Column :'+$(this).index()); //Column index NOTE: Start from 0
       //alert('Row:'+$(this).parent().index());//Row index
        // alert('Row:'+$(this).parent().find('td').html().trim();//Row name
        // alert('Column:'+$('#library thead tr th').eq($(this).index()).html().trim());//Header name
            //$(this).toggleClass("green-cell");
            //for ($i = 0; $i < 2; $i++)
            $count ++;
            if ($count > 2)
            {
              alert("Student can only borrow 2 books at a time");
              $(this).css("background-color","#ffffff");

            }
            else {
              $(this).css("background-color","#3CB371");
            }


    })


});
