import React, { use } from "react";
import { Link } from "react-router-dom";

export default function Users2({ usersPromise }) {
  const users = use(usersPromise);
  const userStyle = {
    border: "1px solid red",
    padding: "10px",
    borderRadius: "0.5rem",
  };
  return (
    <div className="grid md:grid-cols-3 gap-3.5">
      {users.map((user) => (
        <div style={userStyle}>
          <h2>{user.name}</h2>
          <p>
            <span>{user.address.city}</span>
          </p>
          <p>
            <span>{user.email}</span>
          </p>
          <p>
            <span>{user.phone}</span>
          </p>
          <Link>
            <button
              type="button"
              className="border border-amber-400 p-1.5 rounded text-pink-700 font-bold"
            >
              Show Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
