import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import './Header.css'
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
  }
  return (
    <div>
      <header>
        <div>
          <h1>Make-Up App</h1>
        </div>
        <div className="nav-bar">
          <NavLink id='home' to="/">Home</NavLink>
          <NavLink id='main' to="/Main">Main</NavLink>
          <div>
            <button className='bt' onClick={showCheckout}><i class="fa-thin fa-user"></i>Basket</button>
          </div>
          <div>
            <button className='bt' onClick={clearCheckout}>Clear Basket</button>
          </div>
        </div>
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