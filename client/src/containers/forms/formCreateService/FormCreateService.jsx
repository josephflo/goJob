import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../../components/navBar/navBarPortada/NavBarPortada";
import { createService } from "../../../redux/actions/serviceActions";
import { getJobs } from "../../../redux/actions/jobActions";

function FormCreateService() {
  const [inputJob, setInputJob] = useState(1);
  const dispatch = useDispatch();
  const jobs_ = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  const [input_2, setInput_2] = useState({
    title: "",
    description: "",
    location: "",
    presupuesto: "0",
  });

  const changeInputJob = (e) => {
    const name = e.target.name;
    const value = parseInt(e.target.value);
    console.log(name);
    console.log(value);
    setInputJob(value);
  };

  const changeInput_2 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput_2({ ...input_2, [name]: value });
    console.log(input_2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input_2, inputJob);
    dispatch(
      createService({
        tittle: input_2.title,
        description: input_2.description,
        location: input_2.location,
        presupuesto: input_2.presupuesto,
        jobs: [inputJob],
      })
    );
    setInput_2({
      title: "",
      description: "",
      location: "",
      presupuesto: "0",
    });
    setInputJob(1);
    window.alert("Se creó con exito el servicio");
  };

  return (
    <div>
      <div class="p-1.5 sticky top-0 z-50 bg-white ">
        <NavBarPortada />
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
          <div className="text-center lg:text-left">
            <h2 className="mt-6 text-3xl font-extrabold text-blue-900">
              Crea tu servicio
            </h2>
          </div>
          <div className="mt-6">
            <form className="space-y-1" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                <div>
                  <label
                    htmlFor="nameService"
                    className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                  >
                    Ingrese nombre del Servicio
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={input_2.title}
                    onChange={changeInput_2}
                    className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nombre de servicio"
                    required="required"
                    data-error="El nombre del Servicio es requerido."
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="descriptionService"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese descripción del Servicio
                </label>
                <input
                  type="text"
                  name="description"
                  value={input_2.description}
                  onChange={changeInput_2}
                  className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Description del servicio"
                  required="required"
                  data-error="La Descripción es requerido."
                />
              </div>
              <div>
                <label
                  htmlFor="descriptionService"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese lugar de trabajo
                </label>
                <input
                  type="text"
                  name="location"
                  value={input_2.location}
                  onChange={changeInput_2}
                  className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa el lugar donde se realizará el trabajo"
                  required="required"
                  data-error="La Descripción es requerido."
                />
              </div>
              <div>
                <label
                  htmlFor="descriptionService"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  Ingrese el prespuesto que tiene
                </label>
                <input
                  type="text"
                  name="presupuesto"
                  value={input_2.presupuesto}
                  onChange={changeInput_2}
                  className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                  required="required"
                  data-error="La Descripción es requerido."
                />
              </div>

              <div>
                <label>Jobs: </label>
                <div>
                  {jobs_.map((job) => (
                    <label key={job.id}>
                      {job.name}
                      <input
                        type="radio"
                        name="jobs"
                        value={job.id}
                        onChange={changeInputJob}
                      />
                      <span></span>
                    </label>
                  ))}
                </div>
              </div>
              <div></div>
              <div>
                <button className="mt-3 w-full py-3 bg-blue-900 text-white ">
                  Crear servicio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCreateService;
