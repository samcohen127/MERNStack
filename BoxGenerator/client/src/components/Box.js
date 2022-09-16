import React from 'react'

const Box = ({ color }) => {
    const boxStyle = {
        backgroundColor: color,
        height: '150px',
        width: '150px',
        margin: '5px',

    }
    return (
        <div>
            <div style={boxStyle} />
        </div>
    )
}

export default Box