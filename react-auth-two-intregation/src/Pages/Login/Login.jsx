import React from 'react'
import '../../App.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-init';

export default function Login() {

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('email',email, 'password', password);

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user)
        })
        .catch((error) => {
            console.log(error.massage)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-2xl text-center'>Login Now!  </h1>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input outline-0" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input outline-0" placeholder="Password" />
                                <label className="label">Checked</label>
                                <div className="flex gap-5 aling-center">
                                    <input type="checkbox" name="checkbox" id="" /><span>Remember me!</span>
                                </div>
                                <div className='text-right'><a className="link link-hover text-red">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
