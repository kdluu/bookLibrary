$(document).ready(function () {
  $('#login').click(function () {
    //TODO: Get username and password
    var username = $('#usernameID').val();
    var password = $('#passwordID').val();
    if (username == '' || password == '')
    {
      $('input[type="text"],input[type="password"]').css('border', '2px solid red');
      $('input[type="text"],input[type="password"]').css('box-shadow', ' 0 0 3px red');
      $('span').text(' You have entered an invalid username or password.!').show().fadeOut(5000);
    }
    if (username == 'admin' || password == 'admin')
    {
      window.location.href = 'booksLibrary.html';
    }
  });
});
