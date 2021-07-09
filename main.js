
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.value.trim();
    const passwordValue = password.value.trim();
    const password2value = password2.value.trim();

}
    if(usernameValue  === '') {

        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        // add success class
        setsuccessFor(username);
    }

if(emailValue === "") {
    setErrorFor(email, 'Email cannot be blank');
} else if(!isEmail(emailValue)){
    setErrorFor(email, 'Email is not valid');
} else {
    setsuccessFor(email)
    }
}

if(passwordValue === ''){
    setErrorFor(password, 'Password cannot be blank');
} else {
    setsuccessFor(email)
}

if(password2Value === ''){
    setErrorFor(password2, 'Password2 cannot be blank');
} else if (passwordValue ! === passwordValue2) {
    setErrorFor(password2,'passwordValue2') {
        setErrorFor(password2 'password2 does not match');
} else {
    setsuccessFor(password)
}
function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}
function setsuccessFor(input,message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([\]\\.,;'!@#$%^&^&(*){}|@+(email).test(email)
}






const toggleModal =() => {
    document.querySelector('.modal')
        .classList.toggle('modal--hidden');
};

document.querySelector('#show-modal')
    .addEventListener('click', toggleMoadal);
document.querySelector('#learn-more')
    .addEventListener('click',toggleModal)


// variables  login1- login2
const loginOne = document.querySelector ('#login1');
const loginTwo = document.querySelector ('#login2');
const loginBtn = document.querySelector ('#loginbtn');

//event listener  login1- login2
loginBtn.addEventListener ('click', () => {
    loginOne.classList.add('hidden')
    loginTwo.classList.remove('hidden')
});


