$(document).ready(function () {
    $.ajax({
      type: 'GET',
      url: 'getbooks.php',
      async: true,
      data: { },
      dataType: 'json',
      success: function (data) {
        //Now we have the books.txt in array.
        // console.log(data);
        // console.log(data[3].Literature[2]);
        // console.log('Data length: ' + data.length);
        // console.log('Art Length: ' + data[0].Art.length);
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
});
