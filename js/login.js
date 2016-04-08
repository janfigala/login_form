/**
 * Created by jan on 09/02/2016.
 */

function validateForm() {
    var email = document.forms["login"]["usermail"].value;
    var password = document.forms["login"]["password"].value;
    var areBothValid = true;

    //validate email
    if(email.length === 0) {
        document.getElementById("emailerror").innerHTML = "Please fill in your email address";
        areBothValid = false;
    } else {
        console.log("email OK");
    }

    //validate password
    if(password.length === 0) {
        document.getElementById("passworderror").innerHTML = "Please choose a password";
        areBothValid = false;
    } else {
        console.log("password OK");
    }

    return areBothValid;
}