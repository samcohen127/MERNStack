import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(('http://localhost:8001/api/addProduct'), {
            title,
            price,
            description
        }).then((res) => {
            console.log(res)
            navigate('/product')
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className='col-6 mx-auto'>
            <h1>Product Manger</h1>
            <form onSubmit={submitHandler}>
                <label>Title: </label>
                <input type="text" className='form-control' onChange={(e) => setTitle(e.target.value)} value={title} />
                <label>Price: </label>
                <input type="number" className='form-control' onChange={(e) => setPrice(e.target.value)} value={price} />
                <label>Description: </label>
                <input type="text" className='form-control' onChange={(e) => setDescription(e.target.value)} value={description} />
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default Form