import { useState } from "react";

const StateFullForm = () => {

    const [name, setName] = useState();    
    const [email, setEmail] = useState();    
    const [password, setPassword] = useState();    
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    }

    console.log(name)
    console.log(email)
    console.log(password)

    const handleNameChange = (e) => {
        setName(e.target.value)
        // setEmail(e.target.value)
    }
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        // setEmail(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        // setEmail(e.target.value)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleNameChange}
                type="text" name="name" /> <br />
                <input
                onChange={handleEmailChange}
                type="email" name="email" /> <br />
                <input
                onChange={handlePasswordChange}
                type="password" name="password" required /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFullForm;