const title = document.getElementById("bookName");
const author = document.getElementById("bookAuthor");
const releaseYear = document.getElementById("releaseYear");
const pages = document.getElementById("pages");

const addBook = document.getElementById("addBook");
const booksStorage = document.getElementById("booksStorage");

const bookForm = document.getElementById("bookForm");

const cover = document.getElementById("cover");

addBook.addEventListener("click", function (event) {
  event.preventDefault();
  addBookToLibrary();
  showBooks();
});

const myLibrary = [];
bookOrder = 0;

function book(title, author, releaseYear, pages) {
  this.title = title;
  this.author = author;
  this.releaseYear = releaseYear;
  this.pages = pages;
}

function addBookToLibrary() {
  if (!(title.value && author.value && releaseYear.value && pages.value)) {
    alert('Fill the form. \nClick "Add new book" button to add it to your library');
  } else {
    myLibrary.push(new book(title.value, author.value, releaseYear.value, pages.value));
  }
}

function showBooks() {
  if (myLibrary.length !== 0) {
    const book = myLibrary[myLibrary.length - 1];
    const card = document.createElement("div");
    card.classList.add(`card`);
    card.classList.add(`${bookOrder++}`);
    const cardInfo = document.createElement("p");
    cardInfo.textContent = `${book.title} by ${book.author} released on ${book.releaseYear} with ${book.pages} pages`;
    // const bookCover = document.createElement("img");
    card.appendChild(cardInfo);
    booksStorage.appendChild(card);
  }
}
