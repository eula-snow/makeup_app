import { useState } from "react";
import Product from "./Product";
import "./ProductGallery.css";
import Header from "./Header";
import Footer from "./Footer";

const ProductGallery = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = () => {
    let products = searchText
      ? props.productData.filter((product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : props.productData;
    products =
      props.selectedProductTypes.length > 0
        ? products.filter((item) =>
            props.selectedProductTypes.includes(item.product_type)
          )
        : products;
    products =
      props.selectedBrands.length > 0
        ? products.filter((item) => props.selectedBrands.includes(item.brand))
        : products;
    return products;
  };

  if (filteredProducts().length === 0) {
    return (
      <div className="container show-middle">No products found to display</div>
    );
  }

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="textbox">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search for product name"
            className="search-bar"
          />
        </div>
        <div className="product-gallery">
          {filteredProducts().map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductGallery;
