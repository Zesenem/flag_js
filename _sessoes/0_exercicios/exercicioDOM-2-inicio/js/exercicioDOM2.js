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
