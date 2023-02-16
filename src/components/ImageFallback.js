// import React, { useEffect, useState } from "react";
// import { Image } from 'react-native';

// import NasaImage from '../images/logo192.png';

// const ImageFallback = (props) => {
//     // start off in the loading state
//     const [loading, setLoading] = useState(true);

//     // keep track whether imageurl returns valid result
//     const [isValid, setIsValid] = useState(null);

//     // use effect to check for access to imageUrl,
//     // run the effect when the component mounts
//     useEffect(() => {
//         fetch(props.imageUrl).then(res => {
//             setIsValid(res.status === 200);
//             setLoading(false);
//         });
//     }, []);

//     // if still loading or invalid: return fallback image
//     if (loading || !isValid) {
//         return <Image source={NasaImage} />;
//     }

//     // return the image with the provided value
//     return <Image source={{ uri: props.imageUrl }} />;
// };

// export default ImageFallback;