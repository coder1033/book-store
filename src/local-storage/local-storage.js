const cart = (book_data) => {
  let add_book = {};

  add_book.id = book_data.id;
  add_book.title = book_data.volumeInfo.title;
  add_book.author = book_data.volumeInfo.authors[0];
  add_book.price =
    book_data.saleInfo.listPrice.amount +
    book_data.saleInfo.listPrice.currencyCode;
  add_book.image = book_data.volumeInfo.imageLinks.thumbnail;

  let books = JSON.parse(localStorage.books);
  let books_count = JSON.parse(localStorage.books_count);

  if (books_count[add_book.id]) {
    books_count[add_book.id] = parseInt(books_count[add_book.id]) + 1;
  } else {
    books_count[add_book.id] = 1;
    books[add_book.id] = add_book;
  }

  localStorage.books = JSON.stringify(books);
  localStorage.books_count = JSON.stringify(books_count);

  card_items(parseInt(localStorage.total_items) + 1);
};

const card_items = (val) => {
  localStorage.total_items = val;
  document.getElementById("cart-items").textContent = val;
};
export default cart;
