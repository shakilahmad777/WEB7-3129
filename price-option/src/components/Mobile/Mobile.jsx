import { useEffect, useState } from "react";

const Mobile = () => {
    const [phones, setPhones] = useState([])
        useEffect(() => {
            fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => res.json())
            .then(data => setPhones(data.data))
        },[])
        console.log(phones)
    return (
        <div>
            <h2 className="text-orange-500 text-3xl">Phone: {phones.length}</h2>
        </div>
    );
};

export default Mobile;