let username = document.querySelector("#username");
let password = document.querySelector("#password");
// let feedback = document.querySelector("#feedback");

username.focus();

username.addEventListener("blur", (ev) => check(ev, 7), false);
password.addEventListener("blur", (ev) => check(ev, 9), false);

function check(ev, min) {
    
    let validateCamp = ev.target;
    let divError = validateCamp.nextElementSibling;

    if(validateCamp.value.length < min) {
        divError.textContent = `Should be at least ${min} characters long.`;
        divError.style.color = "red";
    } else {
        divError.textContent = "";
    }
    
}
