// event listener (hoisting)

let username = document.querySelector("#username");
let feedback = document.querySelector("#feedback");

username.addEventListener("blur", checkUsername, false); // event listener (hoisting)

// username.addEventListener('blur' ,  () => { // event listener (non-hoisting)
//     if (username.value.length < 5) {
//         feedback.textContent = "Username must be at least 5 characters long.";
//         feedback.style.color = "red";
//     } else {
//         feedback.textContent = "";
//     }
// }, false);

function checkUsername() {
  if (username.value.length < 5) {
    feedback.textContent = "Username must be at least 5 characters long.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "";
  }
}
