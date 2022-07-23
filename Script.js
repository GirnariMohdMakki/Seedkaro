$(document).ready(function(){
    
    $('#usercheck').hide();
    $('#passcheck').hide();
    $('#emailcheck').hide();
    
    var user_err = true;
    var pass_err = true;
    var email_err = true;
    
    
    $('#usernames').keyup(function(){
    username_check();
    });
    
    function username_check(){
    
    var user_val = $('#usernames').val();
    
    if(user_val.length == ''){
    $('#usercheck').show();
    $('#usercheck').html("**Please Fill the username");
    $('#usercheck').focus();
    $('#usercheck').css("color","red");
    user_err = false;
    return false;
    
    }else{
    $('#usercheck').hide();
    }
    
    if((user_val.length < 3 ) || (user_val.length > 10 ) ){
    $('#usercheck').show();
    $('#usercheck').html("**Username length must be between 3 and 10");
    $('#usercheck').focus();
    $('#usercheck').css("color","red");
    user_err = false;
    return false;
    
    }else{
    $('#usercheck').hide();
    }
    
    if(!isNaN(user_val)){
    $('#usercheck').show();
    $('#usercheck').html("**only character is allowed");
    $('#usercheck').focus();
    $('#usercheck').css("color","red");
    user_err = false;
    return false;
    
    }else{
    $('#usercheck').hide();
    }
    
    }
    
    $('#password').keyup(function(){
    password_check();
    });
    
    function password_check(){
    
    var passwrdstr = $('#password').val();
    
    if(passwrdstr.length == ''){
    $('#passcheck').show();
    $('#passcheck').html("**Please Fill the password");
    $('#passcheck').focus();
    $('#passcheck').css("color","red");
    pass_err = false;
    return false;
    
    }else{
    $('#passcheck').hide();
    }
    
    if((passwrdstr.length < 3 ) || (passwrdstr.length > 10 ) ){
    $('#passcheck').show();
    $('#passcheck').html("**password length must be between 3 and 10");
    $('#passcheck').focus();
    $('#passcheck').css("color","red");
    pass_err = false;
    return false;
    
    }else{
    $('#passcheck').hide();
    }
    }
    
    $('#email').keyup(function(){
    email_check();
    });
    
    function email_check(){
    
    var email_val = $('#email').val();
    
    if(email_val.length == ''){
    $('#emailcheck').show();
    $('#emailcheck').html("**Please Fill the email address");
    $('#emailcheck').focus();
    $('#emailcheck').css("color","red");
    email_err = false;
    return false;
    
    }else{
    $('#emailcheck').hide();
    }
    
    if(email_val.indexOf('@') <= 0){
    $('#emailcheck').show();
    $('#emailcheck').html("**@ indvalid position");
    $('#emailcheck').focus();
    $('#emailcheck').css("color","red");
    email_err = false;
    return false;
    
    }else{
    $('#emailcheck').hide();
    }
    
    if((email_val.charAt(email_val.length-4)!=".") && (email_val.charAt(email_val.length-3)!=".")){
    $('#emailcheck').show();
    $('#emailcheck').html("**. indvalid position");
    $('#emailcheck').focus();
    $('#emailcheck').css("color","red");
    email_err = false;
    return false;
    
    }else{
    $('#emailcheck').hide();
    }
    
    }
    
    
    
    $('#submitbtn').click(function(){
    
    user_err = true;
    email_err = true;
    
    
    username_check();
    password_check();
    email_check();
    
    if((user_err == true ) && (pass_err == true) &&  (email_err == true)){
    return true;
    }else{
    return false;
    }
    
    });
    
    });                    