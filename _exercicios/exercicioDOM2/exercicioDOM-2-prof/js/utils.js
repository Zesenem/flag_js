// get all books

const getBooks = () => books;

// read books

const getReadBooks = () => books.filter((book) => book.alreadyRead);

// unread books

const getUnreadBooks = () => books.filter((book) => !book.alreadyRead);
