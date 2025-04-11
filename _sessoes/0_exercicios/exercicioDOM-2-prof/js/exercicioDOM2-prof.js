const grid = document.getElementById("grid");

const allBooks = getBooks();

grid.innerHTML = allBooks
  .map(
    (book) => `
    <article class="card">
        <h2 class="book-title">${book.title}</h2>
        <h3 class="book-author">${book.author}</h3>
        <img src="${book.imageUrl}" alt="${book.title}" class="book-image">
        <p class="read-status">Already read: <span>${book.alreadyRead ? "✔️" : "❌"}</span></p>
    </article>
`
  )
  .join("");
