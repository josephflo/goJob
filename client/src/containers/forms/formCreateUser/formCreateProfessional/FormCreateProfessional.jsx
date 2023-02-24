import { useSelector } from "react-redux";
import JobPage from "../../../../pages/jobPage/JobPage";

export default function FormCreateProfessional({
  changeInput,
  handleCloseFormByRol,
}) {
  const jobs_ = useSelector((state) => state.jobs);

  return (
    <>
      <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
        <div className="text-center pl-8 lg:text-left">
          <h2 className=" text-2xl font-extrabold text-blue-900">
            Profesional
          </h2>
        </div>
        <div className="mt-2">
          <form className="space-y-1">
            <div className="grid grid-cols-1 lg:gap-3">
              <h2 className="mt-1 text-xl pl-8 font-extrabold text-blue-900 lg:text-left">
                Crea un usuario
              </h2>
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
              <h2 className="mt-4 text-xl pl-8 font-extrabold text-blue-900 lg:text-left">
                Localidad
              </h2>
              <div>
                <label
                  htmlFor="provincia"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese Provincia
                </label>
                <input
                  type="text"
                  name="provincia"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Provincia"
                  onChange={changeInput}
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
                  name="ciudad"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ciudad"
                  onChange={changeInput}
                />
              </div>
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
              <div>
                <label
                  htmlFor="Imagen"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese imagen de su perfil
                </label>
                <input
                  type="text"
                  name="imageurl"
                  className="mt-2 shadow appearance-none border roun w-[80%] py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Imagen de perfil"
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
            </div>
            <div>
              <button
                className="mt-3 w-[80%] py-3 bg-blue-900 text-white"
                onClick={handleCloseFormByRol}
              >
                Regresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
