import React from "react";
import City from '../../components/city/City'
import Tops from "../../components/Tops/Tops";
import Subscribe from "../../components/subscribe/Subscribe"
import Footer from "../../components/footer/Footer";
import BusType from "../../components/busType/BusType";
import Header from '../../components/header/Header'
import './home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="main-container">
                <City />
                <BusType />
                <Tops />
                <Subscribe />
                <Footer />
            </div>
        </div>
    )
}

export default Home