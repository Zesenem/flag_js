export class Book {
  constructor({ title, author, alreadyRead = false, imageUrl = "", largeImageUrl = "" }) {
    const basePath = "livros/";
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
    this.imageUrl = imageUrl.startsWith(basePath) ? imageUrl : basePath + imageUrl;
    this.largeImageUrl = largeImageUrl.startsWith(basePath)
      ? largeImageUrl
      : basePath + largeImageUrl;
  }
}
