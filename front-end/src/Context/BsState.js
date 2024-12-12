import { useEffect, useState } from "react";
import BsContext from "./BsContext";
import { seats } from "../Data";

const BsState = (props) => {

    const [errorPopup, setErrorPopup] = useState("False")
    const [errorMessage, setErrorMessage] = useState("")


    const [movie, changeMovie] = useState('')

    const [time, changeTime] = useState('')

    const [noOfSeat, changeNoOfSeat] = useState({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
    })

    const [lastbookingDetails, setLastBookingDetails] = useState(null)

    const handlePostBooking = async () => {
        const response = await fetch(`https://localhost:8080/api/booking`, {
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
        }

    }


    const handleGetBooking = async () => {
        const response = await fetch(`https://localhost:8080/api/booking`, {
            method: "Get"
        })

        const data = await response.json()

        setLastBookingDetails(data.data)

    }

    useEffect(()=>{
        const movie = window.localStorage.getItem("movie")
        const slot = window.localStorage.getItem("slot")
        const seats = JSON.parse(window.localStorage.getItem("seats"))

        if(movie){
            changeMovie(movie)
        }
        if(slot){
            changeTime(slot)
        }
        if(seats){
            changeNoOfSeat(seats)
        }
    }, [])


    return (
        <BsContext.Provider value={{ movie, changeMovie, time, changeTime, noOfSeat, changeNoOfSeat, lastbookingDetails, handleGetBooking, handlePostBooking , errorMessage, errorPopup,setErrorMessage, setErrorPopup}}>{props.children}</BsContext.Provider>
    )
}

export default BsState;