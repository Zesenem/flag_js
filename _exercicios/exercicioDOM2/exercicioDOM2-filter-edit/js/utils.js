// 1 - acrescentar uma seccao de filtros, para poder filtrar for ja lidos, nao lidos, todos, e por titulo de Author
// 2 - dentro de cada card, acrescentar um botao de delete para apagar o respectivo livro
// 3 - ao clicar no thumbnail do livro, abrir popup com imagem em grande

// get all books
const getBooks = () => books;

// read books
const getReadBooks = () => books.filter((book) => book.alreadyRead);

// unread books
const getUnreadBooks = () => books.filter((book) => !book.alreadyRead);
