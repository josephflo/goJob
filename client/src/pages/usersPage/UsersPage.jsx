import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserCard from "./userCard/UserCard";

export default function UsersPage() {
  const users = useSelector((state) => state.users);

  return (
    <>
      <h1 className=" text-4xl text-black mx-auto p-4 text-center">Usuarios</h1>
      <hr></hr>
      <div className="p-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Id
                </th>
                <th scope="col" className="px-3 py-3">
                  Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Role
                </th>
                <th scope="col" className="px-3 py-3">
                  Job
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
                </th>
                <th scope="col" className="px-3 py-3">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <>
                  <UserCard user={user} />
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="m-3 flex justify-center ">
        <NavLink to="/">
          <button className="border-2 border-red-700 bg-red-700 h-[40px] text-white m-2 w-[150px] rounded-md hover:bg-transparent hover:text-red-700 font-semibold">
            Volver
          </button>
        </NavLink>
      </div>
    </>
  );
}
