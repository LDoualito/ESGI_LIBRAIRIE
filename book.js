export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // retourne les détails du livre
  getDetails() {
    return `Titre : ${this.title} / Auteur : ${this.author}`;
  }
}