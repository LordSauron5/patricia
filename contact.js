const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const country = document.getElementById('country');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    //e.preventDefault();

    validate();
});


function validate(){
    // get the values from the inputs

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const countryValue = country.value.trim();
    const messageValue = message.value.trim();
    if (usernameValue ==='') {
        //show error
        //add error class
        setErrorFor(username, 'Full Name cannot be blank');
    } else {
        //add success class
        setSucccessFor(username);
    }
    if (email ==='') {
        //show error
        //add error class
        setErrorFor(email,'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Enter a valid email address')
    } else {
        //add success class
        setSucccessFor(email);
    }
 
    if (numberValue.length == 0) {
        setErrorFor(number, "Mobile Number cannot be blank")
    } else if (numberValue.length < 10){
        setErrorFor(number, "Mobile Number is not 10 characters")
    } else if (!isNumber(numberValue)){
        setErrorFor(number, 'Mobile Number is not a valid number')
    } else {
        //add success class
        setSucccessFor(number);
    }
    
        if (messageValue.length == 0) {
        setErrorFor(message, "Please type a message")
    } else {
        setSucccessFor(message);
    }

    if ( (usernameValue =='' || email =='' || !isEmail(emailValue) || numberValue.length == 0 || numberValue.length != 10 || !isNumber(numberValue) || messageValue.length == 0) ) {
        return false;
    } else {
        alert("Thank you for submitting the following details: \n"
        + "Full Name : " + usernameValue + "\n"
        + "Email : " + emailValue + "\n"
        + "Phone Number : " + numberValue + "\n"
        + "country : " + countryValue + "\n"
        + "Message : " + messageValue + "\n");
        return true;
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSucccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isNumber(number){
    return /^[0-9]\d{9}$/.test(number);
}

