import React from 'react'
import { Link } from 'react-router-dom'
import './itembuses.css'

const ItemBuses = ({item}) => {
  return (
    <div className='itemBuses'>
      <div className="itemBusesCol">
          <img src={item.image} alt={item.name} />
      </div>
      <div className="itemBusesCol">
            <div className="itemBusDivs">
                <h2>{item.name}</h2>
            </div>
            <div className="itemBusesDivs">
                <div className="itemBusDiv">
                    <span className='rating'>9.6</span>
                </div>
                <div className="itemBusDiv">
                    <span>Wonderful</span>
                    <span>611 Reviews</span>
                </div>
            </div>
      </div>
      <div className="itemBusesCol">
            <div className="itemBusesColDiv">
                <h2>₹{(item.price).toFixed(2)}</h2>
            </div>
            <div className="itemBusesColDiv">
                <span>Free Wi-Fi</span>
                <span>Free Waterbottle</span>
                <span>Free kerchiefs</span>
            </div>
            <div className="itemBusesColDiv">
                <Link to={`/buses/${item._id}`}>
                    <button>View Deal</button>
                </Link>
            </div>
      </div>
    </div>
  )
}

export default ItemBuses