import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

export default function Users() {
    const usersLoad = useLoaderData();
    const users = usersLoad.map((userSort) => {
      userSort = {
        id: userSort.id,
        name: userSort.name,
        email: userSort.email,
        address: userSort.address.city,
        phone: userSort.phone,
      };
      return userSort;
    });

  console.log("makeUlser", users);
  return (
    <div className="grid md:grid-cols-3 gap-3.5">
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}
