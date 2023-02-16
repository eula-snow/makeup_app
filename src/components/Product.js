import React, { useState } from 'react';


const Product = (props) => {

    const fallbackImage = '/logo192.png';
    const [imageSrc, setImageSrc] = useState(props.product.image_link);

    const handleImageError = () => {
        setImageSrc(fallbackImage);
    };

    return (
        <div className="product">
            <div>{props.product.name}</div>
            <div>{props.product.description}</div>
            {/* <ImageFallback imageUrl={props.product.image_link}></ImageFallback> */}

            <img src={imageSrc} alt={props.product.name} onError={handleImageError} />
        </div>);
}


export default Product;