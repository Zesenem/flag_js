let books = [
  {
    title: "Angular Com Typescript",
    author: "Yakov Fain",
    alreadyRead: true,
    imageUrl: "livros/angular.jpg",
  },
  {
    title: "Blockchain com JS",
    author: "Bina Ramamurthy",
    alreadyRead: false,
    imageUrl: "livros/blockchain.jpg",
  },
  {
    title: "Deep Learning com JS",
    author: "Various Authors",
    alreadyRead: true,
    imageUrl: "livros/deeplearning.jpg",
  },
  {
    title: "Jow of Javascript",
    author: "Luis Ascencio",
    alreadyRead: false,
    imageUrl: "livros/joj.jpg",
  },
  {
    title: "React Hooks in Action",
    author: "John Larsen",
    alreadyRead: true,
    imageUrl: "livros/reacthooks.jpg",
  },
];

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
