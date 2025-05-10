import React from 'react';
import './Grandpa.css'
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';


const Grandpa = () => {
    const asset = 'daimond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;