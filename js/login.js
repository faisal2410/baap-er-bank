document.getElementById('login-submit').addEventListener('click', function(){
    // Get user email
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    // Get user Password

    const passwordField=document.getElementById('user-password');
    const userPassword=passwordField.value; 

    // Check Email and Password

    if(userEmail=='sontan@baap.com' && userPassword=='secret'){
       window.location.href="banking.html"
    }
})

