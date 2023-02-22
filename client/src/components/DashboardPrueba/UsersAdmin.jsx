import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/actions";
import NavBar from "../navbarPortada/NavBar";

function UsersAdmin() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);



  return (
    <div>
      <NavBar />

      <div className="bg-gray-100 text-gray-900 tracking-wider leading-normal">
        <div className="container w-full md:w-4/5 xl:w-3/5  mx-auto px-2">
          <div
            id="recipients"
            className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
          >
            {/* <div className="bg-green-400 bg-opacity-100 text-gray-100 text-center">
          <p className="text-xl">Lista de Usuario</p>
        </div> */}
            <br />
            <table id="users" className="stripe hover w-full py-4 pb-4">
              <thead>
                <tr className="bg-indigo-400 bg-opacity-100 text-white">
                  <th data-priority="1">Id</th>
                  <th data-priority="2">Usuario</th>
                  <th data-priority="3">Nombre</th>
                  <th data-priority="4">Apellido</th>
                  <th data-priority="5">Email</th>
                  <th data-priority="6">Telefono</th>
                  <th data-priority="7">Rol</th>
                  <th data-priority="8">Estado</th>
                </tr>
              </thead>
              {users?.map((u) => (
                <tbody key={u.id}>
                  <tr>
                    <td>{u.id}</td>
                    <td>{u.user}</td>
                    <td>{u.firstName}</td>
                    <td>{u.lastName}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.role}</td>
                    <td>
                      {u?.state === 'Deshabilitado' ? (
                        <button /* onClick={() => enableUser(e)} */ type='button'>Habilitado</button>
                      ) : (
                        <button /* onClick={() => disableUser(e)} */ type='button'>Deshabilitado</button>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersAdmin;
