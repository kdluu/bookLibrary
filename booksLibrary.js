$(document).ready(function () {
  $('#ajax-button').click(function () {
    $.ajax({
      type: 'GET',
      url: 'getbooks.php',
      async: true,
      data: { },
      dataType: 'json',
      success: function (data) {
        //Now we have the books.txt in array.
        console.log(data);
        console.log(data[3].Literature[2]);
        console.log('Data length: ' + data.length);
        console.log('Art Length: ' + data[0].Art.length);
        drawTable(data);
        drawTable(data[1]);
      },
      error: function (jqXHR, textStatus, error) { }
    });
    function drawTable(data) {
      for ($i = 0; $i < data.length; $i++) {
        drawRow(data[$i]);
      }
      function drawRow(data) {
        $row = $('<tr />');
        $('#Art').append($row);
        for ($i = 0; $i < data.Art.length; $i++) {
          $row.append($('<td>' + data.Art[$i] + '</td>'));
        }



      }

    }
  });
});
