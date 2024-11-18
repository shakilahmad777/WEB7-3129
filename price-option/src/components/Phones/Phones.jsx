import { useState } from "react";

const Phones = () => {
    const [phones, setPhones] = useState([])

    
    

    return (
        <div>
            <h2>Phones : {phones.length}</h2>
            <h1></h1>
        </div>
    );
};

export default Phones;