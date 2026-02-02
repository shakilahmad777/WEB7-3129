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
    <div  className='flex justify-center'>
        <form onSubmit={handleSubmit} className='mt-3.5 px-10 bg-slate-600 font-bold py-2.5 rounded'>
        <h3 className='mb-10 text-2xl'>This is Hook Form</h3>
            <input type="email" name="email" onChange={emailOnChange} placeholder='Email' /><br />
            <input type="password" name="password" onChange={passwordOnChange} placeholder='Password' /><br />
            <input type="submit" value="Submit" className='submit' />
        </form>
    </div>
  )
}
