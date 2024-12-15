import React, { useContext, useEffect } from 'react'
import { seats } from '../Data'
import '../Css/LastBookingDetails.css'
import BsContext from '../Context/BsContext'

const LastBooking = () => {
  const context = useContext(BsContext)

  const { lastbookingDetails, handleGetBooking } = context
  useEffect(() => {
    handleGetBooking()
  }, [])

  return (
    <div className='last_booking_datails_container_main'>
      <h2 className='last_booking_details_header'>Last Booking : </h2>
      {
        lastbookingDetails ? (
          <>
            <div className='seats_container'>
              <p className='seats_header'>Seats :</p>
              <ul className='seats'>
                {seats.map((seat, index) => {
                  return <li className='seat_value' key={index}>
                    {seat} : {lastbookingDetails.seats[seat]}
                  </li>
                })}
              </ul>
            </div>
            <p className='slot' style={{ textAlign: 'left' }}>Slot : <span>{lastbookingDetails.slot}</span></p>
            <p className='movie'> Movie : <span>{lastbookingDetails.movie}</span></p>
          </>
        ) : (
          <p className='no_previous'>No previous Booking</p>
        )
      }

    </div>
  )
}

export default LastBooking