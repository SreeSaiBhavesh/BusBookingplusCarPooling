import React from "react";
import './about.css'
import Footer from "../../components/footer/Footer"
import { faBus, faCar, faInfo} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = (type) => {

    return(
        <div class="container">
            <div className="loginRow">
                <div className="loginCol">
                        <h2>Booking</h2>
                </div>
            </div>
            <div className="h-row">
                <div className={type === "smallHeader" ? "h-col smallHeader" : "h-col"}></div>
                    <div className="icons">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBus} />
                            <Link to="/">Bus</Link>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCar} />
                            <Link to="/cars">Car Pools</Link>
                        </div>
                        <div className="icon active">
                            <FontAwesomeIcon icon={faInfo} />
                            <Link to="/about">About</Link>
                        </div>
                    </div>
                </div>
            <div className="loginRow">
                <div className="loginCol">
                    <h1><center>About</center></h1>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iusto eius porro repellat id, 
                        facilis quaerat hic doloribus dolores sint assumenda optio earum reprehenderit ratione rem dolorum, 
                        ut quia ullam laboriosam et consequuntur incidunt? Possimus quae itaque facere illo molestiae tenetur ipsa totam nam,
                        debitis reiciendis ducimus accusamus similique. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam dolorem iusto. Blanditiis assumenda laboriosam, reiciendis 
                        expedita laborum optio iste dolorum alias necessitatibus! Quidem libero omnis enim fugiat deleniti doloremque.</h3>
                    
                    
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default About