import { useState } from "react";

function Main(){
    const[Main, setMain]= useState('');
    const [charData,setCharData]= useState(null);
    const handleChange=event=>setMain(event.target.value);

    const handleClick=event=>{
        event.preventDefault();
        fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCharData(data);
        });
    };
    return(
        <>
         <h1>Make Up App</h1>
            {/* <div>
                {!charData ? <p>Please enter a product</p> : (
                    <div>
                        <h3>Name:{charData.name}</h3>
                        <h4>Born in{charData.birth_year}</h4>
                    </div>
                )}
            </div> */}
            <form onClick={handleClick}>
                <input onChange={handleChange} type="text" placeholder="Type your search" />
                <button>Submit</button>
            </form>
        </>

    )
}


export default Main;