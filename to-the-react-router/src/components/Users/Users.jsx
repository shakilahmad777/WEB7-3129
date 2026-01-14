import React from "react";
import { useLoaderData } from 'react-router-dom'

export default function Users() {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      {
            users.map(user => <li>
                {user.name}
            </li>)
        }
    </div>
  );
}
