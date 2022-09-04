import React from 'react'
import { useState } from 'react'

const PersonCard = (props) => {

    const { firstName, lastName, age, hairColor } = props
    const [newAge, setNewAge] = useState(age)

    const handleClick = () => {
        setNewAge(newAge+1);
    }

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {newAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Birthday!!</button>
        </div>
    )
}

export default PersonCard