import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import io from 'socket.io-client'

const Form = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})
    const [socket] = useState(() => io(':8001'))

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(('http://localhost:8001/api/addAuthor'), {
            name,
        }).then((res) => {
            console.log(res)
            socket.emit('added_new_author', res.data)
            socket.disconnect()
            navigate('/')
        }).catch((err) => {
            setErrors(err.response.data.errors)
        })
    }


    return (
        <div className='col-6 mx-auto'>
            <div className='d-flex justify-content-around align-items-center'>
                <h1>Authors</h1>
                <Link to={'/'}>back to home</Link>
            </div>
            <form onSubmit={submitHandler} className='border border-5 p-3'>
                <label>Author Name: </label>
                <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} value={name} />
                {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null}
                <br />
                <button className='btn btn-secondary mt-3'>Add Author!</button>
            </form>
        </div>
    )
}

export default Form