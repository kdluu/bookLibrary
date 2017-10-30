$(document).ready(function () {
<<<<<<< HEAD
  $("#login").click(function(){
    // Get username and password by jQuery
    var username = $("#usernameID").val();
    var password = $("#passwordID").val();
    console.log(username);// Test to see if jQuery works
    console.log(password);
    if (username =='' || password == ''){
      $('input[type="text"],input[type="password"]').css("border","2px solid red");
      $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
      $( "span" ).text( " You have entered an invalid username or password.!" ).show().fadeOut( 3000 );

=======
  $('#login').click(function () {
    //TODO: Get username and password
    var username = $('#usernameID').val();
    var password = $('#passwordID').val();
    if (username == '' || password == '')
    {
      $('input[type="text"],input[type="password"]').css('border', '2px solid red');
      $('input[type="text"],input[type="password"]').css('box-shadow', ' 0 0 3px red');
      $('span').text(' You have entered an invalid username or password.!').show().fadeOut(5000);
>>>>>>> 16d959ab7a1223d9e47828b10a18290a426fd76c
    }
    if (username == 'admin' || password == 'admin')
    {
      window.location.href = 'booksLibrary.html';
    }
  });
});
