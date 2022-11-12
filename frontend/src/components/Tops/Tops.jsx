import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import './top.css'

const Tops = () => {
    return(
        <>
            <Carousel infiniteLoop={true} autoPlay={true} showStatus={false} transitionTime={1000} interval={1000} showArrows={false} showIndicators={false}>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assests/images/Delhi.jpg" alt="Delhi" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Delhi</h2>
                            <span className="cImgP">1 Buses</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assests/images/Mumbai.jpeg" alt="Mumbai" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Mumbai</h2>
                            <span className="cImgP">1 Buses</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assests/images/Bengaluru.jpg" alt="Bengaluru" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Bengaluru</h2>
                            <span className="cImgP">1 Buses</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assests/images/Chennai.jpeg" alt="Chennai" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Chennai</h2>
                            <span className="cImgP">1 Buses</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assests/images/Kolkata.jpeg" alt="Kolkata" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Kolkata</h2>
                            <span className="cImgP">1 Buses</span>
                        </div>
                    </Link>
                </div>
            </Carousel>
        </>
    )
}

export default Tops