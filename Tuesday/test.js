let validation =()=>{
    var name = document.register.field1;
    var email = document.register.field2;
    var telephone = document.register.field3;
    var regarding = document.register.field4;
    var message = document.register.field5;

    if(name.value == ""){
        name.style.border = "2px solid red";
    }
    let min = 4;
    if (name.value.length < min){
        alert("Please put a name with more than four letters.");
        name.style.border = "2px solid red";
        return false;
    }
    var letters =/^[a-zA-Z].*[\s\.]*$/;
    if (name.value.match(letters)){
        return true;
    }
    else {
        alert("Please dont include numbers in your name");
        name.style.border = "2px solid red";
        return false;
    }
    if(email.value == ""){
        email.style.border = "2px solid red";
        email.focus();
    }
    let email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(email1)){
        return true;
    }
    else{
        alert("Invalid email, please input a valid email.");
    }
}