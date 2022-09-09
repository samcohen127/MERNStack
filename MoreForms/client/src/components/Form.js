import React, { useState } from 'react'


const Form = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstName && lastName && email && password && confirmPassword) {
            if (firstName.length >= 3) {
                console.log(e)
            }
            else {
                console.log('bad data: first name too short')
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
            }
        }
        else {
            console.log('bad data: you need all the data present')
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        }
    }

    return (
        <div>
            <h1>Get that Data!</h1>
            <form className='form col-4 mx-auto' onSubmit={handleSubmit}>
                <label className='form-label'>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" />
                {
                    (firstName.length < 2 && firstName !== '') ? <p className='text-danger'>First Name must be more than 2 characters</p> : ''
                }
                <label className='form-label'>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" />
                {
                    (lastName.length < 2 && lastName !== '') ? <p className='text-danger'>Last Name must be more than 2 characters</p> : ''
                }
                <label className='form-label'>Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                {
                    (email.length < 2 && email !== '') ? <p className='text-danger'>Email must be more than 2 characters</p> : ''
                }
                <label className='form-label'>Password: </label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                {
                    (password.length < 8 && password !== '') ? <p className='text-danger'>Password must be at least 8 characters</p> : ''
                }
                <label className='form-label'>Confirm Password: </label>
                <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" />
                {
                    (confirmPassword !== password && confirmPassword !=='') ? <p className='text-danger'>Passwords must match </p> : ''
                }
                <button className='btn btn-dark mt-3'>Submit</button>

            </form>

            <h2 className='py-5'>Collected Data</h2>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
            <h3>{confirmPassword}</h3>
        </div>
    )
}

export default Form