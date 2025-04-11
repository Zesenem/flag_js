// event loads

// window.addEventListener("load", Init, false);

document.addEventListener("DOMContentLoaded", init, false); // on top of most javascript files

function init() { // also add this to the top of the file and then create the logic inside
  let username = document.querySelector("#username");

  username.value = "test";

  username.focus();
}
