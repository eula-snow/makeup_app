import React, { useEffect, useState } from "react";
import Product from './Product';
import './ProductGallery.css';


const ProductGallery = () => {
    const [productData, setProductData] = useState(null);

    const fetchProductData = () => {
        fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish`)
            .then(res => res.json())
            .then(data => {
                let products = data.slice(14, 30);
                console.log(products);
                setProductData(products);
            });
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    if (productData === null) {
        return null;
    }


    return (
        <div className="product-gallery">
            {
                productData.map(product => (
                    <Product key={product.id} product={product} />
                ))}
        </div>

    )
}


export default ProductGallery;