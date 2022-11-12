import React from "react";
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerRow">

                <div className="footerCol">
                    <ul>
                        <li>
                            <Link to="/">Countries</Link>
                        </li>
                        <li>
                            <Link to="/">Regions</Link>
                        </li>
                        <li>
                            <Link to="/">Cities</Link>
                        </li>
                        <li>
                            <Link to="/">Hot Spots</Link>
                        </li>
                    </ul>
                </div>
                <div className="footerCol">
                    <ul>
                        <li>
                            <Link to="/">Sleeper</Link>
                        </li>
                        <li>
                            <Link to="/">Semi Sleeper</Link>
                        </li>
                        <li>
                            <Link to="/">Seater</Link>
                        </li>
                        <li>
                            <Link to="/">Ordinary</Link>
                        </li>
                    </ul>
                </div>
                <div className="footerCol">
                    <ul>
                        <li>
                        <Link to="/">Bus Charges</Link>
                        </li>
                        <li>
                        <Link to="/">Car Charges</Link>
                        </li>
                        <li>
                        <Link to="/">Reviews</Link>
                        </li>
                        <li>
                        <Link to="/">Offers</Link>
                        </li>
                    </ul>
                </div>
                
                <div className="footerCol">
                    <ul>
                        <li>
                            <Link to="/">Car Pooling</Link>
                        </li>
                        <li>
                            <Link to="/">Bus Finder</Link>
                        </li>
                        <li>
                            <Link to="/">Bus Reservations</Link>
                        </li>
                        <li>
                            <Link to="/">Careers</Link>
                        </li>
                        <li>
                            <Link to="/">Terms & conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footerRow">
                <div className="footerCol">
                    <p className="copyrights">&copy; 2022. All Rights Reserved</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer