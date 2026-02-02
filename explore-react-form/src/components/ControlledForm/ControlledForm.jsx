import React, { useState } from 'react'

export default function ControlledForm() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited');

        // if (password.length < 6) {
        //     setError('password must be 6 charecter or longer');
        // }
        // else {
        //     setError('')
        // }
    }

    const handleOnChangePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 5) {
            setError('password must be 6 charecter or longer');
        }
        else {
            setError('')
        }
    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='mt-3.5 px-10 bg-slate-600 font-bold py-2.5 rounded'>
                <h3 className='mb-10 text-2xl'>This is Controlled Form</h3>
                <input type="email" name='email' placeholder='Your Email' required /><br />
                <input type="password" name='password' onChange={handleOnChangePassword} defaultValue={password} placeholder=' Your Password' /><br />
                <input type="submit" value="Submit" className='submit' />
            </form>
            <p style={{color: 'red'}}>
                {error}
            </p>
        </div>
    )
}
