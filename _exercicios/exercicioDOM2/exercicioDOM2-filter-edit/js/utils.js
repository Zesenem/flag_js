import { books } from "./data.js";

export const getBooks = () => books;
export const getReadBooks = () => books.filter((b) => b.alreadyRead);
export const getUnreadBooks = () => books.filter((b) => !book.alreadyRead);

export const addBook = (book) => books.push(book);
export const deleteBook = (index) => books.splice(index, 1);
export const updateBook = (index, updatedFields) => {
  Object.assign(books[index], updatedFields);
};
