import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { provincias } from "../../constants/ciudadesObject";
import { convertirProvinciasAObjeto } from "../../helpers/convertProvinciasToObj";
import { cleanAllServices } from "../../redux/actions/services/getServices";
import { configFilterService } from "../../redux/actions/services/modifyFilterServices";
import Pagination from "../pagination/Pagination";

function Filter() {
  let configFilterServices = useSelector((state) => state.configFilterServices);

  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch({
    page: 1,
    page_size: 2,
  });

  //convertimos el array de provincias y ciudades a un obj
  let provinciasObj = convertirProvinciasAObjeto(provincias);

  //arry para orden
  let order = [
    { name: "Más recientes", valor: "DESC" },
    { name: "Más antiguos", valor: "ASC" },
  ];

  //Estados para menu Jobs
  let [selectFilter, setSelectFilter] = useState(configFilterServices.tittle);

  let handleOptionFilter = (event) => {
    let propiedadFilter =
      event.target.options[event.target.selectedIndex].getAttribute("name");

    let value = event.target.value;

    let newConfig = {
      ...configFilterServices,
      [propiedadFilter]: value,
    };

    if (propiedadFilter == "provincia") {
      newConfig.ciudad = false;
    }

    dispatch(configFilterService(newConfig));
  };

  let handlerFilterName = (event) => {
    let value = event.target.value;

    setSelectFilter(value);

    let newConfig = {};
    if (value.length >= 3) {
      newConfig = {
        ...configFilterServices,
        tittle: value,
      };
      dispatch(configFilterService(newConfig));
    } else if (value.length <= 0) {
      newConfig = {
        ...configFilterServices,
        tittle: "",
      };
      dispatch(configFilterService(newConfig));
    }
  };



  return (
    <>
      <div className="p-4 bg-gray-100 ">
        <div className="mb-2">
          <h1 className="text-lg font-semibold md:text-xl lg:text-2xl">
            Página de Servicios
          </h1>
        </div>
        {/* searchFilter*/}
        {/* <div className="grid grid-cols-4 gap-4 items-center"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <form className="col-span-2">
            <div className="relative">
              <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700 text-xs md:text-sm lg:text-base">
                Por nombre
              </p>
              <input
                type="text"
                placeholder="Búsqueda por nombre"
                name={"tittle"}
                value={selectFilter}
                className="p-2 py-2 pl-3 pr-4 outline-none  w-full border-none text-xs md:text-sm lg:text-base"
                onChange={handlerFilterName}
              />
            </div>
          </form>

          {/* Barra de eleccion Jobs */}
          <div className="relative w-full">
            <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700  text-xs md:text-sm lg:text-base">
              Por profesion
            </p>
            <select
              value={configFilterServices.job}
              onChange={handleOptionFilter}
              className="p-2 py-2 pl-3 pr-4 outline-none  w-full border-none text-xs md:text-sm lg:text-base"
              // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
            >
              <option value={false} name={"job"}>
                {"All"}
              </option>
              {jobs.length &&
                jobs.map((job, ind) => (
                  <option key={ind} value={job.id} name={"job"}>
                    {job.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Barra de eleccion orderFecha*/}
          <div className="relative w-full">
            <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700 text-xs md:text-sm lg:text-base">
              Por lanzamiento
            </p>
            <select
              value={configFilterServices.orderFecha}
              onChange={handleOptionFilter}
              className="p-2 py-2 pl-3 pr-4 outline-none  w-full border-none text-xs md:text-sm lg:text-base"
              // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
            >
              {order.length &&
                order.map((ord, ind) => (
                  <option key={ind} value={ord.valor} name={"orderFecha"}>
                    {ord.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Barra de eleccion provincia*/}
          <div className="relative w-full">
            <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700 text-xs md:text-sm lg:text-base">
              Por Provincia
            </p>
            <select
              defaultValue={Object.keys(provinciasObj)[0]}
              value={configFilterServices.provincia}
              onChange={handleOptionFilter}
              className="p-2 py-2 pl-3 pr-4 outline-none  w-full border-none text-xs md:text-sm lg:text-base"
              // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
            >
              {/* <option key={1} value={false} name={"provincia"}>{"All"}</option> */}
              {provinciasObj &&
                Object.keys(provinciasObj).length &&
                Object.keys(provinciasObj).map((prov, ind) => (
                  <option key={ind + 1} value={prov} name={"provincia"}>
                    {prov}
                  </option>
                ))}
            </select>
          </div>

          {/* Barra de eleccion ciudad*/}
          <div className="relative w-full">
            <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700 text-xs md:text-sm lg:text-base">
              Por ciudad
            </p>
            <select
              value={configFilterServices.ciudad}
              onChange={handleOptionFilter}
              className="p-2 py-2 pl-3 pr-4 outline-none  w-full border-none text-xs md:text-sm lg:text-base"
              // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
            >
              <option key={1} value={false} name={"ciudad"}>
                {"All"}
              </option>
              {configFilterServices.provincia != false &&
                configFilterServices.provincia &&
                provinciasObj[configFilterServices.provincia].map(
                  (ciudad, ind) => (
                    <option key={ind + 1} value={ciudad} name={"ciudad"}>
                      {ciudad}
                    </option>
                  )
                )}
            </select>
          </div>
        </div>
 
      </div>
      
    </>
  );
}

export default Filter;
