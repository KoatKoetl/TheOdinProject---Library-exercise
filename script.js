// Bookd values
const title = document.getElementById("bookName");
const author = document.getElementById("bookAuthor");
const releaseYear = document.getElementById("releaseYear");
const pages = document.getElementById("pages");

// Buttons
const addBook = document.getElementById("addBook");
const clearCache = document.getElementById("clearCache");

// Storage of book cards
const booksStorage = document.getElementById("booksStorage");

// Form to fill with info about book
const bookForm = document.getElementById("bookForm");

// Image cover of book
const cover = document.getElementById("cover");

const myLibrary = [];
let bookOrder = 0;

// Click on button add book call all needed functions
addBook.addEventListener("click", function (event) {
  event.preventDefault();
  addBookToLibrary();
  showBooks();

  // Clear form only when all values are entered
  if (title.value && author.value && releaseYear.value && pages.value) {
    // Select all input elements from the form by id
    const inputElements = document.querySelectorAll("#bookName, #bookAuthor, #releaseYear, #pages");

    // Loop through all elements and set it's values to "" after clicking buttonn Add book
    inputElements.forEach((input) => {
      input.value = "";
    });
  }
});

clearCache.addEventListener("click", () => {
  myLibrary.length = 0;
  bookOrder = 0;
  // while (booksStorage.firstChild) {
  //   booksStorage.removeChild(booksStorage.lastChild);
  // }
  booksStorage.replaceChildren();
});

function book(title, author, releaseYear, pages) {
  this.title = title;
  this.author = author;
  this.releaseYear = releaseYear;
  this.pages = pages;
}
//Funcion to add
function addBookToLibrary() {
  //Check the form if it's empty then show alert otherwise push the values to array
  if (!(title.value && author.value && releaseYear.value && pages.value)) {
    alert('Fill the form. \nClick "Add new book" button to add it to your library');
  } else {
    myLibrary.push(new book(title.value, author.value, releaseYear.value, pages.value));
  }
}

function showBooks() {
  //Check if form insn't empty
  if (title.value && author.value && releaseYear.value && pages.value) {
    // Take last elemet from Array
    const book = myLibrary[myLibrary.length - 1];

    //Create a div that will be card with book and add a class to it
    const card = document.createElement("div");
    card.classList.add(`card`);
    card.classList.add(`${bookOrder++}`);

    //Create paragraph with all info about book
    const cardInfo = document.createElement("p");
    cardInfo.textContent = `${book.title} by ${book.author} released on ${book.releaseYear} with ${book.pages} pages`;

    // const bookCover = document.createElement("img");

    //Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.setAttribute("id", "remove-button");
    removeButton.setAttribute("onclick", "removeBook(this)");

    //Append card info and remove button on card
    card.appendChild(cardInfo);
    card.appendChild(removeButton);

    // Append card to div bookStorage on page
    booksStorage.appendChild(card);
  }
}

// Function that remove card by clicking on button
function removeBook(e) {
  e.parentElement.remove();
}
