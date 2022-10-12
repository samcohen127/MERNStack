import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditForm = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})

    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8001/api/authorPage/${id}`)
            .then((res) => {
                setName(res.data.name)

            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put((`http://localhost:8001/api/update/${id}`), {
            name,
        }).then((res) => {
            console.log(res)
            navigate('/')
        }).catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div className='col-6 mx-auto'>
            <div className='d-flex justify-content-around align-items-center'>
                <h1>Authors</h1>
                <Link to={'/'}>back to home</Link>
            </div>
            <h3 className='m-2'>Edit {name}</h3> <br />
            <form onSubmit={submitHandler}>
                <label>Author Name: </label>
                <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} value={name} />
                {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null}
                <br />
                <button className='btn btn-secondary mt-3'>Update Author!</button>
            </form>
        </div>
    )
}

export default EditForm