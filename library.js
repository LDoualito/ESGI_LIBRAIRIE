export class Library {
  constructor() {
    this.books = []; // liste des livres
  }

  addBook(book) {
    this.books.push(book);
  }

  // Affiche tous les livres 
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

  // recherche un livre par titre
  findBookByTitle(title) {
    const foundBook = this.books.find(book => book.title === title);
    
    if (foundBook) {
      return foundBook.getDetails();
    } else {
      return `Aucun livre avec le titre "${title}" n'a été trouvé.`;
    }
  }
}