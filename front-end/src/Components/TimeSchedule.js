import React from 'react'
import { slots } from '../Data'
import RadioComponent from './RadioComponent'
import '../Css/TimeSchedule.css'

const TimeSchedule = () => {
  return (
    <div>
      <div className='Slot_container'>
        <h1 className='TS_heading'>Select a Schedule</h1>
        <div className='TS_main_container'>{slots.map((el, index) => {
          return (
            <RadioComponent text={el} key={index} />
          )
        })}</div>
      </div>
    </div>
  )
}

export default TimeSchedule