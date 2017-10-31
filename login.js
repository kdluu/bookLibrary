$(document).ready(function() {
  $('#login').click(function() {
    //TODO: Get username and password
    var username = $('#usernameID').val();
    var password = $('#passwordID').val();
    if (username == '' || password == '') {
      alert('You have entered invalid username or password');
      // $('span').text(' You have entered an invalid username or password.!').show().fadeOut(5000);
    }
    if (username == 'admin' || password == 'admin') {
      window.location.href = 'booksLibrary.html';
    }
  });
});
