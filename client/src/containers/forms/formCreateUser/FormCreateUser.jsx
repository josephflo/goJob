import React from "react";
import NavBarPortada from "../../../components/navBar/navBarPortada/NavBarPortada";

export default function FormCreateUser() {
  return (
    <>
      <div class="p-1.5 sticky top-0 z-50 bg-white ">
        <NavBarPortada />
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
          <div className="text-center lg:text-left">
            <h2 className="mt-6 text-3xl font-extrabold text-blue-900">
              Crea tu usuario
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Si ya tienes una cuenta
              <a
                href=""
                className="font-medium text-blue-900 hover:text-blue-500"
              >
                {" "}
                Inicia Sesion
              </a>
            </p>
          </div>
          <div className="mt-6">
            <form className="space-y-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese nombre
                  </label>
                  <input
                    type="text"
                    className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese apellido
                  </label>
                  <input
                    type="text"
                    className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Apellido"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese email
                  </label>
                  <input
                    type="text"
                    className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese password
                  </label>
                  <input
                    type="text"
                    className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese Ciudad
                  </label>
                  <input
                    type="text"
                    className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese su dirección
                  </label>
                  <input
                    type="text"
                    className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Domicilio"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Imagen"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese imagen de su perfil
                  </label>
                  <input
                    type="text"
                    className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Imagen de perfil"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Phone"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese número de telefono
                  </label>
                  <input
                    type="text"
                    className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Telefono - Cel"
                  />
                </div>
              </div>
              <div>
                <button className="mt-3 w-full py-3 bg-blue-900 text-white ">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
