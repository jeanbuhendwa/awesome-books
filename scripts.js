const books_list = document.querySelector(".books");

const bookName = document.getElementById("book_name");
const autName = document.getElementById("auther_name");
const addBtn = document.getElementById("addButton");

// const bookSection = document.getElementById("book_section");

let bookStore = [
  {
    id: "book_0",
    title: "Book1",
    author: "Authors1",
  },
  {
    id: "book_1",
    title: "Book2",
    author: "Authors2",
  },
];



function displayBook(book) {
    books_list.innerHTML += `
            <li id="${book.id}">
                <span class="name">${book.title}</span>
                <span class="auther">${book.author}</span>
                <button type="button" class="delete">Remove</button>
                <hr>
            </li>
        `;
  }

//   Local storage
function restoreLocalStorage(){
    bookStore = JSON.parse(localStorage.getItem('book_list'));
    for (let i = 0; i < bookStore.length; i++) {
        displayBook(bookStore[i]);
    }
}

function updateLocalStorage(){
    localStorage.setItem('book_list', JSON.stringify(bookStore));
}

if(!localStorage.getItem('book_list')){
    updateLocalStorage();
}
else{
    restoreLocalStorage();
}

let book_count = bookStore.length - 1;
// Add book function
function addBook() {
  book_count++;
  let objBook = {
    id: "book_" + book_count,
    title : bookName.value,
    author : autName.value
  }

  bookStore.push(objBook);
  displayBook(objBook);
  updateLocalStorage();
}

addBtn.addEventListener("click", addBook);

// Remove function.
function removeBook(e){
    const parentli = e.target.parentElement;
    bookStore = bookStore.filter(book => book.id != parentli.id);
    books_list.removeChild(e.target.parentElement);
    updateLocalStorage();
}

books_list.addEventListener('click', (e) => {
    if(e.target.className === "delete"){
        removeBook(e);
    }
});