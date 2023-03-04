import { horario } from "../../../../constants/dias";

export default function Jobs({ jobs, handleJob, handleDay, changeInput }) {
  const dias = [
    {
      id: 1,
      name: "lunes",
    },
    {
      id: 2,
      name: "martes",
    },
    {
      id: 3,
      name: "miercoles",
    },
    {
      id: 4,
      name: "jueves",
    },
    {
      id: 5,
      name: "viernes",
    },
    {
      id: 6,
      name: "sabado",
    },
    {
      id: 7,
      name: "domingo",
    },
  ];

  return (
    <>
      <div className="items-center justify-center w-[50%] m-10">
        <div className="text-center lg:text-left">
          <h2 className=" text-4xl font-extrabold text-blue-900">
            Profesional
          </h2>
        </div>
        <div>
          <h2 className="mt-4 text-xl mb-5 font-extrabold text-blue-900 lg:text-left">
            Qué desempeñas
          </h2>
          <div className="">
            <ul className="items-center grid grid-cols-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {jobs.map((job) => (
                <li className="w-full flex dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox-list"
                      type="checkbox"
                      value={job.id}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={handleJob}
                    />
                    <label
                      for="laravel-checkbox-list"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      key={job.name}
                    >
                      {job.name}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="mt-4 text-xl mb-5 font-extrabold text-blue-900 lg:text-left">
            Tu horario
          </h2>
          <div className="">
            <ul className="items-center grid grid-cols-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {dias.map((dia) => (
                <li className="w-full flex dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox-list"
                      type="checkbox"
                      name="dias"
                      value={dia.name}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={handleDay}
                    />
                    <label
                      for="laravel-checkbox-list"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      key={dia.name}
                    >
                      {dia.name}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <form action="#">
            <label
              htmlFor="direccion"
              className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
            >
              Turno disponible
            </label>
            <select
              name="horario"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={changeInput}
            >
              <option value="" selected>
                Selecciona una horario
              </option>
              {horario.length && horario.map((ele)=>
                <option value={ele}>
                  {ele}
                </option>
              )}
     
            </select>
            <input type="submit" value="Enviar" />
          </form>
        </div>

        <div className="pb-5 text-5xl text-black mx-auto pt-5 flex flex-col items-center justify-center">
          <label
            for="description"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Descríbete:
          </label>
          <textarea
            name="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Hola soy victor un experto en harcodear todo... "
            onChange={changeInput}
          ></textarea>
        </div>
      </div>
    </>
  );
}
