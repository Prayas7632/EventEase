import React from 'react'
import { seats } from '../Data'
import SeatInputs from './SeatInputs';
import '../Css/SelectSeats.css'

const SelectSeat = () => {
  console.log(seats);
  return (
    <div>
      <div className='SS_wrapper'>
        <h1 className='SS_heading'>Select Seats : </h1>
        <div className='SS_main_container'>
          {seats.map((el, index) => 
            <SeatInputs key={index} text={el} />
          )}
        </div>
      </div>
    </div>
  )
}

export default SelectSeat;