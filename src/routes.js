import { HashRouter, Switch, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import App from "./app";
import Search from "./components/search.js";
import About from "./components/about.js";
import ShowCart from "./components/show-cart.js";
import "./style/routes.css";

if (!localStorage.books) {
  localStorage.books = JSON.stringify({});
  localStorage.books_count = JSON.stringify({});
  localStorage.total_items = JSON.stringify(0);
}

const Routes = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" variant="light" className="navbar">
        <Container>
          <Navbar.Brand href="/#/">
            <h1>Book Store</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/#/">Home</Nav.Link>
              <Nav.Link href="/#/about">About</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Genre" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/#/fiction">Fiction</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#/mystery">Mystery</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#/fantasy">Fantasy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#/action+adventure">
                  Action & Adventure
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#/biography">Biography</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#/romance">Romance</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#/horror">Horror</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#/classics">Classics</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/#/science-fiction">
                  Sci-fi
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/#/cart">
                Cart
                <AiOutlineShoppingCart />{" "}
                <span id="cart-items">
                  {parseInt(localStorage.total_items) || 0}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={ShowCart} />
          <Route path="/:id" component={Search} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Routes;
