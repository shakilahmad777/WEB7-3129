import React from 'react'

export default function ActionForm() {
    const handleActionForm = (dataForm) => {
        console.log(dataForm.get('name', 'email'))
    }
    return (
        <div className='flex justify-center'>
            <form action={handleActionForm} className='mt-3.5 p-1 font-bold rounded form-content-effect'>
                <div className="form-content p-10 bg-slate-600">
                    <h3 className='mb-10 text-2xl'>This is Action Form</h3>
                    <input type="text" name='name' placeholder='Your Name' required /><br />
                    <input type="email" email='email' placeholder='Your Email' required /><br />
                    <input type="submit" value={'Submit'} className='submit' /> 
                </div>
            </form>
        </div>
    )
}
