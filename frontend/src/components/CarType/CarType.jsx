import React from "react";
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import './CarType.css'

const CarType = () => {
    const {data, loading, error} = useFetch("api/cars/bytype");


    const images = [
        "./assests/images/Toyota.jpeg",
        "./assests/images/Audi.jpeg",
        "./assests/images/jaguar.jpeg",
        "./assests/images/Benz.jpeg",
        "./assests/images/suzuki.jpeg"
    ];

    return(
        <div className="ptypeContainer">
            <h2 className="ptypeTitle">Browse by Car Company</h2>
            <div className="cityImages">
            { loading ? (<h2>Loading...</h2>) : (<>
                
                {data && images.map((img, i) => (
                    <div className="cityImage" key={i}>
                        <Link to="/">
                            <div className="cityImg">
                                <img src={img} alt="Cars" />
                            </div>
                            <h4 className='cityImgTitle'>{data[i]?.type}</h4>
                            <span className='cityImgProperties'>{data[i]?.count} Cars</span>
                        </Link>
                    </div>
                ))}
                
            </>)}
            </div>
        </div>
    )
}

export default CarType