import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";


const Product = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8001/api/findById/${id}`)
        .then((res)=> {
            console.log(res.data)
            setProduct(res.data)
        }) .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>
    )
}

export default Product