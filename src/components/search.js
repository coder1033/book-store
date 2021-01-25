import Spinner from "./spinner.js";
import Show from "./show.js";
import App from "../app.js";
import { useState, useEffect } from "react";
import getBooksData from "../books-api/books-api.js";

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

  console.log(match.params.id);

  if (isFetched) {
    return (
      <div>
        <App style={{ top: "15%", marginTop: "5rem" }} />
        <Show books={books_data.items} />
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default Search;
