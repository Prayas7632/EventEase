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

  const {movie, time, noOfSeat, handlePostBooking, setErrorPopup, setErrorMessage,} = context

  const handleBookNow = () => {
    if(!movie){
      setErrorPopup(true)
      setErrorMessage("Please Select a Movie")
    }
    if(!time){
      setErrorPopup(true)
      setErrorMessage("Please Select time slot")
    }
    if(!noOfSeat){
      setErrorPopup(true)
      setErrorMessage("Please Select no of seats")
    }else{
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
          <LastBooking/>
        </div>
      </div>
      <div className='time_seats_container'>
        <TimeSchedule/>
        <SelectSeat/>
        <button className='btn' onClick={() => {
          handleBookNow()
        }}> Book Now </button>
      </div>
    </div>
  )
}

export default Home