import { useEffect } from "react";
import useInputState from "../Hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rojoni'); first option
    // const [email, handleEmailChange] = useInputState('Rojoni@'); first option
    // const [pass, handlePassChange] = useInputState(); first option
    const nameState = useInputState('Imran');
    const emailState = useInputState('Imran@');
    const passState = useInputState();

    const onSubmit = (e) =>{
        // console.log(name, email, pass) first option
        console.log('name', nameState.value, 'email', emailState.value, 'password', passState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                {/* <input
                type="text" value={name} onChange={handleNameChange} name="name" /> <br />
                <input */}
                {/* <input
                type="email" value={email} onChange={handleEmailChange} name="email" /> <br />
                <input type="password" value={pass} onChange={handlePassChange} name="password" required /> <br /> */}
                
                <input type="text" {...nameState} name="name" /> <br />
                <input type="email" {...emailState} name="email" /> <br />
                <input type="pass" {...passState} name="pass" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;