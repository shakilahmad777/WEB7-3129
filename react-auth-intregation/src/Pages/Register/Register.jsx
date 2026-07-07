// import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router'
// import { auth } from '../../firebase/firebase_init'

export default function Register() {
    const handleRegisterInfo = (e) => {
        e.preventDefault()
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const regExp = /--/
        if(password.length <= 6){
            alert('password must be 6 charecter')
            return;
        }
        console.log(firstName, lastName, email, password)
        // createUserWithEmailAndPassword(auth, )
    }
    return (
        <div className='flex justify-center w-full mt-10'>
            <div className="w-auto h-auto p-10 border-2 border-amber-500 relative rounded">
                <h1 className="text-5xl text-amber-500 absolute -top-8 bg-white left-15">Register Now!</h1>
                <div className="">
                    <form className='' onSubmit={handleRegisterInfo}>
                        <label>Name</label><br />
                        <input type="name" name='firstName' placeholder='Your First Name' required />
                        <input type="name" name='lastName' placeholder='Your Last Name' required /><br />
                        <label>Email</label><br />
                        <input type="email" name="email" placeholder='Your Email' required /><br />
                        <label>Password</label><br />
                        <input type="password" name="password" placeholder='Your Password' required /><br />
                        <input type="checkbox" name="checkbox" id="" /> <span>Accept Our Terms</span>
                        <input className='bg-amber-500 p-0.5 w-full rounded my-5 font-bold' type="submit" value="Submit" />
                    </form>
                    <p>Have an already Account? Please <Link className='text-blue-500 underline font-bold' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
