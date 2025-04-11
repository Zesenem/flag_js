// 1 - acrescentar uma seccao de filtros, para poder filtrar for ja lidos, nao lidos, todos, e por titulo de Author 
// 2 - dentro de cada card, acrescentar um botao de delete para apagar o respectivo livro
// 3 - ao clicar no thmbnail do livro, mostrar popup com imagem grande



import { books } from "./data.js";

// get all books

export const getBooks = () => books;

// read books

export const getReadBooks = () => books.filter((book) => book.alreadyRead);

// unread books

export const getUnreadBooks = () => books.filter((book) => !book.alreadyRead);

