import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserCard from "./userCard/UserCard";

export default function UsersPage() {
  const users = useSelector((state) => state.users);

  return (
    <>
      <h1>Users</h1>
      <hr></hr>
      {users.map((user) => (
        <>
          <UserCard user={user} />
        </>
      ))}
      <div class="mt-3">
        <NavLink to="/">
          <button class="border-2 border-red-700 bg-red-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-red-700 font-semibold">
            Volver
          </button>
        </NavLink>
      </div>
    </>
  );
}
