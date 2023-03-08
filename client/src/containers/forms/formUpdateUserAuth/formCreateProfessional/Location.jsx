import { useState } from "react";
import { useSelector } from "react-redux";
import { provincias } from "../../../../constants/ciudadesObject";
import { Link } from "react-router-dom";

export default function Location({ changeInput, handleRegister }) {
  const [provState, setProvState] = useState("");
  const [ciudState, setCiudState] = useState();
  const users = useSelector((state) => state.userLogin);

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
      <div className="items-center justify-center w-[70%] m-10">   
          <form className="space-y-1">
            <div className="grid grid-cols-1  lg:gap-3">
              <h2 className="mt-4 text-xl mb-5 font-extrabold text-blue-900 lg:text-left">
                Localidad
              </h2>
              <div className="flex flex-col items-start h-21 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <form action="#">
                  <label
                    htmlFor="direccion"
                    className="text-sm text-gray-600"
                  >
                    Ingrese Provincia
                  </label>
                  <select
                    name="provincia"
                    className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
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
                  <input type="submit" value="" />
                </form>
              </div>
              {provState.length ? (
                <div className="flex flex-col items-start h-21  bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <form action="#">
                    <label
                      htmlFor="direccion"
                      className="text-sm text-gray-600"
                    >
                      Ingrese Ciudad
                    </label>
                    <select
                      name="ciudad"
                      className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
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
                    <input type="submit" value="" />
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
              {/* <button
                className="mt-3 w-[80%] py-3 bg-blue-900 text-white"
                onClick={handleCloseFormByRol}
              >
                Regresar
              </button> */}
            </div>
            <div>
              <div>
              <button
                className="bg-blue-500 w-[80%] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                onClick={handleRegister}
              >
                Crear el perfil profesional
              </button>
              </div>
              <div >
              <Link
                to={`/profile/${users.id}`}
              >
              <button
              className="bg-transparent mt-3 w-[80%] py-2 hover:bg-orange-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >  Volver</button>
              </Link>
              </div>
            </div>
          </form>
        </div>
   
    </>
  );
}
