import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name="Mamshad"></Cousin>
                <Cousin name="Maisha"></Cousin>
            </section>
        </div>
    );
};

export default Aunty;