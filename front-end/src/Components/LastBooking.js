import React from 'react'
import { seats } from '../Data'
import '../Css/LastBookingDetails.css'

const LastBooking = () => {
  return (
    <div className='last_booking_datails_container_main'>
      <h2 className='last_booking_details_header'>Last Booking</h2>
      <div className='seats_container'>
        <p className='seats_header'>Seats :</p>
        <ul className='seats'>
          {seats.map((seats, index) => {
            return <li className='seat_value' key={index}>
              {seats} : 0
            </li>
          })}
        </ul>
      </div>
      <p className='slot' style={{textAlign:'left'}}>Slot : 00:00 AM <span></span></p>
      <p className='movie'> Movie : Tenet</p>
    </div>
  )
}

export default LastBooking