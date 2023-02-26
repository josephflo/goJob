import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateUser } from "../../redux/actions/userActions";
import Swal from "sweetalert2";
import {  orderAplhabetical, orderByRole, orderByState } from "../../redux/actions/adminActions";



function UsersAdmin() {
  /* const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [order, setOrder] = useState('')
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

    function handleOrderByName (e) {
      e.preventDefault();
        dispatch(orderAplhabetical(e.target.value));
        setOrder(`Ordenado ${e.target.value}`);
        setRefresh();
    } */
    /* function handleOrderByRole (e) {
      e.preventDefault();
        dispatch(orderByRole(e.target.value));
        setOrder(`Ordenado ${e.target.value}`);
        setRefresh();
    } */
    /* function handleOrderByState (e) {
      e.preventDefault();
        dispatch(orderByState(e.target.value));
        setOrder(`Ordenado ${e.target.value}`);
        setRefresh();
    } */

  /*   function handleClick(e){
      e.preventDefault()
      dispatch(getUsers());
      setRefresh("default");
    } */
/* 
  function enableUser(e) {
    const users = {
      id: e.id,
      user: e.user,
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      phone: e.phone,
      role: e.role,
      state: "Habilitado",
    };
    dispatch(updateUser(users));
    Swal.fire({
      title: "Usuario habilitado",
    }).then(() => {
      window.location.reload();
    });
  }

  function disableUser(e) {
    Swal.fire({
      title: '¿Estas seguro de Deshabilitar este Usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desactivalo!'
  }).then((result) => {
    const users = {
      id: e.id,
      user: e.user,
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      phone: e.phone,
      role: e.role,
      state: "Habilitado",
    };
    if (result.value) {
    dispatch(updateUser(users));
    Swal.fire(
      'Deshabilitado!',
      'El Usuario fue deshabilitado.',
      'success'
    )
    }
  })
  } */

  return (
    <div>
      <div>
      <div>
       {/*  <select 
        name="alfabetico"
        onChange={(e) => handleOrderByName(e)}
        value={refresh}>
          <option disabled selected value="default">
            Alfabetico
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>  */}   
        {/* <select 
        name="role"
        onChange={(e) => handleOrderByRole(e)}
        value={refresh}>
          <option disabled selected value="default">Rol</option>
          <option value="all">Todos</option>
          <option value="comun">Comun</option>
          <option value="professional">Profesional</option>
          <option value="admin">Admin</option>
        </select>  */}
        {/* <select 
        name="state"
        onChange={(e) => handleOrderByState(e)}
        value={refresh}>
          <option disabled selected value="default">Estado</option>
          <option value="all">Todos</option>
          <option value="habilitado">Habilitado</option>
          <option value="deshabilitado">Deshabilitado</option>
  
        </select>  */}
        
        {/* <button

          className="btn btn-dark"
          onClick= {handleClick}
        >
          Resetear Filtros
        </button> */}
      </div>
    </div>

      <div className="bg-gray-100 text-gray-900 tracking-wider leading-normal">
        <div className="container w-full md:w-4/5 xl:w-3/5  mx-auto px-2">
          <div
            id="recipients"
            className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
          >
            <br />
            <table id="users" className="stripe hover w-full py-4 pb-4">
              <thead>
                <tr className="bg-indigo-400 bg-opacity-100 text-white">
                  
                  <th data-priority="1">Usuario</th>
                  <th data-priority="2">Nombre</th>
                  <th data-priority="3">Apellido</th>
                  <th data-priority="4">Email</th>
                  <th data-priority="5">Rol</th>
                  <th data-priority="6">Estado</th>
                  <th data-priority="7">Accion</th>
                </tr>
              </thead>
              {users?.map((e) => (
                  <tbody key={e.id}>
                    <tr>
                     
                      <td>{e.user}</td>
                      <td>{e.firstName}</td>
                      <td>{e.lastName}</td>
                      <td>{e.email}</td>
                      <td>{e.role}</td>
                      <td>{e.state}</td>
                      <td>
                        {e.state === "Deshabilitado" ? (
                          <button 
                          onClick={() => enableUser(e)} 
                          type="button">
                            Habilitar
                          </button>
                        ) : (
                          <button 
                          onClick={() => disableUser(e)} 
                          type="button">
                            Deshabilitar
                          </button>
                        )}
                      </td>
                    </tr>
                  </tbody>)) }
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersAdmin;
