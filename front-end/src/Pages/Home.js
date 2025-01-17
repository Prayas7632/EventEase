import React from 'react'
import SelectMovie from '../Components/SelectMovie'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeat from '../Components/SelectSeat'
import LastBooking from '../Components/LastBooking'
import '../Css/Home.css'
import '../Css/LastBookingDetails.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='select_movie_component'>
          <SelectMovie />
        </div>
        <div className='last_booking_details_container'>
          <LastBooking/>
        </div>
      </div>
      <div className='time_seats_container'>
        <TimeSchedule/>
        <SelectSeat/>
        <button className='btn'> Book Now </button>
      </div>
    </div>
  )
}

export default Home