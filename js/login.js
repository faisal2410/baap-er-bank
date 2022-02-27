const loginSubmit=document.getElementById('login-submit');
loginSubmit.addEventListener('click', function(){
  const userEmail= document.getElementById('user-email');
   const userEmailText=userEmail.value;  
  const userPassword=document.getElementById('user-password');
  const userPasswordText=userPassword.value;

  if(userEmailText=="mern@lead.com" && userPasswordText=="1234"){
    window.location.href = "banking.html"
  }
  
})

// const loginSubmit= document.getElementById('login-submit')
// // console.log(loginSubmit);
// loginSubmit.addEventListener('mouseout',function(){
//     // const emailField=document.getElementById('user-email')
//     // const emailFieldText=emailField.value
//     const loginText=document.getElementById('login-text')
//     const loginTextValue= loginText.innerText=" Submit button mouseover"

//     console.log(loginTextValue);
// })


// const loginDisplay= loginText.innerText=""
// console.log(loginDisplay);
// document.getElementById('login-submit').addEventListener('click', function() {
   
//     // Get user email
//     const emailField = document.getElementById('user-email');
//     const userEmail = emailField.value;
//     // Get user Password

//     const passwordField = document.getElementById('user-password');
//     const userPassword = passwordField.value;

//     // Check Email and Password

//     if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
//         window.location.href = "banking.html"
//     }
// })