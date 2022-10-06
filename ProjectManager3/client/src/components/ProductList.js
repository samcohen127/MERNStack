import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const ProductList = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8001/api/allProducts')
            .then((res) => {
                console.log(res)
                setList(res.data)

            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='flex-wrap'>
            <h1>Product List</h1>
            {
                list.map((item, index) => {
                    return <div>
                        <Link to={`/product/${item._id}`}>
                            {item.title}
                        </Link>
                        {/* <button onClick={deleteHandler(item._id)}></button> */}
                    </div>
                })
            }
        </div>
    )
}

export default ProductList