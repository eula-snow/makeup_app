import { useState } from 'react';
import './SideBar.css';

const SideBar = (props) => {
    const [checkedBrand, setCheckedBrand] = useState([]);
    const [checkedProductType, setCheckedProductType] = useState([]);
    const handleCheckBrand = (event) => {
        var updatedList = [...checkedBrand];
        if (event.target.checked) {
            updatedList = [...checkedBrand, event.target.value];
        } else {
            updatedList.splice(checkedBrand.indexOf(event.target.value), 1);
        }
        setCheckedBrand(updatedList);
        props.chooseBrands(updatedList);
    };

    const handleCheckProductType = (event) => {
        var updatedList = [...checkedProductType];
        if (event.target.checked) {
            updatedList = [...checkedProductType, event.target.value];
        } else {
            updatedList.splice(checkedProductType.indexOf(event.target.value), 1);
        }
        setCheckedProductType(updatedList);
        props.chooseProductTypes(updatedList);
    }
    return (
        <div>
            <div className='sidebar-brands'>
                <b>Product Types</b>
                {props.productTypes.filter(x => x).map((item, index) => (
                    <div key={index}>
                        <input value={item} type="checkbox" onChange={handleCheckProductType} />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
            <div className='sidebar-brands'>
                <b>Brands</b>
                {props.brands.filter(x => x).map((item, index) => (
                    <div key={index}>
                        <input value={item} type="checkbox" onChange={handleCheckBrand} />
                        <span>{item}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}


export default SideBar;