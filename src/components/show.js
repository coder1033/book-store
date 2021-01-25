import { Card, Container, Button } from "react-bootstrap";
import cart from "../local-storage/local-storage.js";
import "./styles/show.css";

const Show = (props) => {
  let { books } = props;

  const onClick = (book) => {
    console.log(book, "this is book", typeof book);
    cart(book);
  };

  return (
    <Container className="show-container">
      {books.map((book) => (
        <Card
          className="show-card"
          style={{ display: "inline-block" }}
          key={book.id}
          bg="light"
        >
          <Card.Img
            variant="top"
            src={book.volumeInfo.imageLinks.thumbnail}
            width="300"
            height="250"
          />
          <Card.Body>
            <Card.Title className="text-muted">
              Price {book.saleInfo.listPrice.amount}{" "}
              {book.saleInfo.listPrice.currencyCode}
            </Card.Title>
            <Button onClick={() => onClick(book)} variant="dark" size="sm">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Show;
