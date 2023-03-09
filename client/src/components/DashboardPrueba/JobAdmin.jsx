import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteJob, getJobs, updateJob } from "../../redux/actions/jobActions";
import {
  orderAplhabeticalJobs,
  orderByStateJobs,
} from "../../redux/actions/adminActions";

// NO SE ASUSTEN, POR EL MOMENTO LO DEJAMOS ASI, DESPUES VEMOS SI HAY TIEMPO PARA CAMBIAR,
// VAMOS EN EFOCARNOS EN LO QE FALTA
// LO IMPORTANTE ES QUE SI FUNCIONA
// NO TOQUES LOS FILTROS VICTOR :P

function JobAdmin() {
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [, /*order*/ setOrder] = useState("");
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  function handleOrderByNameJob(e) {
    e.preventDefault();
    dispatch(orderAplhabeticalJobs(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
    setRefresh();
  }

  function handleOrderByStateJob(e) {
    e.preventDefault();
    dispatch(orderByStateJobs(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
    setRefresh();
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(getJobs());
    setRefresh("default");
  }

  function enableJobs(e) {
    Swal.fire({
      title: "¿Estas seguro de Habilitar este Job?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Habilitalo!",
    }).then((result) => {
      const job = {
        id: e.id,
        name: e.name,
        description: e.description,
        state: "Deshabilitado",
      };

      if (result.value) {
        dispatch(updateJob(job));
        Swal.fire("Habilitado!", "El Job fue Habilitado.", "success");
      }
    });
  }

  function disableJobs(e) {
    Swal.fire({
      title: "¿Estas seguro de Deshabilitar este Job?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, desactivalo!",
    }).then((result) => {
      const job = {
        id: e.id,
        name: e.name,
        description: e.description,
        state: "Habilitado",
      };

      if (result.value) {
        dispatch(updateJob(job));
        Swal.fire("Deshabilitado!", "El Job fue deshabilitado.", "success");
      }
    });
  }

  function deleteJobs(id) {
    Swal.fire({
      title: "¿Estas seguro de Eliminar este Job?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminalo!",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteJob(id));
        Swal.fire("Eliminado!", "El producto fue Eliminado.", "success");
      }
    });
  }

  return (
    <div>
      <div>
        <Link to="/dashboard/jobs/create">
          <button className="bg-blue-600 mb-4 text-white active:bg-blue-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
            Modificar Jobs
          </button>
        </Link>
      </div>
      <div>
        <div>
          <select
            name="alfabetico"
            onChange={(e) => handleOrderByNameJob(e)}
            value={refresh}
          >
            <option disabled selected value="default">
              Alfabetico
            </option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>

          <select
            name="state"
            onChange={(e) => handleOrderByStateJob(e)}
            value={refresh}
          >
            <option disabled selected value="default">
              Estado
            </option>
            <option value="all">Todos</option>
            <option value="habilitado">Habilitado</option>
            <option value="deshabilitado">Deshabilitado</option>
          </select>

          <button
            className="bg-blue-600 ml-4 text-white active:bg-blue-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            onClick={handleClick}
          >
            Resetear Filtros
          </button>
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
                <tr className="bg-blue-500 bg-opacity-100 text-white">
                  <th data-priority="1">Name</th>
                  <th data-priority="2">Descripcion</th>
                  <th data-priority="3">Accion</th>
                </tr>
              </thead>
              {jobs?.map((e) => (
                <tbody key={e.id}>
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.description}</td>
                    <td>
                      {e.state === "Deshabilitado" ? (
                        <button onClick={() => enableJobs(e)} type="button">
                          Habilitar
                        </button>
                      ) : (
                        <button onClick={() => disableJobs(e)} type="button">
                          Deshabilitar
                        </button>
                      )}

                      <button type="button" onClick={() => deleteJobs(e.id)}>
                        Borrar
                      </button>
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

export default JobAdmin;
