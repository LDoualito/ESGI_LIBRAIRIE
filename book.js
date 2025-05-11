/**
 * Classe représentant un livre
 * @class Book
 */
export class Book {
    /**
     * Crée une instance de Book
     * @param {string} title - Le titre du livre
     * @param {string} author - L'auteur du livre
     */
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    /**
     * Retourne les détails du livre sous forme de chaîne formatée
     * @returns {string} Les détails du livre
     */
    getDetails() {
      return `Titre : ${this.title} / Auteur : ${this.author}`;
    }
  }