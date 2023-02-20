import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Header() {
  const [listOfProductIDs, setListOfProductIDs] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showCheckout = () => {
    const checkoutList = JSON.parse(localStorage.getItem("checkoutList")) ?? [];
    setListOfProductIDs(checkoutList);
    handleShow();
  };

  return (
    <div>
      <header>
        <h1>Make Up App</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Main">Main</NavLink>
        </nav>
        <button onClick={showCheckout}>Check out</button>
      </header>

      <Modal
        show={show}
        onHide={handleClose}
        onShow={handleShow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>asdsa</li>
            <li>qwewewq</li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
