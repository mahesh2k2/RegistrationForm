const MyForm = document.querySelector('form');

// get elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pwd');
const confirmPasswordInput = document.getElementById('pwd2');
const checkboxInput = document.getElementById('accept');

// get Error 'span' elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');


// immediately validate the input fields
nameInput.addEventListener('input',()=>{
    nameError.textContent = '';
    nameError.style.display = 'none';
});

emailInput.addEventListener('input',()=>{
    emailError.textContent = '';
    emailError.style.display = 'none';
});

passwordInput.addEventListener('input',()=>{
    passwordError.textContent = '';
    passwordError.style.display = 'none';
});

confirmPasswordInput.addEventListener('input',()=>{
//check password and confirm password are match otherwise throw an error
    if(passwordInput.value === confirmPasswordInput.value){
        confirmPasswordError.textContent = '';
        confirmPasswordError.style.display = 'none';
    }
});

// form submit acction
MyForm.addEventListener("submit",(e)=>{
     //reset error messages while submit
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    e.preventDefault();
    //to stop the default action
    
 
    //validate the all inputs
    if(nameInput.value  === ''){
        nameError.textContent = " name is required";
        nameError.style.display = 'block';
        nameError.classList.add('errorMsg');
        nameInput.focus();
        e.preventDefault();
    }else if((/\s/g.test(nameInput.value))){
        nameError.textContent = "name cannot contain whitespace";
        nameError.style.display = 'block';
        nameError.classList.add('errorMsg');
        nameInput.focus();
        e.preventDefault();
    }else if(!(/^[a-zA-Z]*$/.test(nameInput.value))){
        nameError.textContent = "name cannot contain symbols";
        nameError.style.display = 'block';
        nameError.classList.add('errorMsg');
        nameInput.focus();
        e.preventDefault();
    }

    //validate 
    if(emailInput.value ===''){
        emailError.textContent = "email is required";
        emailError.style.display = 'block';
        emailError.classList.add('errorMsg');
        emailInput.focus();
        e.preventDefault();
    }else if(!isValidEmail(emailInput.value)){
        emailError.textContent = "invalid email ";
        emailError.style.display = 'block';
        emailError.classList.add('errorMsg');
        emailInput.focus();
        e.preventDefault();
        //trim method removes all white spaces in the string
    }
    //password validation
    if(passwordInput.value === ''){
        passwordError.textContent = "password is required";
        passwordError.style.display = 'block';
        passwordError.classList.add('errorMsg');
        passwordInput.focus();
        e.preventDefault();
    }else if((passwordInput.value).length < 8){
        passwordError.textContent = "password atleast 8 characters";
        passwordError.style.display = 'block';
        passwordError.classList.add('errorMsg');
        passwordInput.focus();
        e.preventDefault();
    }else if(confirmPasswordInput.value ===''){
        confirmPasswordError.textContent = "confirm your password";
        confirmPasswordError.style.display = 'block';
        passwordError.classList.add('errorMsg');
        confirmPasswordInput.focus();
        e.preventDefault();

    }else if(confirmPasswordInput.value !== passwordInput.value){
        confirmPasswordError.textContent = "password does not match";
        confirmPasswordError.style.display = 'block';
        passwordError.classList.add('errorMsg');
        confirmPasswordInput.focus();
        e.preventDefault();
    }
    
    // email validate function
    function isValidEmail(email){
        const Emailvalidate = /\S+@\S+\.\S+/;
        return Emailvalidate.test(email);
    }

    console.log("Name :",nameInput.value);
    console.log("Email :",emailInput.value);
    console.log("password is :",passwordInput.value);
    console.log("checkbox is checked :",checkboxInput.checked);
    // rerturn true if accept the terms and conditions otherwise false

});
