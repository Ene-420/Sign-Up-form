let password = document.getElementById("password");
let confirmPassword =document.getElementById("confirm-pwd");
let verificationMsg  = document.querySelector(".pwd-verification")

console.log(password);
window.addEventListener("mousedown", comparePassword);
//comparePassword();


function comparePassword(){
    if(password.value && confirmPassword.value){
        if(password.value === confirmPassword.value){
            verificationMsg.textContent = "\uD83D\uDDF8 Passwords Match";
            if(verificationMsg.classList.contains('invalid')){
                verificationMsg.classList.remove('invalid');
            }
            verificationMsg.classList.add('valid');
            password.classList.add('valid-password');
            if(password.classList.contains('password-invalid')){
                password.classList.remove('password-invalid');
                confirmPassword.classList.remove('password-invalid');
            }
            confirmPassword.classList.add('valid-password');
            verificationMsg.style.visibility= 'visible';
        }

        else{
            verificationMsg.textContent ="\u274C Passwords Do Not Match";
            if(verificationMsg.classList.contains('valid')){
                verificationMsg.classList.remove('valid');
            }
            verificationMsg.classList.add('invalid');
            verificationMsg.style.visibility ='visible';
            if(password.classList.contains('valid-password')){
                password.classList.remove('valid-password');
                confirmPassword.classList.remove('valid-password');
            }
            confirmPassword.classList.add('password-invalid');
            password.classList.add('password-invalid');
        }
    }

    else{
        if(verificationMsg.style.visibility == 'visible'){
            verificationMsg.style.visibility ="hidden";
        }

        if((password.classList.contains('password-invalid')) || (password.classList.contains('valid-password'))){
            if(password.classList.contains('valid-password')){
                password.classList.remove('valid-password');
                confirmPassword.classList.remove('valid-password');
            }

            else if(password.classList.contains('password-invalid')){
                password.classList.remove('password-invalid');
                confirmPassword.classList.remove('password-invalid');
            }
        }
    }
    
}