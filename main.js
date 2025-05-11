/**
 * Script principal pour la gestion de la bibliothèque
 */
import { Book } from './book.js';
import { Library } from './library.js';

// Création d'une instance de Library
const library = new Library();

// Attend que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
  // Récupération des éléments du DOM
  const addBookForm = document.getElementById('add-book-form');
  const searchBookForm = document.getElementById('search-book-form');
  const listBooksButton = document.getElementById('list-books-button');
  const booksListElement = document.getElementById('books-list');
  const searchResultElement = document.getElementById('search-result');

  // Gestion de l'ajout d'un livre
  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const title = document.getElementById('book-title').value.trim();
    const author = document.getElementById('book-author').value.trim();
    
    if (title && author) {
      const newBook = new Book(title, author);
      library.addBook(newBook);
      
      // Affichage d'un message de confirmation
      const successMessage = document.createElement('div');
      successMessage.textContent = `Le livre "${title}" a été ajouté à la bibliothèque.`;
      successMessage.className = 'success-message';
      addBookForm.appendChild(successMessage);
      
      // Effacement du message après 3 secondes
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
      
      // Réinitialisation du formulaire
      addBookForm.reset();
    }
  });

  // Gestion de l'affichage de tous les livres
  listBooksButton.addEventListener('click', () => {
    const booksList = library.listBooks();
    
    // Effacer la liste actuelle
    booksListElement.innerHTML = '';
    
    // Afficher les livres dans la liste
    booksList.forEach(bookDetails => {
      const listItem = document.createElement('li');
      listItem.textContent = bookDetails;
      booksListElement.appendChild(listItem);
    });
  });

  // Gestion de la recherche d'un livre
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