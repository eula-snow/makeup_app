import { useState } from 'react';
import './SideBar.css';

const SideBar = (props) => {
    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        props.chooseBrands(updatedList);
    };
    return (
        <div className='sidebar-brands'>
            <b>Brands</b>
            {props.brands.filter(x => x).map((item, index) => (
                <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                    <span>{item}</span>
                </div>
            ))}
        </div>
    )
}


export default SideBar;