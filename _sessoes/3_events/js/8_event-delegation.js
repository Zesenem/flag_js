// Event delegations

// First Method

// let items = document.querySelectorAll("li");

// for (const item of items) {
//     item.addEventListener('click', deleteItem, false);
// }

// Second Method

let list = document.querySelector("ul");

list.addEventListener("click", deleteItem, false);

function deleteItem(ev) {
    
  let deleteLi = ev.target.parentElement;
  deleteLi.remove();

  //console.log(ev);

  // if (ev.target.nodeName === "EM") {
  //     ev.target.parentElement.parentElement.remove();
  // } else {
  //     ev.target.parentElement.remove();
  // }

  ev.preventDefault();
}
