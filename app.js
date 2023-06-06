const myLibrary = [];

// Initializing user input variables 
const submitButton = document.querySelector("#submitButton");
const bookNameInput = document.querySelector("#bookName");
const authorNameInput = document.querySelector("#authorName");
const numPagesInput = document.querySelector("#numPages");
const readOrNot = document.querySelector("#readOrNot");
const deleteBookBtn = document.querySelector(".deleteBookBtn");

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
  myLibrary.forEach((book, index) => {
    // Creating book divs
    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("bookCard");
    newItemDiv.innerHTML = book.info();
    display.appendChild(newItemDiv);

    //creating delete buttons
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("deleteBookBtn");
    deleteButton.dataset.indexNumber = index;
    deleteButton.textContent = "Delete";
    newItemDiv.appendChild(deleteButton);

    //adding ability to delete books

    deleteButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      display.innerHTML = null;
      displayMyLibrary();
    })

  })
  
}


submitButton.addEventListener("click", () => {
  let newBook = new Book(bookNameInput.value, authorNameInput.value, Number(numPagesInput.value), readOrNot.value);
  addBookToLibrary(newBook);
  // console.table(myLibrary);
  display.innerHTML = null;
  displayMyLibrary();
})
Book.prototype.toggleStatus = function () {
  if (this.readOrNot = "read") readOrNot = "not read yet";
  if (this.readOrNot = "not read yet") readOrNot = "read";
}




const stalker = new Book("Stalker", "Tarkovsky", 345, "not read yet");
const stalker2 = new Book("Stalker 2", "Tarkovsky", 422, "not read yet");
const survived = new Book("Survived", "Sam Sayonara Simon", 300, "read");
const survived2 = new Book("Survived2", "Jon Jones", 440, "read");

myLibrary.push(stalker, stalker2, survived, survived2);

displayMyLibrary();



