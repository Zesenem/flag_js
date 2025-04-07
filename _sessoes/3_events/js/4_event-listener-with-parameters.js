// event listener with parameters

let username = document.querySelector("#username");
let feedback = document.querySelector("#feedback");

username.focus();

// username.addEventListener("blur", check, false);

// function check() {
//   checkUsername(5); // event listener with parameters
// }

username.addEventListener("blur", () => check(5), false);

function check(min) {
  if (username.value.length < min) {
    feedback.textContent = "Username must be at least " + min + " characters long.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "";
  }
}
