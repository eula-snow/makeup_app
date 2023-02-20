import React, { useEffect, useState } from "react";
import ProductGallery from "./ProductGallery";
import "./ProductGalleryLayout.css";
import SideBar from "./SideBar";

const ProductGalleryLayout = () => {
  const [productData, setProductData] = useState(null);
  const [brandData, setBrandData] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [productTypes, setProductTypes] = useState(null);
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);

  const chooseBrands = (brands) => {
    setSelectedBrands(brands);
  };

  const chooseProductTypes = (productTypes) => {
    setSelectedProductTypes(productTypes);
  };

  const fetchProductData = () => {
    // selected only few product types
    const eyeShadow = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow`;
    const blush = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`;
    const eyeliner = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner`;
    const foundation = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation`;
    const lipstick = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`;
    const lipliner = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner`;
    const nailPolish = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish`;

    Promise.all([
      fetch(eyeShadow).then((response) => response.json()),
      fetch(blush).then((response) => response.json()),
      fetch(eyeliner).then((response) => response.json()),
      fetch(foundation).then((response) => response.json()),
      fetch(lipstick).then((response) => response.json()),
      fetch(lipliner).then((response) => response.json()),
      fetch(nailPolish).then((response) => response.json()),
    ])
      .then((results) => {
        // selected results where more picture are available to display and taken few products only.
        const combined = [
          ...results[0].slice(13, 30),
          ...results[1].slice(5, 30),
          ...results[2].slice(1, 25),
          ...results[3].slice(6, 30),
          ...results[4].slice(12, 30),
          ...results[5].slice(3, 30),
          ...results[6].slice(15, 30),
        ];
        setProductData(combined);
        const brands = [...new Set(combined.map((q) => q.brand))];
        setBrandData(brands);
        const productTypes = [...new Set(combined.map((q) => q.product_type))];
        setProductTypes(productTypes);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  if (productData === null) {
    return null;
  }

  return (
    <div className="layout">
      <div className="side-bar">
        <SideBar
          brands={brandData}
          chooseBrands={chooseBrands}
          productTypes={productTypes}
          chooseProductTypes={chooseProductTypes}
        />
      </div>
      <div className="product-body">
        <ProductGallery
          productData={productData}
          selectedBrands={selectedBrands}
          selectedProductTypes={selectedProductTypes}
        />
      </div>
    </div>
  );
};

export default ProductGalleryLayout;
