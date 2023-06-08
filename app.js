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
    return `"${this.title}" by ${this.author}, ${this.numPages} pages`
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

    // adding read not-read button
    const readButton = document.createElement("button");
    readButton.classList.add("readBookBtn")
    readButton.innerHTML = book.readOrNot;
    newItemDiv.appendChild(readButton);

    //adding functionality to the read button
    readButton.addEventListener("click", () => {
      if (book.readOrNot === "read") {
        myLibrary[index].readOrNot = "not read yet";
      } else {
        myLibrary[index].readOrNot = "read";
      }
      readButton.innerHTML = book.readOrNot;
      console.table(myLibrary);
  
    });
    
  })
  
}


submitButton.addEventListener("click", () => {
  let newBook = new Book(bookNameInput.value, authorNameInput.value, Number(numPagesInput.value), readOrNot.value);
  addBookToLibrary(newBook);
  // console.table(myLibrary);
  display.innerHTML = null;
  displayMyLibrary();
  bookNameInput.value = " ";
  authorNameInput.value = " ";
  numPagesInput.value = " ";
  readOrNot.value = " ";
})





const stalker = new Book("Stalker", "Tarkovsky", 345, "not read yet");
const stalker2 = new Book("Stalker 2", "Tarkovsky", 422, "not read yet");
const survived = new Book("Survived", "Sam Sayonara Simon", 300, "read");
const survived2 = new Book("Survived2", "Jon Jones", 440, "read");

myLibrary.push(stalker, stalker2, survived, survived2);

displayMyLibrary();



