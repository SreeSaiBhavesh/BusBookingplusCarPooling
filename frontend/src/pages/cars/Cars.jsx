import React from "react"
import Subscribe from "../../components/subscribe/Subscribe"
import Footer from "../../components/footer/Footer"
import CarType from "../../components/CarType/CarType"
import './cars.css'
import Topmodels from "../../components/Topmodels/Topmodels"
import HeaderCars from "../../components/HeaderCars/HeaderCars"
import CityCars from "../../components/cityCars/CityCars"


const Cars = () => {
    return (
        <div>
            <HeaderCars />
            <div className="main-container">
                <CityCars />
                <CarType />
                <Topmodels />
                <Subscribe />
                <Footer />
            </div>
        </div>
    )
}

export default Cars