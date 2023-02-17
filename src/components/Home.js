import { useState, useEffect } from "react";
//import Header from "./Header";
import "./Home.css";

function Home() {
  const [charData, setCharData] = useState(null);
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
        setCharData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="welcome">
        <h1>Welcome!</h1>
      </div>
      <div>
        <button>Search</button>
      </div>
      <div>Check out these products</div>
      <div>{JSON.stringify(charData)}</div>
    </>
  );
}

export default Home;
