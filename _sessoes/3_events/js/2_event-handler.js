let username = document.querySelector("#username");
let feedback = document.querySelector("#feedback");

username.onblur = function () { // event handler (non-hoisting)
    if (username.value.length < 5) {
        feedback.textContent = "Username must be at least 5 characters long.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "";
    }
}

