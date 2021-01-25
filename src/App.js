import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import "./style/app.css";

function App(props) {
  let [search_input, setSearchInput] = useState("");
  const onChange = (e) => {
    setSearchInput("/" + e.target.value);
  };

  return (
    <Container style={props.style} className="search">
      <Form action={search_input}>
        <input
          id="search"
          placeholder="Title of the Book..."
          type="text"
          onChange={onChange}
        />
        <Button
          href={search_input}
          type="submit"
          variant="outline-dark"
          size="sm"
        >
          <AiOutlineSearch size={26} cursor="Pointer" />
        </Button>
      </Form>
    </Container>
  );
}

export default App;
