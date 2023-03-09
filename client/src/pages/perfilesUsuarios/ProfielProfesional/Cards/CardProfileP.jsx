import React from "react";
import { Link } from "react-router-dom";

export default function CardProfileP({
  id,
  provincia,
  ciudad,
  direccion,
  firstName,
  lastName,
  email,
  role,
  rating_promedio,
}) {
  const localStorage = window.localStorage.getItem("userStorage");

  return (
    <div
      key={id}
      className="flex flex-col justify-center items-center h-[100vh]"
    >
      <div className="relative flex flex-col items-center  w-[700px] max-w-[95%] mx-auto bg-gray-200 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-white dark:text-white h-30 overflow-hidden border-solid-gray-300  p-4 bg-blue-500 ">
            Información general
          </h1>
          <div className="flex flex-col items-start h-20 justify-center ">
            <h1 className="mt-2 px-2 text-base h-30 font-medium text-navy-700 dark:text-white">
              {/* Usuario {role} */}
              Usuario {JSON.parse(localStorage).role}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start h-20 justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Nombre</p>
            {JSON.parse(localStorage).lastName === "sin apellido" ? (
              <p className="text-base h-20 font-medium text-navy-700 dark:text-white">
                {JSON.parse(localStorage).firstName}
              </p>
            ) : (
              <p className="text-base h-20 font-medium text-navy-700 dark:text-white">
                {JSON.parse(localStorage).firstName}{" "}
                {JSON.parse(localStorage).lastName}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-center h-20  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Lugar de residencia</p>
            {JSON.parse(localStorage).provincia ||
            JSON.parse(localStorage).ciudad ||
            JSON.parse(localStorage).direccion ? (
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {JSON.parse(localStorage).provincia},{" "}
                {JSON.parse(localStorage).ciudad},{" "}
                {JSON.parse(localStorage).direccion}
              </p>
            ) : (
              <p className="text-base font-medium text-navy-700 dark:text-white">
                Sin datos
              </p>
            )}
          </div>

          <div className="flex flex-col items-start justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Email</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {JSON.parse(localStorage).email}
            </p>
          </div>

          <div className="flex flex-col justify-center  bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Rating</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {JSON.parse(localStorage).rating_promedio}
            </p>
          </div>

          {/* <div className="col-span-1">
            <Link to="/profilep/modificar">
              <button className="h-13 py-2  gap-4 bg-blue-500 p-4 text-white  mt-2 w-[80%]  font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded ">
                Modificar datos personales
              </button>
            </Link>
          </div> */}

        </div>
      </div>
    </div>
  );
}
