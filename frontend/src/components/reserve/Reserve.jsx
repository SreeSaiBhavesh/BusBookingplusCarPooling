import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'
import './reserve.css'
import {useNavigate} from 'react-router-dom'

const Reserve = ({setOpen, BusId}) => {

  const navigate = useNavigate();

  const [selectedSeat, setSelectedSeat] = useState([]);
  const {data, loading, error} = useFetch(`/api/buses/seat/${BusId}`);

  const { date } = useContext(SearchContext);

  const getDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const dates = new Date(start.getTime());

    const date = [];

    while (date <= end) {
      date.push(new Date(dates).getTime());
      dates.setDate(dates.getDate() + 1);
    }

    return date;
  };

  const allDates = getDates(date[0].startDate, date[0].endDate);

  const isAvailable = (seatNumber) => {
    const isFound = seatNumber.unavailableDates.some((date) => allDates.includes(new Date(date).getTime()));

    return !isFound;

  }

  const handleSelect = (e) => {
    const selected = e.target.checked;
    const value = e.target.value;

    setSelectedSeat(selected ? [...selectedSeat, value] : selectedSeat.filter((item) => item !== value));

  }

  //console.log(selectedRoom);
  const handleClick = async () => {
    try {

      await Promise.all(
        selectedSeat.map((seatId) => {
          const res = axios.put(`/api/seats/availability/${seatId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );

      setOpen(false);
      navigate("/success");

    } catch(err) {



    }
  }

  return (
    <div className='rcontainer'>
      <div className="rreserve">
        <div className="rcol">
          <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)} />
        </div>
        <div className="rcol">
            <div className="rdiv">
              <span className="r-select">Select Your Seats:</span>
              {data.map((item) => (
                <div className="rcontent" key={item._id}>
                  <div className="rcontentinfo">
                    <div className="r">Name of Seat: <strong>{item.title}</strong></div>
                    <div className="r">Desc for Bus: <strong>{item.desc}</strong></div>
                    {/* <div className="r">Max of People: <strong>{item.maxPeople}</strong></div> */}
                    <div className="r">Price for Seat: <strong>${(item.price).toFixed(2)}</strong></div>
                  </div>
                  {item.seatNumbers.map((seatNumber) => (
                    <div className="rrom">
                      <input type="checkbox" disabled={!isAvailable(seatNumber)} id={seatNumber.number} value={seatNumber._id} onChange={handleSelect} />
                      <label className='rlabel' htmlFor={seatNumber.number}>Number of Seat: <strong>{seatNumber.number}</strong></label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
        </div>
        <button className='bookingNow' onClick={handleClick}>Booking Now</button>
      </div>
    </div>
  )
}

export default Reserve
