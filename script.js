const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const accessKey = "84302c62706aa3233e71d42470102200";
var validateEmail = "";


const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }
    else{
        showSuccess(input)
    }
}

async function getEmail(url){
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function checkErrors(json){
    if(email.value === ""){
        showError(email, `Email is required`)
    }
    else if(!json.format_valid){
        showError(email, `${email.value} is not a valid format`);
    }
    else if(!json.smtp_check){
        showError(email, `This email does not exist`)
    }
    else{
        showSuccess(email);
    }
}

function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if(input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`)
        }
        else{
            showSuccess(input);
        }
    })
}

function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match");
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let url = 'http://apilayer.net/api/check?access_key=' + accessKey + '&email=' + email.value;

    checkRequired([username, password, password2]);
    getEmail(url).then(data => {
        checkErrors(data);
    })
    checkLength(username, 3, 20);
    checkLength(password, 6);
    checkLength(password2, 6);
    checkPasswordMatch(password, password2);
})