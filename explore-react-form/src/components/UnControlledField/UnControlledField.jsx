import React, { useRef } from 'react'

export default function UnControlledField() {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log('rb', email, password)
    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='mt-3.5 p-1 font-bold rounded form-content-effect'>
                <div className="form-content p-10 bg-slate-600">
                    <h3 className='mb-10 text-2xl'>This is UnControlled Form</h3>
                    <input type="email" ref={emailRef} name="email" placeholder='Your Email' /><br />
                    <input type="password" ref={passwordRef} name="password" placeholder='Your Password' /><br />
                    <input type="submit" value="Submit" className='submit' />
                </div>
            </form>
        </div>
    )
}
