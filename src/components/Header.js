import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

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
        <h1>Make-Up App</h1>
        <Navbar>
          {/* <div> */}

          {/* </div> */}
          <Container className="nav-bar">
            {/* <Navbar.Brand id="title">MakeUP A</Navbar.Brand> */}
            {/* <div> */}

            <nav>
              <NavLink id="home" to="/">
                Home
              </NavLink>
              <NavLink id="main" to="/Main">
                Main
              </NavLink>
              <NavLink id="contact" to="/contact">
                Contact
              </NavLink>
              <Button
                variant="outline-secondary"
                className="bt"
                onClick={showCheckout}
              >
                Cart <i className="fa-solid fa-basket-shopping"></i>
              </Button>
              <Button
                variant="outline-secondary"
                className="bt"
                onClick={clearCheckout}
              >
                Clear <i className="fa-solid fa-trash"></i>
              </Button>
            </nav>
            {/* <div> */}

            {/* </div> */}
            {/* </div> */}
          </Container>
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
