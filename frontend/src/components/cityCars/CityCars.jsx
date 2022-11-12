import React from "react";
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch.js'
import './citycars.css'
const CityCars = () => {

    const {data, loading, error} = useFetch("api/cars/bycity?cities=Hyderabad,Bengaluru,Chennai,Delhi,Mumbai");
    return(
        <div className="cities">
            <h2 className="cityTitle">Explore by Places</h2>
            <div className="cityImages">
                {loading ? (<h2>Loading...</h2>) : (
                    <>
                        <div className="cityImage">
                            <Link to="/">
                                <div className="cityImg">
                                    <img src="./assests/images/Delhi.jpg" alt="Delhi" />
                                </div>
                                <h4 className="cityImgTitle">Delhi</h4>
                                <span className="cityImgProperties">{data[3]} Cars</span>
                            </Link>
                            
                        </div>
                        <div className="cityImage">
                            <Link to="/">
                                <div className="cityImg">
                                    <img src="./assests/images/Mumbai.jpeg" alt="Mumbai" />
                                </div>
                                <h4 className="cityImgTitle">Mumbai</h4>
                                <span className="cityImgProperties">{data[4]} Cars</span>
                            </Link>
                        </div>
                        <div className="cityImage">
                            <Link to="/">
                                <div className="cityImg">
                                    <img src="./assests/images/Bengaluru.jpg" alt="Bengaluru" />
                                </div>
                                <h4 className="cityImgTitle">Bengaluru</h4>
                                <span className="cityImgProperties">{data[1]} Cars</span>
                            </Link>
                        </div>
                        <div className="cityImage">
                            <Link to="/">
                                <div className="cityImg">
                                    <img src="./assests/images/Hyderabad.jpeg" alt="Hyderabad" />
                                </div>
                                <h4 className="cityImgTitle">Hyderabad</h4>
                                <span className="cityImgProperties">{data[0]} Cars</span>
                            </Link>
                        </div>
                        <div className="cityImage">
                            <Link to="/">
                                <div className="cityImg">
                                    <img src="./assests/images/Chennai.jpeg" alt="Chennai" />
                                </div>
                                <h4 className="cityImgTitle">Chennai</h4>
                                <span className="cityImgProperties">{data[2]} Cars</span>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default CityCars