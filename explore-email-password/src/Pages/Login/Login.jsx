import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../../firebase__config__init';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function Login() {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('ami thik achi', email, password)

        setSuccess('')
        setErrorMessage('')

        // Password Valid
        // const passwordRegEx = /(?=.*[a-z](?=.*[A-Z])(?=.*\d){6, })/
        const passPatturnLowercase = /(?=.*[a-z])/
        const passPatturnUpercase = /(?=.*[A-Z])/
        const passPatturCharacters = /(?=.*\d)/
        // const passPatturnSpecialCharacters = /[A-Za-z\d@$!%*?&]/

        if(!passPatturnLowercase.test(password)){
            setErrorMessage('PASSWORD MUST BE ONE LOWARECASE')
            return;
        }
        if(!passPatturnUpercase.test(password)){
            setErrorMessage('PASSWORD MUST BE ONE UPERCASE')
            return;
        }
        if(!passPatturCharacters.test(password)){
            setErrorMessage('PASSWORD MUST BE ONE CHARACTERS')
            return;
        }
        if(password.length < 6){
            setErrorMessage('PASSWORD MUST BE MINIMUM 6 CHARACTERS')
            return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result)
            setSuccess(true)
        })
        .catch(error => {
            console.log(error)
            setErrorMessage(error.message)
        })
    }

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }
    return (
        <div className='flex justify-center m-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <div className="flex relative">
                        <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                        <button onClick={handleShowPassword} className='absolute right-7 top-2 md:text-2xl'>
                            {
                                showPassword ? <FaRegEye /> : <FaRegEyeSlash />
                            }
                        </button>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <input className='btn' type="submit" value="Submit" />
                    </form>
                    {
                        errorMessage && <p className='text-red-500'>{errorMessage}</p>
                    }
                    {
                        success && <p className='text-green-500'>user has been success</p>
                    }
                </div>
            </div>
        </div>
    )
}
