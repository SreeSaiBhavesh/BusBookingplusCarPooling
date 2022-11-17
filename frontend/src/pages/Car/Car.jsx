import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import './car.css'
import PhotoAlbum from 'react-photo-album'
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
// eslint-disable-next-line
import { AuthContext } from '../../context/AuthContext';
import HeaderCars from "../../components/HeaderCars/HeaderCars";
import ReserveCars from "../../components/reserveCars/ReserveCars";


const Car = () => {

    const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/cars")[2];

  const {data, loading, error, reFetch} = useFetch(`/cars/api/cars/find/${id}`);
    //console.log(data);

    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    const {date, options} = useContext(SearchContext);
    const MILLISECONDS_PER_DAYS = 1000 * 60 * 60 *24;
    function dayDifference(date1, date2) {
      const timeDifferent = Math.abs(date2.getTime() - date1.getTime());
      const differentDays = Math.ceil(timeDifferent / MILLISECONDS_PER_DAYS);
      return differentDays;
    }
    const days = (dayDifference(date[0].endDate, date[0].startDate));

    const handleClick = () => {
      if(user) {
        setOpen(true);
      } else {
        navigate('/login')
      }
    }


    const photos = [
        {
          src: data.image,
          width: 200,
          height: 200,
        },
        // {
        //   src: data.image1,
        //   width: 800,
        //   height: 600
        // },
        // {
        //   src: data.image2,
        //   width: 800,
        //   height: 600
        // },
        
      ];

    return (
        <>
            <HeaderCars type="smallHeader"/>
            {
                loading ? (<h2>Loading...</h2>) : (
                    <div className="busContainer">
                        <div className="busRow">
                            <div className="buscol">
                                <h2 className="busTitle">{data.name}</h2>
                                <span><FontAwesomeIcon icon={faMapLocation} />{data.address}</span>
                                <h4><strong>Price: ₹{data.price}</strong></h4>
                            </div>
                            <div className="buscol">
                                <button className="busBtn" onClick={handleClick}>Booking Now</button>
                            </div>
                            

                        </div>
                        <div className="busRow">
                            <PhotoAlbum layout="rows" photos={photos} />
                        </div>
                        {/* <div className="busRow">
                            <h3 className="busSubTitle">Description</h3>
                            <p className="busDesc">{data.desc}</p>

                        </div> */}
                    </div>
                )
            }
            {open && <ReserveCars setOpen={setOpen} CarId={id}/>}
            <Subscribe />
            <Footer />
        </>
    )
}

export default Car