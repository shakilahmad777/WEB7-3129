import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UsersDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    return (
        <div>
            <h2>Show Users Details</h2>
            <p>
               Name: {name}
            </p>
        </div>
    );
};

export default UsersDetails;