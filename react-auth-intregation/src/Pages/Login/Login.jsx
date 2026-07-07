import React from 'react'
import { Link } from 'react-router'

export default function Login() {
	const handleLoginInfo = (e) => {
		e.preventDefault()
	}
	return (
		<div className='flex justify-center w-full mt-10'>
			<div className="w-auto h-auto p-10 border-2 border-amber-500 relative rounded">
				<h1 className="text-4xl text-amber-500 absolute -top-8 bg-white left-15">Login Now!</h1>
				<div className="">
					<form className='' onSubmit={handleLoginInfo}>
						<label>Email</label><br />
						<input type="email" name="email" placeholder='Your Email' required /><br />
						<label>Password</label><br />
						<input type="password" name="password" placeholder='Your Password' required /><br />
						<input type="checkbox" name="checkbox" id="" /> <span>Remember you</span>
						<input className='bg-amber-500 p-0.5 w-full rounded my-5 font-bold' type="submit" value="Submit" />
					</form>
					<p>Are your new? Please <Link className='text-blue-500 underline font-bold' to="/register">Register</Link></p>
				</div>
			</div>
		</div>
	)
}
