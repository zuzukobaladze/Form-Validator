var submitButton = document.getElementById("button");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var val = "";
var val2 = "";
var realPass = "";
var realPass2 = "";

username.addEventListener("keypress", function() {
    let textInArr = username.value.split("");
    let error = document.getElementById("errorMsg1");
    if(textInArr.length <= 3 && textInArr.length != 0){
        error.innerHTML = "Username must be at least 4 characters long"
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = "hidden";
    }
})

email.addEventListener("keypress", function() {
    let textInArr = email.value.split("");
    let error = document.getElementById("errorMsg2");
    if(!textInArr.includes("@")){
        error.innerHTML = "Email is missing '@' character"
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = "hidden";
    }
})

password.onkeydown = function(event){
    let error = document.getElementById("errorMsg3");
    if((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || event.keyCode >= 48 && event.keyCode <= 57){
        val += String.fromCharCode(event.keyCode);
        console.log(event.keyCode);
        console.log(val);
    }
    if(event.keyCode === 8){
        val = val.substring(0, val.length - 1);
    }
    realPass = val;
    this.value = val.replace(/./g,"*");
    if(realPass.length < 8 && realPass.length != 0){
        error.innerHTML = "Password must be at least 8 characters long";
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = "hidden";
    }
    /*
    let hasUp = false;
    let hasLow = false;
    let arr = realPass.split("");
    for(let i = 0; i < realPass.length; i++){
        if(arr[i] == arr[i].toUpperCase){
            hasUp = true;
        }
        else if(arr[i] == arr[i].toLowerCase){
            hasLow = true;
        }
    }
    let nums = val.match(/\d+/g);
    console.log(nums);

    if(!nums && !hasLow && !hasUp){
        error.innerHTML = "Lowercase, uppercase and digit missing";
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = "hidden";
    }

    if(!nums && !hasLow && hasUp){
        error.innerHTML = "Password must contain an uppercase";
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = "hidden";
    }

    if(!nums && !hasUp && hasLow){
        error.innerHTML = "Password must contain a lowercase";
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = "hidden";
    }

    if(!hasLow && !hasUp && nums){
        error.innerHTML = "Password must contain a digit";
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = "hidden";
    }*/
    return false;
}

password2.onkeydown = function(event){
    let error = document.getElementById("errorMsg4");
    if((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || event.keyCode >= 48 && event.keyCode <= 57){
        val2 += String.fromCharCode(event.keyCode);
    }
    if(event.keyCode === 8){
        val2 = val2.substring(0, val2.length - 1);
    }
    realPass2 = val2;
    this.value = val2.replace(/./g,"*");
    if(realPass != realPass2 && realPass2.length != 0){
        error.innerHTML = "You must confirm your password";
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = "hidden";
    }
    return false;
}

submitButton.addEventListener("click", function(event) {
    if(document.getElementById("errorMsg1").style.visibility != "visible" && document.getElementById("errorMsg2").style.visibility != "visible" && document.getElementById("errorMsg3").style.visibility != "visible" && document.getElementById("errorMsg4").style.visibility != "visible"){
        alert("You have been registered");
    }
    else alert("Please meet all the requirements below")
    event.preventDefault();
})