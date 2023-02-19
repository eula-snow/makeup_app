import { useState } from 'react';
import Product from './Product';
import './ProductGallery.css';


const ProductGallery = (props) => {

    console.log(props.selectedBrands);
    const [searchText, setSearchText] = useState('');


    const handleSearchChange = event => {
        setSearchText(event.target.value);
    };

    const filteredProducts = () => {
        let products = searchText ? props.productData.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase())) : props.productData;
        products = props.selectedBrands.length > 0 ? products.filter(item => props.selectedBrands.includes(item.brand)) : products;
        return products;
    }

    return (
        <div>
            <input type="text" value={searchText} onChange={handleSearchChange} placeholder="Search for product name" className="search-bar" />
            <div className="product-gallery">
                {
                    filteredProducts().map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}


export default ProductGallery;