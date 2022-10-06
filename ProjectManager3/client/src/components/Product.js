import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate,Link } from "react-router-dom";


const Product = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8001/api/findById/${id}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const navigate = useNavigate()

    const deleteHandler = () => {
        axios.delete(`http://localhost:8001/api/delete/${id}`)
        navigate('/product')
    }
    return (
        <div>
            <h1>{product.title}</h1>
            <h6>Price: ${product.price}</h6>
            <h6>Description: {product.description}</h6>
            <Link className='btn btn-secondary m-1' to={`/edit/${id}`}>Edit</Link>
            <button className='btn btn-danger' onClick={deleteHandler}>Delete Product</button>
        </div>
    )
}

export default Product