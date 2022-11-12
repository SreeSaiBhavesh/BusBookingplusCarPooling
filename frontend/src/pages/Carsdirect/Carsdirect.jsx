import React, { useState } from "react";
import HeaderCars from '../../components/HeaderCars/HeaderCars'
import Subscribe from "../../components/subscribe/Subscribe"
import Footer from "../../components/footer/Footer"
import "./carsdirect.css"
import '../../components/search/search.css'
import '../../components/listBuses/listBuses.css'

//import { faCalendar} from '@fortawesome/free-regular-svg-icons'

import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
//import { faBus, faPerson, faCar, faInfo} from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ItemCars from "../../components/itemCars/itemCars";

const Carsdirect = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)

    const {data, loading, error, reFetch} = useFetch(`api/cars?city=${destination}&min=${min || 0}&max=${max || 9999}`);


    const handleClick = () => {
        reFetch();
    }

    return (
        <div>
            <HeaderCars type="smallHeader"/>
            <div className="busesContainer">
                <div className="busesRow">
                    <div className="busesCol">
                        <div className="searchBuses">
                            <div className="search">
                                <div className="search-item">
                                    <label>Destination</label>
                                    <input placeholder={destination} type="text" />

                                </div>

                                <div className="search-item">
                                    <label>Check-in Date</label>
                                    <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                                    
                                    {openDate && (<DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date} className="date"
                                        minDate={new Date()}
                                        />)
                                    }
                                </div>

                                <div className="search-item">
                                    <div className="searchOptions">
                                        <div className="searchOptionsItem">
                                            <label className="searchOptionsText">Min Price <sub>per seat</sub></label>
                                            <input type="number" onChange={e => setMin(e.target.value)} className="searchOptionsInput" />
                                        </div>
                                        <div className="searchOptionsItem">
                                            <label className="searchOptionsText">Max Price <sub>per seat</sub></label>
                                            <input type="number" onChange={e => setMax(e.target.value)} className="searchOptionsInput" />
                                        </div>
                                        <div className="searchOptionsItem">
                                            <label className="searchOptionsText">Adult</label>
                                            <input type="number" min={1} className="searchOptionsInput" placeholder={options.adult}/>
                                        </div>
                                        <div className="searchOptionsItem">
                                            <label className="searchOptionsText">Children</label>
                                            <input type="number" min={0} className="searchOptionsInput" placeholder={options.children}/>
                                        </div>
                                        {/* <div className="searchOptionsItem">
                                            <label className="searchOptionsText">Seats</label>
                                            <input type="number" min={1} className="searchOptionsInput" placeholder={options.seats}/>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="search-item">
                                    <button className='btnSearch' onClick={handleClick}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="busesCol">
                        <div className="listBuses">
                            {
                                loading ? (<h2>Loading...</h2>) : (
                                <>
                                    {data.map((item=>
                                        <ItemCars item={item} key={item._id} />
                                    ))}
                                </> 
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Carsdirect