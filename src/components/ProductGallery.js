import React, { useEffect, useState } from "react";
import Product from './Product';


const ProductGallery = () => {
    const [productData, setProductData] = useState(null);

    const fetchProductData = () => {
        fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow`)
            .then(res => res.json())
            .then(data => {
                let products = data.slice(0, 30);
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
        <div>
            {productData.length > 0 && (
                <div>
                    {
                        productData.map(product => (
                            <Product key={product.id} product={product} />
                        ))}
                </div>)}
        </div>
    )
}


export default ProductGallery;