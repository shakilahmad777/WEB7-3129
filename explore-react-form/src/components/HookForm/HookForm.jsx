import React from 'react'
import useInputField from '../../hooks/useInputField'

export default function HookForm() {
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('haldif9i', email, password)
    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='mt-3.5 p-1 font-bold rounded form-content-effect'>
                <div className="form-content p-10 bg-slate-600">
                    <h3 className='mb-10 text-2xl'>This is Hook Form</h3>
                    <input type="email" name="email" onChange={emailOnChange} placeholder='Email' /><br />
                    <input type="password" name="password" onChange={passwordOnChange} placeholder='Password' /><br />
                    <input type="submit" value="Submit" className='submit' />
                </div>
            </form>
        </div>
    )
}
