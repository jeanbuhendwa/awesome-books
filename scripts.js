const books_list = document.querySelector(".books");

const bookName = document.getElementById("book_name");
const autName = document.getElementById("auther_name");
const addBtn = document.getElementById("addButton");

// const bookSection = document.getElementById("book_section");

let bookStore = [
  {
    title: "Book1",
    author: "Authors1",
  },
  {
    title: "Book2",
    author: "Authors2",
  },
];
// Add book function
function displayBook(book) {
    books_list.innerHTML += `
            <li>
                <span class="name">${book.title}</span>
                <span class="auther">${book.author}</span>
                <button type="button" class="delete">Remove</button>
                <hr>
            </li>
        `;
  }

for (let i = 0; i < bookStore.length; i++) {
    displayBook(bookStore[i]);
}


function addBook() {
  let objBook = {
    title : bookName.value,
    author : autName.value
  }

  bookStore.push(objBook);
  displayBook(objBook);
}

addBtn.addEventListener("click", addBook);
