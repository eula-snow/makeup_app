import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [charData, setCharData] = useState(null);
  const [listItems, setListItems] = useState(null);

  const brands = ["nyx", "maybelline", "dior", "glossier", "l'oreal"];
  let randomBrand = brands[Math.floor(Math.random() * brands.length)];

  useEffect(() => {
    fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${randomBrand}`
    )
      .then((res) => res.json())
      .then((data) => {
        let info = data.slice(0, 4);
        setCharData(info);
        console.log(info);
      });
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `./main`;
    navigate(path);
  };
  if (charData === null) {
    return <div className="container show-middle">Loading...</div>
  }
  return (
    <>
      <div className="welcome">
        <h1 id="discover">Discover new make-up with Make Up App</h1>
      </div>
      <div>
        <Button variant="outline-secondary" id="search" onClick={routeChange}>
          Search for Products
        </Button>{" "}
        <p id="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non leo
          at justo facilisis bibendum non vel erat. Quisque sed imperdiet erat,
          laoreet tempus ante. Fusce mi augue, tempor eu eros nec, sodales
          interdum tortor. Proin consequat dui leo, ullamcorper suscipit mauris
          blandit vitae. Ut rutrum consectetur diam, et auctor lacus fermentum
          nec. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nulla et orci non tellus placerat hendrerit nec sit amet libero.
          Vivamus iaculis risus sit amet porta egestas. Duis sit amet eros a mi
          egestas accumsan sit amet quis ex. Mauris sollicitudin neque sit amet
          metus suscipit rutrum. Duis pellentesque purus in augue congue
          vestibulum.
        </p>
      </div>
      <div>
        <h2 id="check">Meet the Brands</h2>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carImg"
            src={require("../assets/images/lip.avif")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Dior</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carImg"
            src={require("../assets/images/lip.avif")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carImg"
            src={require("../assets/images/lip.avif")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section>
        {/* {charData.map((product) => (
          <Product key={product.id} product={product} />
        ))} */}
      </section>
      <Footer></Footer>
    </>
  );
}

export default Home;
