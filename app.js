const myLibrary = [];

// Initializing user input variables 
const submitButton = document.querySelector("#submitButton");
const bookNameInput = document.querySelector("#bookName");
const authorNameInput = document.querySelector("#authorName");
const numPagesInput = document.querySelector("#numPages");
const readOrNot = document.querySelector("#readOrNot");

// Initializing display variable

const display = document.querySelector("#booksDisplay");

function Book(title, author, numPages, readOrNot) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readOrNot = readOrNot;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.readOrNot}`
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}


function displayMyLibrary() {
  myLibrary.forEach(book => {
    let newItemDiv = document.createElement("div");
    newItemDiv.classList.add("bookCard");
    newItemDiv.innerHTML = book.info();
    display.appendChild(newItemDiv);

  })

  
}

submitButton.addEventListener("click", () => {
  let newBook = new Book(bookNameInput.value, authorNameInput.value, Number(numPagesInput.value), readOrNot.value);
  addBookToLibrary(newBook);
  console.table(myLibrary);
  display.innerHTML = null;
  displayMyLibrary()
  
  
})



const stalker = new Book("Stalker", "Tarkovsky", 345, "not read yet");
const stalker2 = new Book("Stalker 2", "Tarkovsky", 422, "not read yet");
const survived = new Book("Survived", "Sam Sayonara Simon", 300, "read");
const survived2 = new Book("Survived2", "Jon Jones", 440, "read");

myLibrary.push(stalker, stalker2, survived, survived2);

displayMyLibrary();






