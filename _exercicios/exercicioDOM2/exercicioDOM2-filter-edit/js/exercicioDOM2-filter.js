const grid = document.getElementById("grid");
const modal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");
const closeModalBtn = document.getElementById("closeModal");

const editModal = document.getElementById("editModal");
const closeEditModalBtn = document.getElementById("closeEditModal");
const editBookForm = document.getElementById("editBookForm");
const editTitle = document.getElementById("editTitle");
const editAuthor = document.getElementById("editAuthor");
const editAlreadyRead = document.getElementById("editAlreadyRead");

const statusFilter = document.getElementById("statusFilter");
const searchFilter = document.getElementById("searchFilter");
const applyFiltersButton = document.getElementById("applyFilters");

let currentEditIndex = null;

const displayBooks = (filteredBooks) => {
  grid.innerHTML = filteredBooks
    .map(
      ({ title, author, imageUrl, alreadyRead, originalIndex }) => `
      <article class="card">
          <h2 class="book-title">${title}</h2>
          <h3 class="book-author">${author}</h3>
          <img src="${imageUrl}" alt="${title}" class="book-image" data-index="${originalIndex}">
          <p class="read-status">Already read: <span>${alreadyRead ? "✔️" : "❌"}</span></p>
          <div class="card-actions">
            <button class="edit-btn" data-index="${originalIndex}">✏️ Edit</button>
            <button class="delete-btn" data-index="${originalIndex}">🗑️ Delete</button>
          </div>
      </article>
    `
    )
    .join("");
};

const deleteBook = (originalIndex) => {
  books.splice(originalIndex, 1);

  displayBooks(getBooks().map((book, index) => ({ ...book, originalIndex: index })));
};

const openModal = (imageUrl) => {
  modal.style.display = "block";
  fullImage.src = imageUrl;
};

const closeModal = () => {
  modal.style.display = "none";
};

const openEditModal = (book) => {
  currentEditIndex = book.originalIndex;
  editTitle.value = book.title;
  editAuthor.value = book.author;
  editAlreadyRead.checked = book.alreadyRead;
  editModal.style.display = "block";
};

const closeEditModal = () => {
  editModal.style.display = "none";
  currentEditIndex = null;
};

closeModalBtn.addEventListener("click", closeModal);
closeEditModalBtn.addEventListener("click", closeEditModal);

grid.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".delete-btn");
  const editBtn = event.target.closest(".edit-btn");
  const bookImg = event.target.closest(".book-image");

  if (deleteBtn) {
    const origIndex = deleteBtn.dataset.index;
    deleteBook(origIndex);
  } else if (editBtn) {
    const origIndex = editBtn.dataset.index;
    const book = books[origIndex];
    if (book) {
      openEditModal({ ...book, originalIndex: origIndex });
    }
  } else if (bookImg) {
    const origIndex = bookImg.dataset.index;
    const book = books[origIndex];
    if (book) {
      openModal(book.largeImageUrl);
    }
  }
});

editBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (currentEditIndex === null) return;

  const updatedTitle = editTitle.value;
  const updatedAuthor = editAuthor.value;
  const updatedAlreadyRead = editAlreadyRead.checked;

  books[currentEditIndex] = {
    ...books[currentEditIndex],
    title: updatedTitle,
    author: updatedAuthor,
    alreadyRead: updatedAlreadyRead,
  };

  closeEditModal();

  displayBooks(getBooks().map((book, index) => ({ ...book, originalIndex: index })));
});

displayBooks(getBooks().map((book, index) => ({ ...book, originalIndex: index })));

applyFiltersButton.addEventListener("click", () => {
  const status = statusFilter.value;
  const searchText = searchFilter.value.toLowerCase();

  const allBooksWithIndex = getBooks().map((book, index) => ({ ...book, originalIndex: index }));
  let filteredBooks = allBooksWithIndex;

  if (status === "read") {
    filteredBooks = allBooksWithIndex.filter((book) => book.alreadyRead);
  } else if (status === "unread") {
    filteredBooks = allBooksWithIndex.filter((book) => !book.alreadyRead);
  }

  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText)
  );

  displayBooks(filteredBooks);
});
