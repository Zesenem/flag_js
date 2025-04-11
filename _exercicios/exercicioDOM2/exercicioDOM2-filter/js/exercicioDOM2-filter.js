const displayBooks = (filteredBooks) => {
  grid.innerHTML = filteredBooks
    .map(
      (book, index) => `
    <article class="card">
        <h2 class="book-title">${book.title}</h2>
        <h3 class="book-author">${book.author}</h3>
        <img src="${book.imageUrl}" alt="${book.title}" class="book-image" data-index="${index}">
        <p class="read-status">Already read: <span>${book.alreadyRead ? "✔️" : "❌"}</span></p>
        <button class="delete-btn" data-index="${index}">🗑️</button>
    </article>
  `
    )
    .join("");

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const bookIndex = event.target.dataset.index;
      deleteBook(bookIndex);
    });
  });

  document.querySelectorAll(".book-image").forEach((img) => {
    img.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      const book = filteredBooks[index];
      if (book) {
        openModal(book.largeImageUrl);
      }
    });
  });
};

const deleteBook = (index) => {
  books.splice(index, 1);
  displayBooks(getBooks());
};

const openModal = (imageUrl) => {
  const modal = document.getElementById("imageModal");
  const fullImage = document.getElementById("fullImage");
  modal.style.display = "block";
  fullImage.src = imageUrl;
};

const closeModal = () => {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
};

document.getElementById("closeModal").addEventListener("click", closeModal);

displayBooks(getBooks());

const statusFilter = document.getElementById("statusFilter");
const searchFilter = document.getElementById("searchFilter");
const applyFiltersButton = document.getElementById("applyFilters");

applyFiltersButton.addEventListener("click", () => {
  const status = statusFilter.value;
  const searchText = searchFilter.value.toLowerCase();

  let filteredBooks = getBooks();

  if (status === "read") {
    filteredBooks = getReadBooks();
  } else if (status === "unread") {
    filteredBooks = getUnreadBooks();
  }

  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText)
  );

  displayBooks(filteredBooks);
});
