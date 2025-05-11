import { Book } from './book.js';
import { Library } from './library.js';

// Création de la bibliothèque
const library = new Library();

document.addEventListener('DOMContentLoaded', () => {
  // Elements du DOM
  const addBookForm = document.getElementById('add-book-form');
  const searchBookForm = document.getElementById('search-book-form');
  const listBooksButton = document.getElementById('list-books-button');
  const booksListElement = document.getElementById('books-list');
  const searchResultElement = document.getElementById('search-result');

  // Ajout d'un livre
  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const title = document.getElementById('book-title').value.trim();
    const author = document.getElementById('book-author').value.trim();
    
    if (title && author) {
      const newBook = new Book(title, author);
      library.addBook(newBook);
      
      // Message de confirmation
      const successMessage = document.createElement('div');
      successMessage.textContent = `Le livre "${title}" a été ajouté à la bibliothèque.`;
      successMessage.className = 'success-message';
      addBookForm.appendChild(successMessage);
      
      // On efface le message après 3s
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
      
      addBookForm.reset();
    }
  });

  // Affichage des livres
  listBooksButton.addEventListener('click', () => {
    const booksList = library.listBooks();
    
    booksListElement.innerHTML = '';
    
    booksList.forEach(bookDetails => {
      const listItem = document.createElement('li');
      listItem.textContent = bookDetails;
      booksListElement.appendChild(listItem);
    });
  });

  // Recherche d'un livre
  searchBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const searchTitle = document.getElementById('search-title').value.trim();
    
    if (searchTitle) {
      const result = library.findBookByTitle(searchTitle);
      searchResultElement.textContent = result;
      searchResultElement.style.display = 'block';
    }
  });
});