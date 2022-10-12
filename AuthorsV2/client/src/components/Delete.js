import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import io from 'socket.io-client'
import axios from 'axios'


const Delete = () => {
    const [socket] = useState(() => io(':8001'))
    const { id } = useParams()
    const navigate = useNavigate()

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8001/api/delete/${id}`)
            .then((res) => {
                console.log(res)
                socket.emit('deleted_author', id)
                socket.disconnect()
                navigate('/')
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <h1>ARE YOU SURE?</h1>
            <button className='btn btn-danger m-1' onClick={(e) => deleteHandler(id)}>Yes, Delete</button>
            <Link className='btn btn-primary' to='/' >No, take me back</Link>
        </div>
    )
}

export default Delete