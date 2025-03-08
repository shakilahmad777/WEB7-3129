import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    useEffect(() =>{
        nameRef.current.focus();
    }, [])

    
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passRef.current.value)
    } 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text" ref={nameRef} name="name" /> <br />
                <input
                type="email" ref={emailRef} name="email" /> <br />
                <input type="password" ref={passRef} name="password" required /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;