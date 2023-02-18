import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Users() {
  const users = useSelector((state) => state.users);

  return (
    <>
      <h1>Users</h1>
      <hr></hr>
      {users.map((user) => (
        <>
          <h1>
            Name: {user.firstName} {user.lastName}
          </h1>
          <h1>user: {user.user}</h1>
          <h1>email: {user.email}</h1>
          <h1>city: {user.city}</h1>
          <h1>phone: {user.phone}</h1>
          <h1>address: {user.address}</h1>
          <h1>role: {user.role}</h1>
          <hr></hr>
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
