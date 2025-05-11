/**
 * Classe représentant une bibliothèque
 * @class Library
 */
export class Library {
    /**
     * Crée une instance de Library
     */
    constructor() {
      this.books = []; // Tableau pour stocker les livres
    }
  
    /**
     * Ajoute un livre à la bibliothèque
     * @param {Book} book - Le livre à ajouter
     */
    addBook(book) {
      this.books.push(book);
    }
  
    /**
     * Affiche tous les livres de la bibliothèque dans la console
     * @returns {Array} Tableau contenant les détails de tous les livres
     */
    listBooks() {
      const booksList = [];
      if (this.books.length === 0) {
        console.log("La bibliothèque est vide.");
        return ["La bibliothèque est vide."];
      }
      
      console.log("Liste des livres dans la bibliothèque :");
      this.books.forEach((book, index) => {
        const details = `${index + 1}. ${book.getDetails()}`;
        console.log(details);
        booksList.push(details);
      });
      
      return booksList;
    }
  
    /**
     * Recherche un livre par son titre
     * @param {string} title - Le titre du livre à rechercher
     * @returns {string} Les détails du livre ou un message d'erreur
     */
    findBookByTitle(title) {
      const foundBook = this.books.find(book => book.title === title);
      
      if (foundBook) {
        return foundBook.getDetails();
      } else {
        return `Aucun livre avec le titre "${title}" n'a été trouvé.`;
      }
    }
  }