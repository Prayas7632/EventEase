import React from 'react'
import '../Css/SeatInput.css'

const SeatInputs = ({key, text}) => {
  return (
    <div className='form-check-label seats'>
        <span className='text'>{text}</span>
        <input type='number' className='seat-input' placeholder='0' max = "30" min = "0"></input>
    </div>
  )
}

export default SeatInputs