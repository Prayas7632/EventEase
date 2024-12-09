import React, { useContext } from 'react'
import { seats } from '../Data'
import SeatInputs from './SeatInputs';
import '../Css/SelectSeats.css'
import BsContext from '../Context/BsContext';

const SelectSeat = () => {
  const context = useContext(BsContext);
  const {noOfSeat, changeNoOfSeats} = context;

  return (
    <div>
      <div className='SS_wrapper'>
        <h1 className='SS_heading'>Select Seats : </h1>
        <div className='SS_main_container'>
          {seats.map((el, index) => 
            <SeatInputs key={index} text={el} noOfSeat = {noOfSeat} changeNoOfSeats = {changeNoOfSeats}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default SelectSeat;