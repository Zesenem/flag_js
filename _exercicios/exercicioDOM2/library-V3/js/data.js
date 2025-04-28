import { Book } from "./book.js";

export const books = [
  new Book({
    title: "TypeScript Quickly",
    author: "Yakov Fain",
    alreadyRead: true,
    imageUrl: "livros/typescript.png",
    largeImageUrl: "livros/typescriptGr.png",
  }),
  new Book({
    title: "Blockchain com JS",
    author: "Bina Ramamurthy",
    alreadyRead: false,
    imageUrl: "livros/blockchain.jpg",
    largeImageUrl: "livros/blockchainGr.png",
  }),
  new Book({
    title: "Deep Learning com JS",
    author: "Various Authors",
    alreadyRead: true,
    imageUrl: "livros/deeplearning.jpg",
    largeImageUrl: "livros/deeplearningGr.png",
  }),
  new Book({
    title: "Jow of Javascript",
    author: "Luis Ascencio",
    alreadyRead: false,
    imageUrl: "livros/joj.jpg",
    largeImageUrl: "livros/jojGr.png",
  }),
  new Book({
    title: "React Hooks in Action",
    author: "John Larsen",
    alreadyRead: true,
    imageUrl: "livros/reacthooks.jpg",
    largeImageUrl: "livros/reacthooksGr.png",
  }),
];
