import React from 'react'

export default function ActionForm() {
    const handleActionForm = (dataForm) => {
        console.log(dataForm.get('name', 'email'))
    }
  return (
    <div>
        <form action={handleActionForm}>
            <input type="text" name='name' placeholder='Your Name' required /><br />
            <input type="email" email='email' placeholder='Your Email' required /><br />
            <input type="submit" value={'Submit'} />
        </form>
    </div>
  )
}
