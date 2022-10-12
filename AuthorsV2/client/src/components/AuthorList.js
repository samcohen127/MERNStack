import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import io from 'socket.io-client'

const AuthorList = () => {
    const [list, setList] = useState([])
    const [socket] = useState(() => io(':8001'))

    useEffect(() => {
        console.log('Inside of useEffect for socket.io-client')
        socket.on("connect", () => {
            console.log('We are connected')
            console.log(socket.id)
        })
        socket.on('added_author', (data) => {
            setList((currentAuthorList) => [data, ...currentAuthorList])
        })
        socket.on('author_deleted', (deletedAuthorId) => {
            setList((currentAuthorList) => {
                return currentAuthorList.filter((oneAuthor) => {
                    return oneAuthor._id !== deletedAuthorId
                })
            })

        })
        return () => socket.disconnect()
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8001/api/allAuthors')
            .then((res) => {
                console.log(res)
                setList(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])





    return (
        <div className='flex-wrap mb-2'>
            <div className='d-flex justify-content-around align-items-center'>
                <h1>Author Shelter</h1>
                <Link to={'/form'}>add a Author to the list</Link>
            </div>
            <table className='table table-hover border border-3'>
                <thead>
                    <th scope='col'>Name</th>
                    <th scope='col'>Actions</th>
                </thead>
                <tbody>
                    {
                        list.map((author, index) => (
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td>
                                    <Link className='btn btn-secondary m-1' to={`/edit/${author._id}`}>Edit</Link>
                                    <Link className='btn btn-danger' to={`/delete/${author._id}`}>Delete!</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList