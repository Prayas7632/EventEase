import { useEffect, useState } from "react";
import BsContext from "./BsContext";
import { seats } from "../Data";

const BsState = (props) => {

    const [errorPopup, setErrorPopup] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const [movie, changeMovie] = useState('')

    const [time, changeTime] = useState('')

    const [noOfSeat, changeNoOfSeat] = useState({
        A1: 0,
        A2: 0,
        A3: 0,
        A4: 0,
        D1: 0,
        D2: 0,
    })

    const [lastbookingDetails, setLastBookingDetails] = useState(null)

    const handlePostBooking = async () => {
        const response = await fetch(`http://localhost:8080/api/booking`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
        })

        const data = await response.json()

        setErrorPopup(true)
        setErrorMessage(data.message)

        if (response.status === 200) {
            changeTime("")
            changeMovie("")

            setLastBookingDetails(data.data)

            window.localStorage.clear()
        } else {
            window.alert(await response.body())
        }

    }


    const handleGetBooking = async () => {
        const response = await fetch(`http://localhost:8080/api/booking`, {
            method: "Get"
        })

        const data = await response.json()

        setLastBookingDetails(data.data)

    }

    useEffect(() => {
        const movie = window.localStorage.getItem("movie")
        const slot = window.localStorage.getItem("slot")
        const seats = JSON.parse(window.localStorage.getItem("seats"))

        if (movie) {
            changeMovie(movie)
        }
        if (slot) {
            changeTime(slot)
        }
        if (seats) {
            changeNoOfSeat(seats)
        }
    }, [])


    return (
        <BsContext.Provider value={{ movie, changeMovie, time, changeTime, noOfSeat, changeNoOfSeat, lastbookingDetails, handleGetBooking, handlePostBooking, errorMessage, errorPopup, setErrorMessage, setErrorPopup }}>
            {props.children}
            {errorPopup && <h1>{errorMessage}</h1>}
        </BsContext.Provider>
    )
}

export default BsState;