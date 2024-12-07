import React, { useContext } from 'react'
import { moviesList } from '../Data'
import RadioComponent from './RadioComponent'
import '../Css/SelectMovie.css'
import BsContext from '../Context/BsContext'

const SelectMovie = () => {
    const context = useContext(BsContext);

    const {movie, changeMovie} = context
    const handleChangeMovie = (val) => {
        changeMovie(val)

        window.localStorage.setItem("movie", val)
    }

    return (
        <div>
            <h1 className='SM_heading'>
                Select A Movie
            </h1>
            <div className='SM_main_container'>
                {moviesList.map((el, index) => {
                    return <RadioComponent text={el} key={index} data={movie} changeSelection = {handleChangeMovie}/>
                })}
            </div>
        </div>
    )
}

export default SelectMovie