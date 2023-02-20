import { useState, useEffect } from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

function Home() {
  const [charData, setCharData] = useState(null);
  const [listItems, setListItems] = useState(null);

  const brands = ["nyx", "maybelline", "dior", "glossier", "l'oreal"];
  let randomBrand = brands[Math.floor(Math.random() * brands.length)];
  //   const productTypes = [
  //     "blush",
  //     "bronzer",
  //     "eyebrow",
  //     "eyeliner",
  //     "eyeshadow",
  //     "foundation",
  //     "lip_liner",
  //     "lipstick",
  //     "mascara",
  //     "nail_polish",
  //   ];
  //   let randomProductType =
  //     productTypes[Math.floor(Math.random() * productTypes.length)];
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
    return null;
  }
  return (
    <>
      <Header />
      <div className="welcome">
        <h1 id="discover">Discover new make-up with Make Up App</h1>
      </div>
      <div>
        <button id="search" onClick={routeChange}>
          Search for Products
        </button>
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
        <h2 id="check">Check out these products</h2>
      </div>
      <section>
        {charData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default Home;
