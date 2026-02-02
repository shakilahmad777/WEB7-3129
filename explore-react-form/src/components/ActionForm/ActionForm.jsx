import React from 'react'

export default function ActionForm() {
    const handleActionForm = (dataForm) => {
        console.log(dataForm.get('name', 'email'))
    }
    return (
        <div className='flex justify-center'>
            <form action={handleActionForm} className='mt-3.5 px-10 bg-slate-600 font-bold py-2.5 rounded'>
                <h3 className='mb-10 text-2xl'>This is Action Form</h3>
                <input type="text" name='name' placeholder='Your Name' required /><br />
                <input type="email" email='email' placeholder='Your Email' required /><br />
                <input type="submit" value={'Submit'} className='submit' />
            </form>
        </div>
    )
}
