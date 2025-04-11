/*
1 - esconder o form, e deixar visivel somente o botao NewItem
2 - Ao clicar no botao NewItem mostrar o form e esconder o botao
3 - escrevendo um novo produto e clicando no boto "Add", acrescentar novo item á lista, voltar a esconder o form e mostrar botao NovoItem
4 - ao clicar num item, verificar se tem a class 'complete', se tiver eliminar o item, senao aplicar a class complete, e mover para o final da lista
5 - apresentar no H2, inserindo dentro de uma tag <span> o numero de items por comprar
6 - ao fazer 'ctrl-z' ou 'cmd-z' desfazer apagamento do item
*/

document.addEventListener("DOMContentLoaded", function() {
  
    let newItemForm = document.getElementById("newItemForm");
    let newItemButton = document.getElementById("newItemButton");
    let showFormButton = document.getElementById("showForm");
    let itemDescription = document.getElementById("itemDescription");
    let itemList = document.querySelector("ul");
    let header = document.querySelector("h2");
  
    
    let deletedItems = [];
  
    newItemForm.classList.add("hide");
  
    function updateCount() {
      let items = itemList.querySelectorAll("li:not(.complete)");
      header.innerHTML = 'Buy groceries <span>' + items.length + '</span>';
    }
  
    updateCount();
  
    showFormButton.addEventListener("click", function() {
      newItemForm.classList.remove("hide");
      newItemButton.classList.add("hide");
      itemDescription.focus();
    });
  
    newItemForm.addEventListener("submit", function(e) {
      e.preventDefault();
      let text = itemDescription.value.trim();
      if (text !== "") {
        let li = document.createElement("li");
        li.textContent = text;
        li.addEventListener("click", listItemClick);
        itemList.appendChild(li);
        itemDescription.value = "";
        updateCount();
      }
      newItemForm.classList.add("hide");
      newItemButton.classList.remove("hide");
    });
  
    function listItemClick(e) {
      let li = this;
      if (li.classList.contains("complete")) {
        deletedItems.push(li);
        li.parentElement.removeChild(li);
      } else {
        li.classList.add("complete");
        itemList.appendChild(li);
      }

      updateCount();
    }
  
    let listItems = itemList.querySelectorAll("li");
    listItems.forEach(function(li) {
      li.addEventListener("click", listItemClick);
    });
  
    document.addEventListener("keydown", function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        if (deletedItems.length > 0) {
          let li = deletedItems.pop();
          itemList.appendChild(li);
          updateCount();
        }
      }
    });
  
  }); 

