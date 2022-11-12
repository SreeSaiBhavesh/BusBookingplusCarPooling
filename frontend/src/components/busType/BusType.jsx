import React from "react";
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import './BusType.css'

const busType = () => {
    const {data, loading, error} = useFetch("api/buses/bytype");


    const images = [
        "./assests/images/Sleeper.jpg",
        "./assests/images/semisleeper.jpeg",
        "./assests/images/seater.jpeg",
        "./assests/images/21Sleeper.jpeg",
        "./assests/images/normal.jpeg"
    ];

    return(
        <div className="ptypeContainer">
            <h2 className="ptypeTitle">Browse by Bus Type</h2>
            <div className="cityImages">
            { loading ? (<h2>Loading...</h2>) : (<>
                
                {data && images.map((img, i) => (
                    <div className="cityImage" key={i}>
                        <Link to="/">
                            <div className="cityImg">
                                <img src={img} alt="Buses" />
                            </div>
                            <h4 className='cityImgTitle'>{data[i]?.type}</h4>
                            <span className='cityImgProperties'>{data[i]?.count} Buses</span>
                        </Link>
                    </div>
                ))}
                
            </>)}
            </div>
        </div>
    )
}

export default busType