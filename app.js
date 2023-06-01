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
  const newBook = new Book(book);
  myLibrary.push(newBook);
}

const stalker = new Book("Stalker", "Tarkovsky", 345, "not read yet")




myLibrary.push(stalker);



const submitButton = document.querySelector("#submitButton");
const textInput = document.querySelector("#newBookInput");

submitButton.addEventListener("click", () => {
  addBookToLibrary(textInput.value)
});




