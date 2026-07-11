
import React, { use } from 'react'
import '../../App.css'
import { NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

export default function Register() {
    const {createUser} = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.massage)
            })
    }

    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     const firstName = e.target.firstName.value;
    //     const lastName = e.target.lastName.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;

    //     const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    //     if(!regExp.test(password)) {
    //         alert("please complate your full requarment")
    //         return;
    //     }

    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((result) => {

    //         console.log(result.user)
    //         })
    //         .catch((error) => {
    //             console.log(error.massage)
    //         })

    //     console.log('firstName :'+firstName+', lastName :'+lastName+', email :'+email+', password :'+password)
    // }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-2xl text-center'>Register Now!  </h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">First Name</label>
                                <input type="text" name='firstName' className="input outline-0" placeholder="First Name" />
                                <label className="label">Last Name</label>
                                <input type="text" name='lastName' className="input outline-0" placeholder="Last Name" />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input outline-0" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input outline-0" placeholder="Password" />
                                <label className="label">Checked</label>
                                <div className="flex gap-5 aling-center">
                                    <input type="checkbox" name="checkbox" id="" /><span>please accept your turms</span>
                                </div>
                                {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <p>Already have an account? Please <NavLink to="/login" className="text-red-300" >Login</NavLink> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
