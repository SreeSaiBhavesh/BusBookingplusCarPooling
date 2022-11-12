import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import './topmodels.css'

const Topmodels = () => {
    return(
        <>
            <Carousel infiniteLoop={true} autoPlay={true} showStatus={false} transitionTime={1000} interval={1000} showArrows={false} showIndicators={false}>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assests/images/Audi.jpeg" alt="Audi" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Audi</h2>
                            <span className="cImgP">1 Car</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assests/images/jaguar.jpeg" alt="Jaguar" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Jaguar</h2>
                            <span className="cImgP">1 car</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assests/images/Benz.jpeg" alt="Benz" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Benz</h2>
                            <span className="cImgP">2 cars</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assests/images/Toyota.jpeg" alt="Toyota" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Toyota</h2>
                            <span className="cImgP">2 cars</span>
                        </div>
                    </Link>
                </div>
                <div className="cImage">
                    <Link to="/">
                        <img src="./assests/images/suzuki.jpeg" alt="Suzuki" />
                        <div className="cImgDesc">
                            <h2 className='cImgTitle'>Suzuki</h2>
                            <span className="cImgP">1 car</span>
                        </div>
                    </Link>
                </div>
            </Carousel>
        </>
    )
}

export default Topmodels