const form = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const categoryInput = document.getElementById('category');
const bookList = document.getElementById('books-container');
const searchInput = document.getElementById('search');

let books = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const category = categoryInput.value.trim();

  if (title && author && category) {
    const book = { title, author, category };
    books.push(book);
    displayBooks(books);
    form.reset();
  }
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query)
  );
  displayBooks(filtered);
});

function displayBooks(bookArray) {
  bookList.innerHTML = '';
  bookArray.forEach(book => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${book.title}</strong> by ${book.author} <br/><em>${book.category}</em>`;
    bookList.appendChild(li);
  });
}
