import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Form = () => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const isEnabled = name.length > 2;

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(('http://localhost:8001/api/addPlayer'), {
            name,
            position
        }).then((res) => {
            console.log(res)
            navigate('/players/list')
        }).catch((err) => {
            setErrors(err.response.data.errors)
        })
    }


    return (
        <div className='col-6 mx-auto'>
            <div className='d-flex justify-content-around align-items-center'>
                <h1>Players</h1>
                <Link to={'/players/list'}>back to home</Link>
            </div>
            <form onSubmit={submitHandler} className='border border-5 p-3'>
                <label>Player Name: (3 Character Minimun) </label>
                <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} value={name} />
                {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null}
                <br />
                <label>Player Position: (Optional)</label>
                <input type="text" className='form-control' onChange={(e) => setPosition(e.target.value)} value={position} />
                {errors.position ? <span className='text-danger'>{errors.position.message}</span> : null}
                <br />
                <button className='btn btn-success mt-3' disabled={!isEnabled}>Add Player!</button>
            </form>
        </div>
    )
}

export default Form