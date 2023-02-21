import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

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
    // alert('All Checkout items cleared!');
    showCheckout();
  }

  return (
    <div>
      <header>
        <h1>Make Up App</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Main">Main</NavLink>
        </nav>
        <button onClick={showCheckout}>Check out</button>
        <button onClick={clearCheckout}>Clear</button>

      </header>

      <Modal
        show={show}
        onHide={handleClose}
        onShow={handleShow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Favourites</Modal.Title>
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
