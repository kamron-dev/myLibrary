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
  // const newBook = new Book(book);
  myLibrary.push(book);
}

function createNewBook() {
  const newBook = new Book(`${bookNameInput.value}, ${authorNameInput.value}, ${numPagesInput.value}, ${readOrNot.value}`);
  return newBook;
}

function displayMyLibrary() {
  myLibrary.forEach(book => {
    let newItemDiv = document.createElement("div");
    let bookInfo = book.info();
    newItemDiv.classList.add("bookCard");
    newItemDiv.innerHTML = bookInfo;
    display.appendChild(newItemDiv);

  })

  
}



const stalker = new Book("Stalker", "Tarkovsky", 345, "not read yet");
const stalker2 = new Book("Stalker 2", "Tarkovsky", 422, "not read yet");
const survived = new Book("Survived", "Sam Sayonara Simon", 300, "read");

myLibrary.push(stalker, stalker2, survived);

displayMyLibrary();


// submitButton.addEventListener("click", () => {
//   addBookToLibrary(textInput.value)
// });



submitButton.addEventListener("click", () => {
  const newBook = createNewBook();
  addBookToLibrary(newBook);
  
})




