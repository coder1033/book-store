import { AiOutlineShoppingCart } from "react-icons/ai";
import Spinner from "./spinner.js";
import { useState, useEffect } from "react";
import {
  Alert,
  Row,
  Col,
  Image,
  Container,
  Jumbotron,
  Button,
} from "react-bootstrap";
import "./styles/show-cart.css";

const ShowCart = () => {
  let [books, setBooks] = useState({});
  let [books_count, setBooksCount] = useState({});
  let [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    (async () => {
      await setBooks(JSON.parse(localStorage.books));
      await setBooksCount(JSON.parse(localStorage.books_count));
      setIsFetched(true);
    })();
  }, []);

  const onChange = async (e, id) => {
    e.preventDefault();

    setIsFetched(false);
    const updateCart = async (val, id) => {
      let temp_books = JSON.parse(localStorage.books);
      let temp_books_count = JSON.parse(localStorage.books_count);

      card_items(
        parseInt(localStorage.total_items) + val - temp_books_count[id]
      );
      temp_books_count[id] = val;

      if (!temp_books_count[id]) {
        delete temp_books_count[id];
        delete temp_books[id];
        await setBooks(temp_books);
        localStorage.books = JSON.stringify(temp_books);
      }
      await setBooksCount(temp_books_count);
      localStorage.books_count = JSON.stringify(temp_books_count);

      setIsFetched(true);
    };
    updateCart(parseInt(e.target.qty.value), id);
  };
  if (!isFetched) {
    return <Spinner />;
  }
  if (!parseInt(localStorage.total_items)) {
    return (
        <Container className="show-cart-container">
        <AiOutlineShoppingCart size={200} />
        There's nothing in your cart...
        </Container>
    )
  }
  return (
    <Container className="show-cart-container">
      <TotalPrice books={books} books_count={books_count} />
      {Object.keys(books_count).map((id) => (
        <Jumbotron key={id}>
          <Row>
            <Col className="first-column">
              <Image thumbnail src={books[id].image} />
            </Col>
            <Col className="last-column">
              <h3 className="mb-0">Title</h3>
              <p className="text-muted">{books[id].title}</p>
              <h3 className="mb-0">Author</h3>
              <p className="text-muted">{books[id].author}</p>
              <h3 className="mb-0">Price</h3>
              <p className="text-muted">
                {parseInt(books[id].price) * parseInt(books_count[id])}
              </p>
            </Col>
          </Row>
          <form onSubmit={(e) => onChange(e, id)} className="mt-3">
            <h5 className="mb-1">
              Quantity(<small>{books_count[id]}</small>)
            </h5>
            <Button
              type="submit"
              variant="outline-dark"
              size="sm"
              className="py-0 px-1"
            >
              save
            </Button>
            <input
              className="input-quantity"
              type="number"
              placeholder={books_count[id]}
              min="0"
              id="qty"
            />
          </form>
        </Jumbotron>
      ))}
    </Container>
  );
};

const card_items = (val) => {
  localStorage.total_items = val;
  document.getElementById("cart-items").textContent = val;
};

const TotalPrice = (props) => {
  let [price, setPrice] = useState(0);
  let { books, books_count } = props;

  useEffect(() => {
    setPrice(
      Object.keys(books_count)
        .map((id) => parseInt(books_count[id]) * parseInt(books[id].price))
        .reduce((a, b) => a + b, 0)
    );
  }, [books_count, price, books, setPrice]);

  return <Alert variant="info">Your Grand Total is {price} INR</Alert>;
};

export default ShowCart;
