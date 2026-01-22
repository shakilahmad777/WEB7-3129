import React from "react";
import { useLoaderData } from "react-router-dom";

export default function UsersDetails() {
  const users = useLoaderData();
  //   const {name, email, address, phone} = users;
  console.log('rokeyar kajin', users)
  return (
    <div className='border border-amber-400 rounded p-6'>
      <h2>{users.name}</h2>
      <p><span>{users.address.city}</span></p>
      <p><span>{users.email}</span></p>
      <p><span>{users.phone}</span></p>
    </div>
  );
}
