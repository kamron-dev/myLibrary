const myLibrary = [];

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



const stalker = new Book("Stalker", "Tarkovsky", 345, "not read yet");




myLibrary.push(stalker);


// Initializing user input variables 
const submitButton = document.querySelector("#submitButton");
const bookNameInput = document.querySelector("#bookName");
const authorNameInput = document.querySelector("#authorName");
const numPagesInput = document.querySelector("#numPages");
const readOrNot = document.querySelector("#readOrNot");


// submitButton.addEventListener("click", () => {
//   addBookToLibrary(textInput.value)
// });



submitButton.addEventListener("click", () => {
  const newBook = createNewBook();
  addBookToLibrary(newBook);
  
})




