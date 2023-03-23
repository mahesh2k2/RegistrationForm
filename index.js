const MyForm = document.querySelector('form');

// get elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('pwd');
const confirmPasswordInput = document.getElementById('pwd2');
const checkboxInput = document.getElementById('accept');
const eyeButton = document.getElementById("eye-icon");

// get Error 'span' elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

//hide and show password  
eyeButton.addEventListener('click',showPass);
function showPass(){
    let getClass = this.children[0].classList.value;
    
    if(getClass == "fa-sharp fa-solid fa-eye"){
        this.children[0].classList.value = "fa-sharp fa-solid fa-eye-slash"
        confirmPasswordInput.type = "password"
    }else{
        this.children[0].classList.value = "fa-sharp fa-solid fa-eye"
        confirmPasswordInput.type = "text"
    }
};

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

// form submit action
MyForm.addEventListener("submit",(e)=>{
     //reset error messages while submit
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    e.preventDefault();
    //to stop the default action
    if(validateForm()){
        alert("form submitted successfully");
        nameInput.value ='';
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
    }
    else{
        alert("please fill out all fields to proceed");
    }
});

// email validate function
function isValidEmail(email){
    const Emailvalidate = /\S+@\S+\.\S+/;
    return Emailvalidate.test(email);
}

function validateForm(){
    
    //validate the all inputs
    if(nameInput.value  === ''){
        nameError.textContent = " name is required";
        nameError.style.display = 'block';
        nameError.classList.add('errorMsg');
        nameInput.focus();
        return false;
    }else if((/\s/g.test(nameInput.value))){
        nameError.textContent = "name cannot contain whitespace";
        nameError.style.display = 'block';
        nameError.classList.add('errorMsg');
        nameInput.focus();
        return false;
    }else if(!(/^[a-zA-Z]*$/.test(nameInput.value))){
        nameError.textContent = "name cannot contain symbols";
        nameError.style.display = 'block';
        nameError.classList.add('errorMsg');
        nameInput.focus();
        return false;
    }

    //email validation 
    if(emailInput.value ===''){
        emailError.textContent = "email is required";
        emailError.style.display = 'block';
        emailError.classList.add('errorMsg');
        emailInput.focus();
        return false;
    }else if(!isValidEmail(emailInput.value)){
        emailError.textContent = "invalid email ";
        emailError.style.display = 'block';
        emailError.classList.add('errorMsg');
        emailInput.focus();
        return false;
    }
    //password validation
    if(passwordInput.value === ''){
        passwordError.textContent = "password is required";
        passwordError.style.display = 'block';
        passwordError.classList.add('errorMsg');
        passwordInput.focus();
        return false;
    }else if((passwordInput.value).length < 8){
        passwordError.textContent = "password atleast 8 characters";
        passwordError.style.display = 'block';
        passwordError.classList.add('errorMsg');
        passwordInput.focus();
        return false;
    }else if(confirmPasswordInput.value ===''){
        confirmPasswordError.textContent = "confirm your password";
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.classList.add('errorMsg');
        confirmPasswordInput.focus();
        return false;

    }else if(confirmPasswordInput.value !== passwordInput.value){
        confirmPasswordError.textContent = "password does not match";
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.classList.add('errorMsg');
        confirmPasswordInput.focus();
        return false;
    }
    return true;
};
