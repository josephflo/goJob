import { useState } from "react";
import { provincias } from "../../../../constants/ciudadesObject";

export default function FormCreateProfessional({
  changeInput,
  handleCloseFormByRol,
  handleRegister,
}) {
  const [provState, setProvState] = useState("");
  const [ciudState, setCiudState] = useState();

  const handleOption = (e) => {
    const value = e.target.value;
    setProvState(value);
    setCiudState(provincias.find((p) => p.name === value).ciudad);
  };

  function handleInputChange(e) {
    changeInput(e);
    handleOption(e);
  }

  return (
    <>
      <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
        <div className="mt-2">
          <form className="space-y-1">
            <div className="grid grid-cols-1  lg:gap-3">
              <h2 className="mt-4 text-xl pl-8 font-extrabold text-blue-900 lg:text-left">
                Localidad
              </h2>
              <div className=" flex justify-center">
                <form action="#">
                  <label
                    htmlFor="direccion"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese Provincia
                  </label>
                  <select
                    name="provincia"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleInputChange}
                  >
                    <option value="" selected>
                      Selecciona una provincia
                    </option>
                    {provincias.map((provincia) => (
                      <option value={provincia.name} key={provincia.id}>
                        {provincia.name}
                      </option>
                    ))}
                  </select>
                  <input type="submit" value="Enviar" />
                </form>
              </div>
              {provState.length ? (
                <div className=" flex justify-center">
                  <form action="#">
                    <label
                      htmlFor="direccion"
                      className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                    >
                      Ingrese Ciudad
                    </label>
                    <select
                      name="ciudad"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={changeInput}
                    >
                      <option value="" selected>
                        Selecciona una ciudad
                      </option>
                      {ciudState?.map((provincia) => (
                        <option value={provincia.name} key={provincia.id}>
                          {provincia.name}
                        </option>
                      ))}
                    </select>
                    <input type="submit" value="Enviar" />
                  </form>
                </div>
              ) : (
                <></>
              )}

              <div>
                <label
                  htmlFor="direccion"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Dirección"
                  onChange={changeInput}
                />
              </div>
            </div>
            <div>
              <button
                className="mt-3 w-[80%] py-3 bg-blue-900 text-white"
                onClick={handleCloseFormByRol}
              >
                Regresar
              </button>
            </div>
            <div>
              <button
                className="mt-3 w-[80%] py-3 bg-blue-900 text-white"
                onClick={handleRegister}
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
