import { useState } from "react";

export default function Form({
  changeInput,
  handleOpenFormByRol,
  handleRegister,
  changeInputImage,
}) {
  const [btnLabel, setBtnLabel] = useState({
    open: false,
  });

  const changeState = (e) => {
    const value = e.target.value;
    setBtnLabel({
      open: true,
      rol: value,
    });
  };

  function handleInputChange(e) {
    changeInput(e);
    changeState(e);
  }

  return (
    <>
      <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
        <div className="text-center pl-8 lg:text-left">
          <h2 className="mt-6 text-3xl font-extrabold text-blue-900">
            Crea tu usuario
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Si ya tienes una cuenta
            <a
              href="/user/register"
              className="font-medium text-blue-900 hover:text-blue-500"
            >
              {" "}
              Inicia Sesion
            </a>
          </p>
        </div>
        <div className="mt-6">
          <form className="space-y-1">
            <div className="grid grid-cols-1 lg:gap-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese nombre
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nombre"
                  onChange={changeInput}
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
                  name="lastName"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Apellido"
                  onChange={changeInput}
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
                  name="email"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  onChange={changeInput}
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
                  name="phone"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Telefono - Cel"
                  onChange={changeInput}
                />
              </div>
              <p className="mt-2 text-sm text-gray text-bold text-left px-12">
                Crear un user y password
              </p>
              <div>
                <label
                  htmlFor="user"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  User
                </label>
                <input
                  type="text"
                  name="user"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="User"
                  onChange={changeInput}
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
                  name="password"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                  onChange={changeInput}
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  name="file"
                  onChange={changeInputImage}
                />
              </div>

              <div>
                <label
                  htmlFor="Role"
                  className="block text-sm font-medium mt-4 lg:mt-0 text-gray-700"
                >
                  Tipo de rol el cual desea registrarse:
                </label>
                <div className="flex justify-center mt-3">
                  <ul className="grid w-[70%] gap-6 md:grid-cols-2">
                    <li>
                      <input
                        type="radio"
                        id="hosting-small"
                        name="role"
                        value="comun"
                        className="hidden peer"
                        required
                        onChange={handleInputChange}
                      />
                      <label
                        for="hosting-small"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="w-full text-lg font-semibold">Comun</div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="hosting-big"
                        name="role"
                        value="professional"
                        className="hidden peer"
                        onChange={handleInputChange}
                      />
                      <label
                        for="hosting-big"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="w-full text-lg font-semibold">
                          Profesional
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              {btnLabel.open ? (
                <>
                  {btnLabel.rol === "professional" ? (
                    <button
                      className="mt-3 w-[80%] py-3 bg-blue-900 text-white"
                      onClick={handleOpenFormByRol}
                    >
                      Siguiente
                    </button>
                  ) : (
                    <button
                      className="mt-3 w-[80%] py-3 bg-blue-900 text-white"
                      onClick={handleRegister}
                    >
                      Registrarse
                    </button>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
