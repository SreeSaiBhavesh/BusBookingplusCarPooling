import React, {useContext, useState } from "react"
import { faCalendar} from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { faBus, faPerson, faCar, faInfo} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './header.css'

const Header = (type) => {
    const {user} = useContext(AuthContext);

    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0
        //seats: 1
    })

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'increment' ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    // const seats = () => {
    //     const a = options.adult
    //     const b = options.children
    //     const c = a+b
    //     return {c}
                                                    
    // }

    const {dispatch} = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({type: "NEW_SEARCH", payload: {destination, date, options}})
        navigate("/buses", { state: { destination, date, options} });
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <div className="h-container">
            <div className="h-row">
                <div className="h-col">
                    <Link to="/">Booking</Link>
                </div>
                <div className="h-col">
                    {user ? 
                    
                        <>
                            <button>{user.username}</button>
                            <button onClick={handleLogout}>LogOut</button>
                        </>
                    : (
                        <>
                            <Link to="/register">
                                <button>Register</button>
                            </Link>
                            <Link to="/login">
                                <button>Sign In</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className="h-row">
                <div className={type === "smallHeader" ? "h-col smallHeader" : "h-col"}>
                    <div className="icons">
                        <div className="icon active">
                            <FontAwesomeIcon icon={faBus} />
                            <Link to="/">Bus</Link>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCar} />
                            <Link to="/cars">Car Pools</Link>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faInfo} />
                            <Link to="/about">About</Link>
                        </div>
                    </div>
                </div>
                { type !== "smallHeader" &&
                    <>
                        <div className="h-col">
                            <h2>Make Your Reservation</h2>
                        </div>
                        <div className="h-col">
                            <div className="search">
                                <div className="search-item">
                                    <FontAwesomeIcon icon={faBus} />
                                    <input type="text" onChange={(e) => setDestination(e.target.value)} placeholder='Where are you going?' />
                                </div>

                                <div className="search-item">
                                    <FontAwesomeIcon icon={faCalendar} />
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
                                    <FontAwesomeIcon icon={faPerson} />
                                    <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult - ${options.children} children`}</span>
                                    {
                                        openOptions && (
                                            <div className="options">
                                                <div className="optionsItem">
                                                    <span>Adult</span>
                                                    <div className="optionsButton">
                                                        <button onClick={() => handleOption("adult", "decrement")} className='optionsBtn' disabled={options.adult <=1}>-</button>
                                                        <span>{options.adult}</span>
                                                        <button onClick={() => handleOption("adult", "increment")} className='optionsBtn'>+</button>
                                                    </div>
                                                </div>
                                                <div className="optionsItem">
                                                    <span>Children</span>
                                                    <div className="optionsButton">
                                                        <button onClick={() => handleOption("children", "decrement")} className='optionsBtn' disabled={options.children <=0}>-</button>
                                                        <span>{options.children}</span>
                                                        <button onClick={() => handleOption("children", "increment")} className='optionsBtn'>+</button>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="search-item">
                                    <button className='btnSearch' onClick={handleSearch}>Search</button>
                                </div>
                            </div>
                        </div>
                    </>
                }
                
            </div>
        </div>
    )
}

export default Header