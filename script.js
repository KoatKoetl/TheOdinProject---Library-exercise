// Books values
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
  books.addBookToLibrary();
  books.showBooks();

  // Clear form only when all values are entered
  books.clearAfterSubmit();
});

clearCache.addEventListener("click", () => {
  // Clear the Array with books
  myLibrary.length = 0;
  // Set order counter from start
  bookOrder = 0;
  // Delete all child from book storage div
  booksStorage.replaceChildren();
});

class books {
  constructor(title, author, releaseYear, pages) {
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear;
    this.pages = pages;
  }

  static addBookToLibrary() {
    if (!(title.value && author.value && releaseYear.value && pages.value)) {
      alert('Fill the form. \nClick "Add new book" button to add it to your library');
    } else {
      myLibrary.push(new books(title.value, author.value, releaseYear.value, pages.value));
    }
  }

  static clearAfterSubmit() {
    if (title.value && author.value && releaseYear.value && pages.value) {
      // Select all input elements from the form by id
      const inputElements = document.querySelectorAll("#bookName, #bookAuthor, #releaseYear, #pages");

      // Loop through all elements and set it's values to "" after clicking buttonn Add book
      inputElements.forEach((input) => {
        input.value = "";
      });
    }
  }

  static showBooks() {
    // Take last elemet from Array
    const book = myLibrary[myLibrary.length - 1];

    //Create a div that will be card with book and add a class to it
    const card = document.createElement("div");
    card.classList.add(`card`);
    card.classList.add(`${bookOrder++}`);

    //Create paragraph with all info about book
    const cardInfo = document.createElement("p");
    cardInfo.textContent = `\"${book.title}\" by ${book.author}. Released on ${book.releaseYear}. Pages:${book.pages}`;

    // const bookCover = document.createElement("img");

    //Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("id", "remove-button");
    removeButton.setAttribute("onclick", "removeBook(this)");

    //Add read status button
    const readStatus = document.createElement("button");
    readStatus.textContent = "In read";
    readStatus.setAttribute("id", "read-status");
    readStatus.setAttribute("class", "in-read");

    //Event listener to change read-status by click on button
    readStatus.addEventListener("click", () => {
      if (readStatus.textContent === "In read") {
        readStatus.textContent = "Already read";
        readStatus.setAttribute("class", "already-read");
      } else {
        readStatus.textContent = "In read";
        readStatus.setAttribute("class", "in-read");
      }
    });

    //Append card info and remove button on card
    card.appendChild(cardInfo);
    card.appendChild(removeButton);
    card.appendChild(readStatus);

    // Append card to div bookStorage on page
    booksStorage.appendChild(card);
  }
}

// Function that remove card by clicking on button
function removeBook(e) {
  e.parentElement.remove();
}
