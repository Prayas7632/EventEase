import React from 'react'
import '../Css/SeatInput.css'

const SeatInputs = ({text, noOfSeat, changeNoOfSeat}) => {

  const change_seats = (e) =>{
    changeNoOfSeat({...noOfSeat,[e.target.name]:Number(e.target.value)})

    window.localStorage.setItem("seats",
      JSON.stringify({
        ...noOfSeat, [e.target.name]:Number(e.target.value)
      })
    )
  }

  return (
    <div className='form-check-label seats'>
        <span className='text'>{text}</span>
        <input type='number' className='seat-input' placeholder='0' max = "30" min = "0" name = {text} onChange={change_seats} value = {noOfSeat[text]}></input>
    </div>
  )
}

export default SeatInputs