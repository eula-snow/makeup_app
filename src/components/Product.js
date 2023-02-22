import React, { useState } from "react";
import "./Product.css";

const Product = (props) => {
  const fallbackImage = "/logo192.png";
  const [imageSrc, setImageSrc] = useState(props.product.image_link);

  const handleImageError = () => {
    setImageSrc(fallbackImage);
  };

  const checkout = () => {
    let checkoutList = JSON.parse(localStorage.getItem("checkoutList")) ?? [];
    checkoutList.push([props.product.name, props.product.brand]);
    localStorage.setItem("checkoutList", JSON.stringify(checkoutList));
  };

  return (
    <div className="product">
      <div className="product-name">{props.product.name}</div>
      <div className="product-info">
        <div>Brand: {props.product.brand}</div>
        <div>Product: {props.product.product_type}</div>
      </div>
      <div>
        <img
          src={imageSrc}
          alt={props.product.name}
          onError={handleImageError}
        />
      </div>
      <div className="product-des">
        {props.product.description
          ? props.product.description.slice(0, 100)
          : ""}
      </div>
      <div className="product-buy">
        <a href={props.product.website_link} target="_blank" rel="noreferrer">
          Visit Website
        </a>
        <div>
          <span className="product-price">£{props.product.price}</span>
          <button onClick={checkout}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
