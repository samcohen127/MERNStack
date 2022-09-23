import React from 'react'
import { useParams } from 'react-router-dom'


const Word = () => {
    const { word, color, color2 } = useParams()

    return (
        <div>
            {
                isNaN(word)? 
                <h1 style={
                    color?
                    {color: `${color}`, backgroundColor: `${color2}`}
                    :null
                }>Your Word is: {word}</h1>:
                <h1>Your Number is {word} </h1>
            }
        </div>
    )
}

export default Word