import React, { useContext } from 'react'
import SelectMovie from '../Components/SelectMovie'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeat from '../Components/SelectSeat'
import LastBooking from '../Components/LastBooking'
import '../Css/Home.css'
import '../Css/LastBookingDetails.css'
import BsContext from '../Context/BsContext'

const Home = () => {

  const context = useContext(BsContext)

  const { movie, time, noOfSeat, handlePostBooking, setErrorPopup, setErrorMessage, } = context

  const handleBookNow = () => {
    console.log(`movie: '${movie}'`)
    console.log("!movie || movie.length == 0 = ", !movie || movie.length == 0)
    if (!movie || movie.length == 0) {
      setErrorPopup(true)
      setErrorMessage("Please Select a Movie")
    } else if (!time) {
      setErrorPopup(true)
      setErrorMessage("Please Select time slot")
    } else if (!noOfSeat || Object.values(noOfSeat).every(value => value === 0)) {
      setErrorPopup(true)
      setErrorMessage("Please select some seats")
    } else {
      handlePostBooking()
    }
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='select_movie_component'>
          <SelectMovie />
        </div>
        <div className='last_booking_details_container'>
          <LastBooking />
        </div>
      </div>
      <div className='time_seats_container'>
        <TimeSchedule />
        <SelectSeat />
        <button className='btn' onClick={() => {
          handleBookNow()
        }}> Book Now </button>
      </div>
    </div>
  )
}

export default Home