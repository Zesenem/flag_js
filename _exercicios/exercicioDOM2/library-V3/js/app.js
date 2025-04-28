import { Book } from "./book.js";
import { books } from "./data.js";
import {
  getBooks,
  getReadBooks,
  getUnreadBooks,
  addBook,
  deleteBook,
  updateBook,
} from "./utils.js";

const grid = document.getElementById("grid");
const imageModal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");
const closeModalBtn = document.getElementById("closeModal");
const editModal = document.getElementById("editModal");
const closeEditModalBtn = document.getElementById("closeEditModal");
const addBookForm = document.getElementById("addBookForm");
const editBookForm = document.getElementById("editBookForm");
const statusFilter = document.getElementById("statusFilter");
const searchFilter = document.getElementById("searchFilter");
const applyFiltersButton = document.getElementById("applyFilters");
const toggleAddBookBtn = document.getElementById('toggleAddBookBtn');
const addBookSection = document.getElementById('addBookSection');

let currentEditIndex = null;

const displayBooks = (list) => {
  grid.innerHTML = list
    .map((book, originalIndex) => {
      const { title, author, imageUrl, alreadyRead } = book;
      return `
      <article class="card">
        <h2>${title}</h2>
        <h3>${author}</h3>
        <img src="${imageUrl}" alt="${title}" data-index="${originalIndex}" class="book-image" />
        <p>Já lido: <span>${alreadyRead ? "✔️" : "❌"}</span></p>
        <div class="actions">
          <button class="edit-btn" data-index="${originalIndex}">Editar</button>
          <button class="delete-btn" data-index="${originalIndex}">Excluir</button>
        </div>
      </article>`;
    })
    .join("");
};

const refresh = () => {
  const all = getBooks();
  displayBooks(all);
};

applyFiltersButton.addEventListener("click", () => {
  const status = statusFilter.value;
  const term = searchFilter.value.toLowerCase();
  let list = getBooks();

  if (status === "read") list = getReadBooks();
  else if (status === "unread") list = getUnreadBooks();

  list = list.filter(
    ({ title, author }) => title.toLowerCase().includes(term) || author.toLowerCase().includes(term)
  );
  displayBooks(list);
});

toggleAddBookBtn.addEventListener('click', () => {
  const isHidden = addBookSection.classList.toggle('hidden');
  toggleAddBookBtn.textContent = isHidden
    ? 'Adicionar Livro'
    : 'Fechar Formulário';
});

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const { newTitle, newAuthor, newImageUrl, newLargeImageUrl, newAlreadyRead } = form.elements;

  const book = new Book({
    title: newTitle.value,
    author: newAuthor.value,
    alreadyRead: newAlreadyRead.checked,
    imageUrl: newImageUrl.value,
    largeImageUrl: newLargeImageUrl.value,
  });
  addBook(book);
  form.reset();
  refresh();
});

grid.addEventListener("click", (e) => {
  const editBtn = e.target.closest(".edit-btn");
  const deleteBtn = e.target.closest(".delete-btn");
  const img = e.target.closest(".book-image");

  if (deleteBtn) {
    deleteBook(deleteBtn.dataset.index);
    refresh();
  } else if (editBtn) {
    currentEditIndex = editBtn.dataset.index;
    const book = books[currentEditIndex];
    const { title, author, alreadyRead } = book;
    editBookForm.editTitle.value = title;
    editBookForm.editAuthor.value = author;
    editBookForm.editAlreadyRead.checked = alreadyRead;
    editModal.style.display = "block";
  } else if (img) {
    fullImage.src = books[img.dataset.index].largeImageUrl;
    imageModal.style.display = "block";
  }
});

editBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { editTitle, editAuthor, editAlreadyRead } = e.target.elements;
  updateBook(currentEditIndex, {
    title: editTitle.value,
    author: editAuthor.value,
    alreadyRead: editAlreadyRead.checked,
  });
  editModal.style.display = "none";
  refresh();
});

closeModalBtn.addEventListener("click", () => (imageModal.style.display = "none"));
closeEditModalBtn.addEventListener("click", () => (editModal.style.display = "none"));

refresh();
