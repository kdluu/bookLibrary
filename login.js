$(document).ready(function() {
  $('#login').click(function() {
    //TODO: Get username and password
    var username = $('#usernameID').val().toLowerCase();
    var password = $('#passwordID').val().toLowerCase();
    localStorage.setItem ("username",username); // Since we just need username
    //Direct user to booksLibrary when have correct validentials.
    if (username == 'admin' || password == 'admin') {
      window.location.href = 'booksLibrary.html';
      localStorage.setItem ("username",username);
    }
    else if (username.charAt(0) == 'u') {
      window.location.href = 'booksLibrary.html';
    }
    else {
        alert('You have entered invalid username or password');
      }


  });
});
