const myLibrary = [];

// Initializing user input variables 
const submitButton = document.querySelector("#submitButton");
const bookNameInput = document.querySelector("#bookName");
const authorNameInput = document.querySelector("#authorName");
const numPagesInput = document.querySelector("#numPages");
const readOrNot = document.querySelector("#readOrNot");
const deleteBookBtn = document.querySelector(".deleteBookBtn");
const showNewBookInputDivBtn = document.getElementById("showNewBookInputDivBtn");
const bookInputSection = document.getElementById("bookInputSection")

// Initializing display variable

const display = document.querySelector("#booksDisplay");

function Book(title, author, numPages, readOrNot) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readOrNot = readOrNot;
  this.info = function () {
    return `"${this.title}" <br> by ${this.author}, <br> ${this.numPages} pages`
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);

}

showNewBookInputDivBtn.addEventListener("click", () => {
  bookInputSection.classList.toggle("isHidden")
})


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
    if (book.readOrNot === "read") {
      readButton.classList.add("readBookBtn");
    } else if (book.readOrNot === "not read yet") {
      readButton.classList.add("notReadBtn");
    }
    
    readButton.innerHTML = book.readOrNot;
    newItemDiv.appendChild(readButton);

    //adding functionality to the read button
    readButton.addEventListener("click", () => {
      if (book.readOrNot === "read") {
        myLibrary[index].readOrNot = "not read yet";
        readButton.classList.replace("readBookBtn", "notReadBtn");
        
      } else if (book.readOrNot === "not read yet") {
        myLibrary[index].readOrNot = "read";
        readButton.classList.replace("notReadBtn", "readBookBtn");
        
      }
      readButton.innerHTML = book.readOrNot;
  
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



