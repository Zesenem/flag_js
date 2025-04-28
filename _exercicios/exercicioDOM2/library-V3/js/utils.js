import { books } from "./data.js";

let myBooks = [...books];	

export const getBooks = () => myBooks;
export const getReadBooks = () => myBooks.filter((b) => b.alreadyRead);
export const getUnreadBooks = () => myBooks.filter((b) => !book.alreadyRead);

export const addBook = (book) => myBooks.push(book);
export const deleteBook = (index) => myBooks.splice(index, 1);
export const updateBook = (index, updatedFields) => {
  Object.assign(myBooks[index], updatedFields);
};
