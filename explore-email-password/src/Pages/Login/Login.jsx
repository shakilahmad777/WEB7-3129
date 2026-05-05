import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { auth } from '../../../firebase__config__init';
import { Link } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export default function Login() {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess('')
        setError('') // ERROR RESET

        

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(true)
                if(!result.user.emailVerified){
                    alert('please verified your email')
                }
            })
            .catch(error => {
                setError(error.message);
                console.log(error.massage)
            });

        console.log('ami thik achi', email)
    }

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;

        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('please check your email and reset password')
        })
        .catch(() => {
            console.log(error.message)
        })
        console.log('reset gooo')
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-2xl text-center'>Login Now</h1>
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" ref={emailRef} className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} name="password" className="input" placeholder="Password" required />
                                <button onClick={handleShowPassword} className='absolute right-7 top-2 md:text-2xl'>
                                    {
                                        showPassword ? <FaRegEye /> : <FaRegEyeSlash />
                                    }
                                </button>
                            </div>
                            <div><a className="link link-hover" onClick={handleResetPassword}>Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <p>Are you new? Please <Link className='text-blue-500 underline' to="/registration">Registration</Link></p>
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                        {
                            success && <p className='text-green-500'>You are successfull login</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
