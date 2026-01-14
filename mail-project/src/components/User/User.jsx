import React from "react";
import { Link } from "react-router-dom";

export default function User({ user }) {
  const {id, name, email, address, phone} = user;
  console.log("this users", name, email, address, phone);

  const userStyle = {
    border: "1px solid red",
    padding: "10px",
    borderRadius: '0.5rem' 
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>
        <span>Address: {address}</span>
      </p>
      <p>
        <span>Email: {email}</span>
      </p>
      <p>
        <span>Phone: {phone}</span>
      </p>
      <Link to={`/users/${id}`}>
        <button
          type="button"
          className="border border-amber-400 p-1.5 rounded text-pink-700 font-bold"
        >
          Show Details
        </button>
      </Link>
    </div>
  );
}
