import { Card, Container, Button } from "react-bootstrap";
import cart from "../local-storage/local-storage.js";
import "./styles/show.css";

const Show = (props) => {
  let { books } = props;

  const onClick = (book) => {
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
            alt="image not available"
            width="300"
            height="250"
          />
          <Card.Body>
            <Card.Title className="text-muted">
              Price{" "}
              {book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 0}{" "}
              {book.saleInfo.listPrice
                ? book.saleInfo.listPrice.currencyCode
                : "INR"}
            </Card.Title>
            <Button
              onClick={
                book.saleInfo.listPrice ? () => onClick(book) : () => null
              }
              variant="dark"
              size="sm"
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Show;
