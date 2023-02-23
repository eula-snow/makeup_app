import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const styles = {
  bg: {
    backgroundColor: '#555',
  },
  hc: {
    color: 'black',
  }
}

function Header() {
  const [listOfProductNames, setListOfProductNames] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showCheckout = () => {
    const checkoutList = JSON.parse(localStorage.getItem("checkoutList")) ?? [];
    setListOfProductNames(checkoutList);
    handleShow();
  };

  const clearCheckout = () => {
    localStorage.clear();
    showCheckout();
  };
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Makeup App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto" style={styles.hc}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/main">Products</NavLink>
              <NavLink to="/Contact">Contact</NavLink>
              <Button
                variant="outline-secondary"
                className="bt"
                id="cart"
                onClick={showCheckout}>
                Cart <i className="fa-solid fa-basket-shopping"></i>
              </Button>
              <Button
                variant="outline-secondary"
                className="bt"
                onClick={clearCheckout}>
                Clear <i className="fa-solid fa-trash"></i>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </header>
      <Modal
        show={show}
        onHide={handleClose}
        onShow={handleShow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Wishlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {listOfProductNames.map((productName) => {
              return (
                <li key={productName[0]}>
                  {productName[1] + " - " + productName[0]}
                </li>
              );
            })}
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Header;
