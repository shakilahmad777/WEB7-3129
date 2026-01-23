import React from 'react'

export default function SimpleForm() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello hanibani', e.target.name.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Your Name' /> <br />
            <input type="text" name='email' placeholder='Your Email' /> <br />
            <input type="submit" value={'Submit'} />
        </form>
    </div>
  )
}
