import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase-init'

export default function Login() {
    const providerGoogle = new GoogleAuthProvider();
    const providerGighub = new GithubAuthProvider();

    const [user, setUser] = useState(null);

    const handleSigninWithGoogle = () => {
        signInWithPopup(auth, providerGoogle).then(result => {
            const users = result.user;
            setUser(users)
            console.log(result)
        }).catch(error => {
            console.log(error)
        })
    };

    const handleSigninWithGitHub = () => {
        signInWithPopup(auth, providerGighub).then(result => {
            console.log('github',result)
            setUser(result.user)
        }).catch(error => {
            console.log(error)
        })
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log('SignOut Successful')
            setUser(null)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <h1>Login With Google</h1>
            {
                user ? <button onClick={handleSignOut}>Sing Out</button> : <div>
                    <button onClick={() => handleSigninWithGoogle()}>SignIn With Google</button>
                    <button onClick={() => handleSigninWithGitHub()}>SignIn With GitHub</button>
                </div>
            }
            {
                user && <div className="">
                    <h2>{user.displayName}</h2>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    )
}
