//Check password
function verifyPassword() {
  var pw = document.getElementById("pswd").value;
  //check empty password field
  if(pw == "") {
     document.getElementById("message").innerHTML = "**Fill the account number please!";
     return false;
  }

  //check for account   
  if(pw == "87654321") {
    showAdmin();
    hideLogin();
    // alert("Hi Admin");
    return false;
  } else if(pw == "12345678") {
    showMember('id12345678');
    hideLogin();
    // alert("Hi Rachel");
    return false;
  } else if(pw == "23456789") {
    showMember('id23456789');
    hideLogin();
    // alert("Hi Sarah");
    return false;
  }else {
    document.getElementById("message").innerHTML = "**Incorrect account number";
    return false;
  }
}

//hide login and show account info
function hideLogin() {
  var x = document.getElementById('login');
  x.style.display = "none";
}
function showAdmin() {
  var x = document.getElementById('id87654321');
  x.style.display = "block";
}
function showMember(x) {
  var x = document.getElementById(x);
  x.style.display = "block";
}

//Toggle show password
function toggleVisibility() {  
  var getPasword = document.getElementById("pswd");  
  if (getPasword.type === "password") {  
    getPasword.type = "text";  
  } else {  
    getPasword.type = "password";  
  }  
} 

