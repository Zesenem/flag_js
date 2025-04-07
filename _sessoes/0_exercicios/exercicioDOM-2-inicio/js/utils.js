import { books } from "./data.js";

// get all books

export const getBooks = () => books;

// read books

export const getReadBooks = () => books.filter((book) => book.alreadyRead);

// unread books

export const getUnreadBooks = () => books.filter((book) => !book.alreadyRead);

