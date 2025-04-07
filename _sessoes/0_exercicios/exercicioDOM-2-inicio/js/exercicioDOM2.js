// primeira versao

// let listItems = document.querySelectorAll("section li");

// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   const li = listItems[i];
//   const readIcon = book.alreadyRead ? "✔️" : "❌";

//   li.innerHTML = `
//       <p class="book-title">${book.title}</p>
//       <h2 class="book-author">${book.author}</h2>
//       <img src="${book.imageUrl}" alt="${book.title}" class="book-image">
//       <p class="read-status">Already read: <span>${readIcon}</span></p>
//     `;

//   li.classList.add(book.alreadyRead ? "read" : "unread");
// }

// segunda versao com forEach e a criação de li's

const bookList = document.getElementById("book-list");

books.forEach((book) => {
  const li = document.createElement("li");
  const readIcon = book.alreadyRead ? "✔️" : "❌";
  li.innerHTML = `
        <p class="book-title">${book.title}</p>  
       <h2 class="book-author">${book.author}</h2>   
        <img src="${book.imageUrl}" alt="${book.title}" class="book-image">
        <p class="read-status">Already read: <span>${readIcon}</span></p>
     `;

  bookList.appendChild(li);
});




