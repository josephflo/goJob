import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../../components/navBar/navBarPortada/NavBarPortada";
import { createService } from "../../../redux/actions/serviceActions";
import { getJobs } from "../../../redux/actions/jobActions";
import { provincias } from "../../../constants/ciudadesObject";
import { convertirProvinciasAObjeto } from "../../../helpers/convertProvinciasToObj";


function FormCreateService() {
  const dispatch = useDispatch();
  const jobs_ = useSelector((state) => state.jobs);

  let provinciasObj = convertirProvinciasAObjeto(provincias)

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  //estados para barras de menu
  //Estados para menu Jobs

  const [input_2, setInput_2] = useState({
    tittle: "",
    description: "",
    provincia: "Buenos Aires",
    ciudad: provinciasObj["Buenos Aires"][0],
    direccion: "",
    presupuesto: "0",
    jobs: [1]
  });

  let handleOptionFilter= (event)=> {
    let propiedadFilter = event.target.options[event.target.selectedIndex].getAttribute('name').toString()
    let value = event.target.value

    let newConfig = {}
    if(propiedadFilter == "jobs"){
      newConfig = {
        ...input_2,
        [propiedadFilter]: [Number(value)],
      }
    }else{
      newConfig = {
        ...input_2,
        [propiedadFilter]: value,
      }
    }

    setInput_2(newConfig);
  }

  const changeInput_2 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput_2({ ...input_2, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createService(input_2)
    );

    setInput_2({
      tittle: "",
      description: "",
      provincia: "Buenos Aires",
      ciudad: false,
      direccion: "",
      presupuesto: "0",
      jobs: []
    });
    window.alert("Se creó con exito el servicio");
  };

  useEffect(()=>{
    console.log(input_2);
  }, [input_2])

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
                    name="tittle"
                    value={input_2.tittle}
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


              {/* Barra de eleccion provincia*/}
              <div>
                <p>Por Provincia</p>
                <div className="relative w-full">
                  <select defaultValue={Object.keys(provinciasObj)[0]} value={input_2.provincia} onChange={handleOptionFilter} className="z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
                      {/* <option key={1} value={false} name={"provincia"}>{"All"}</option> */}
                      {provinciasObj && Object.keys(provinciasObj).length && Object.keys(provinciasObj).map((prov, ind)=>
                        <option key={ind+1} value={prov} name={"provincia"}>{prov}</option>
                      )}
                  </select>
                </div>
              </div>

              
              {/* Barra de eleccion ciudad*/}
              <p>Por ciudad</p>
              <div className="relative w-full">
                <select value={input_2.ciudad} onChange={handleOptionFilter} className="z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
                  {input_2.provincia != false && input_2.provincia && provinciasObj[input_2.provincia].map((ciudad, ind)=>
                    <option key={ind} value={ciudad} name={"ciudad"}>{ciudad}</option>
                  )}
                </select>
              </div>

              <div>
                <label
                  htmlFor="descriptionService"
                  className="block text-sm font-medium mt-2 lg:mt-0 text-gray-700"
                >
                  direccion
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={input_2.direccion}
                  onChange={changeInput_2}
                  className="mt-2 shadow appearance-none border roun w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
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
                <div className="relative w-full mb-15">
                  <select value={input_2.jobs[0]} onChange={handleOptionFilter} className="z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
                      {jobs_.length && jobs_.map((job, ind)=>
                        <option key={ind} value={job.id} name={"jobs"}>{job.name}</option>
                      )}
                  </select>
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
