$(document).ready(function () {
  $("#login").click(function(){
    // Get username and password by jQuery
    var username = $("#usernameID").val();
    var password = $("#passwordID").val();
    console.log(username);// Test to see if jQuery works
    console.log(password);
    if (username =='' || password == ''){
      $('input[type="text"],input[type="password"]').css("border","2px solid red");
      $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
      // $("#email_error").remove(); // Create this "email_error"and call remove before after, to prevent it adding multiples time
      // $("#usernameID").after("<b id='email_error'> User name can not be blank </b>");
      $( "span" ).text( " You have entered an invalid username or password.!" ).show().fadeOut( 5000 );

    }

  })

})
