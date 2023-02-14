const bookList = document.querySelector('.books');
const bookName = document.getElementById('book_name');
const autName = document.getElementById('auther_name');
const addBtn = document.getElementById('addButton');

class Book {
  constructor() {
    this.bookStore = [
      {
        id: 'book_0',
        title: 'object-oriented analysis and design',
        author: 'Martin B',
      },
      {
        id: 'book_1',
        title: 'software design principles',
        author: 'Jose K',
      },
    ];
    this.bookCount = this.bookStore.length - 1;

    this.displayBook = (book) => {
          bookList.innerHTML += `
          <li id="${book.id}">
              <span class="name">${book.title}</span>
              <span class="auther">${book.author}</span>
              <button type="button" class="delete">Remove</button>
          </li>
      `;
    };
  }

  addBook() {
    this.bookCount += 1;
    const objBook = {
      id: `book_${this.bookCount}`,
      title: bookName.value,
      author: autName.value,
    };

    this.bookStore.push(objBook);
    this.displayBook(objBook);
    this.updateLocalStorage();
  }

  removeBook(e) {
    const parentli = e.target.parentElement;
    this.bookStore = this.bookStore.filter((book) => book.id !== parentli.id);
    bookList.removeChild(e.target.parentElement);
    this.updateLocalStorage();
  }

  restoreLocalStorage() {
    this.bookStore = JSON.parse(localStorage.getItem('book_list'));
    this.bookCount = JSON.parse(localStorage.getItem('book_count'));
    for (let i = 0; i < this.bookStore.length; i += 1) {
      this.displayBook(this.bookStore[i]);
    }
  }

  updateLocalStorage() {
    localStorage.setItem('book_list', JSON.stringify(this.bookStore));
    localStorage.setItem('book_count', JSON.stringify(this.bookCount));
  }
}

const newBook = new Book();

if (!localStorage.getItem('book_list')) {
  newBook.updateLocalStorage();
  newBook.restoreLocalStorage();
} else {
  newBook.restoreLocalStorage();
}

addBtn.addEventListener('click', () => {
  newBook.addBook();
});

bookList.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    newBook.removeBook(e);
  }
});