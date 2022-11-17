import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { AuthContext } from '../../context/AuthContext';
import "./register.css"

const Register = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
        email: undefined,
        isAdmin: false,
    });

    const {loading, error, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
    } 

    const handleReg = async e => {
        e.preventDefault();
        navigate("/login")
    }

    const handleClick = async e => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"})

        try {

            const res = await axios.post("/api/auth/register", credentials);
            // dispatch({type: "REGISTER_SUCCESS", payload: res.data})
            navigate("/login");

        }  catch(error) {
            // dispatch({type: "REGISTER_FAIL", payload: error.response.data})
        }
           
    };

  return (
    <div className='loginContainer'>
        <div className="loginRow">
            <div className="loginCol">
                    <h2>Booking</h2>
            </div>
        </div>
        <div className="loginRow">
            <div className="loginCol">
                <input type="text" id="username" onChange={handleChange} className="loginInput" placeholder='Username' />
                <input type="email" id="email" onChange={handleChange} className="loginInput" placeholder='Email Id' />
                <input type="password" id="password" onChange={handleChange} className="loginInput" placeholder='Password' />
                <div className="loginButton">
                    <button disabled={loading} onClick={handleClick}>Register</button>
                    {error && <h2>{error.message}</h2>}
                </div>
                <div className="loginButton">
                    <button onClick={handleReg}>Login</button>
                </div>
            </div>
        </div>
        <div className="loginRow">
            <div className="loginCol">
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Register
