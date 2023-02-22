import { useState, useEffect } from "react";
import Header from "./Header";
import { FooterComponent } from "./Footer";
import "./Home.css";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Home() {
  // const [charData, setCharData] = useState(null);
  // const [listItems, setListItems] = useState(null);

  // const brands = ["nyx", "maybelline", "dior", "glossier", "l'oreal"];
  // let randomBrand = brands[Math.floor(Math.random() * brands.length)];

  // useEffect(() => {
  //   // fetch(
  //   //   `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${randomBrand}`
  //   // )
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     let info = data.slice(0, 4);
  //   //     setCharData(info);
  //   //     console.log(info);
  //   // });
  // }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `./main`;
    navigate(path);
  };
  // if (charData === null) {
  //   return <div className="container show-middle">Loading...</div>;
  // }
  return (
    <>
      <div className="welcome">
        <h1 id="discover">Discover new make-up with Make Up App</h1>
      </div>
      <main>
        <Button variant="outline-secondary" id="search" onClick={routeChange}>
          Search for Products
        </Button>{" "}
        <p id="description">
          Try something new this spring! Check out our makeup collection and add
          your favourite products to the wishlist. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam dignissim lacus vel libero egestas
          suscipit. Cras leo est, gravida id convallis non, tempor non quam.
          Aenean vel ante at leo euismod faucibus. Curabitur ultrices in felis
          nec pulvinar. Nullam sed urna eu elit rutrum pellentesque et id erat.
          Vestibulum vitae gravida leo, sed tempus turpis. Cras porta molestie
          augue sed bibendum.
        </p>
      </main>
      <h2 id="brandsHeader">Meet the Brands</h2>
      <section>
        <Carousel id="carBrand">
          <Carousel.Item className="carouselItem">
            <img
              className="d-block img-fluid rounded carImg"
              src={require("../assets/images/nyx1.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>NYX</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselItem">
            <img
              className="d-block img-fluid rounded carImg"
              src={require("../assets/images/diorNew.jpg")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Dior</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carouselItem">
            <img
              className="d-block img-fluid rounded carImg"
              src={require("../assets/images/maybelline2.jpg")}
              alt="maybelline"
            />

            <Carousel.Caption>
              <h3>Maybelline</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* {charData.map((product) => (
          <Product key={product.id} product={product} />
        ))} */}
      </section>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default Home;
