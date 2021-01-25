import Spinner from "./spinner.js";
import Show from "./show.js";
import App from "../app.js";
import { useState, useEffect } from "react";
import getBooksData from "../books-api/books-api.js";
import { Container } from "react-bootstrap";

const Search = ({ match }) => {
  let [books_data, setBooksData] = useState({});
  let [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const updateData = async () => {
      let books_data = await getBooksData(match.params.id);
      await setBooksData(books_data);
      setIsFetched(true);
    };
    updateData();
  }, [match.params.id]);

  let temp = <Show books={books_data.items} />;
  if (!isFetched) {
    temp = <Spinner />;
  } else if (!books_data.totalItems) {
    temp = (
      <Container style={{ textAlign: "center" }}>
        <p className="text-danger">
          No book found. Please enter the correct title.
        </p>
      </Container>
    );
  }
  return (
    <div>
      <App style={{ top: "15%", marginTop: "5rem" }} />
      {temp}
    </div>
  );
};

export default Search;
