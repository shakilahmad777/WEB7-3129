import React from 'react'

export default function SimpleForm() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello hanibani', e.target.name.value, '&', e.target.email.value)
    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='mt-3.5 px-10 bg-slate-600 font-bold py-2.5 rounded '>
                <h3 className='mb-10 text-2xl'>This is Simple Form</h3>
                <input type="text" name='name' placeholder='Your Name' /> <br />
                <input type="text" name='email' placeholder='Your Email' /> <br />
                <input type="submit" value={'Submit'} className='submit'/>
            </form>
        </div>
    )
}
