import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8001/api/findByID/${id}`)
        .then((res)=>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put((`http://localhost:8001/api/update/${id}`), {
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
            <h1>Make a Change to Your Product</h1>
            <form onSubmit={submitHandler}>
                <label>Title: </label>
                <input type="text" className='form-control' onChange={(e) => setTitle(e.target.value)} value={title} />
                <label>Price: </label>
                <input type="number" className='form-control' onChange={(e) => setPrice(e.target.value)} value={price} />
                <label>Description: </label>
                <input type="text" className='form-control' onChange={(e) => setDescription(e.target.value)} value={description} />
                <button className='btn btn-secondary mt-3'>Update!</button>
            </form>
        </div>
    )
}
export default EditForm