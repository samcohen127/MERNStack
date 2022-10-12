import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PlayerList = () => {
    const [list, setList] = useState([])
    const [deleter, setDeleter] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8001/api/allPlayers')
            .then((res) => {
                console.log(res)
                setList(res.data)
                setDeleter(false)
            }).catch((err) => {
                console.log(err)
            })
    }, [deleter])


    const deleteHandler = (deleteid) => {
        axios.delete(`http://localhost:8001/api/delete/${deleteid}`)
            .then((res) => {
                console.log(res)
                setDeleter(true)
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className='flex-wrap mb-2'>
            <div className='d-flex justify-content-around align-items-center'>
                <h1>Player List</h1>
                <Link to={'/form'}>add a Player to the list</Link>
            </div>
            <table className='table table-hover border border-3'>
                <thead>
                    <th scope='col'>Name</th>
                    <th scope='col'>Position</th>
                    <th scope='col'>Actions</th>
                </thead>
                <tbody>
                    {
                        list.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={(e) => {
                                            const confirmBox = window.confirm(
                                                `Are you sure you want to remove ${player.name}?`
                                            )
                                            if (confirmBox) {
                                                deleteHandler(player._id)
                                            }
                                        }}
                                    >Delete!</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList