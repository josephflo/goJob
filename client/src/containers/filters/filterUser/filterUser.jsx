import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { provincias } from "../../../constants/ciudadesObject";
import { dias, horario } from "../../../constants/dias";
import capitalizeFirstLetter from "../../../helpers/capitalizeFirstLetter";
import { convertirProvinciasAObjeto } from "../../../helpers/convertProvinciasToObj";
import {
  configFilterUserPut,
  getAllProfesionales,
} from "../../../redux/actions/users/profesionales";

function FilterUser({ totalPages }) {
  let configFilterUser = useSelector((state) => state.configFilterUser);

  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  //convertimos el array de provincias y ciudades a un obj
  let provinciasObj = convertirProvinciasAObjeto(provincias);

  let [checkDia, setChekDia] = useState([]);
  const handleCheckedDias = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;

    let newDias = [];

    if (isChecked) {
      newDias = [...checkDia, value];
    } else {
      newDias = checkDia.filter((e) => e != value);
    }
    setChekDia(newDias);

    dispatch(
      configFilterUserPut({
        ...configFilterUser,
        dias: newDias,
      })
    );
  };

  let [searchName, setSearchName] = useState(configFilterUser.name);

  // Estados de la paginacion
  const [page, setPage] = useState(1);
  const [page_size, setPage_size] = useState(15);

  let handleOptionFilter = (event) => {
    let propiedadFilter = event.target.options[event.target.selectedIndex]
      .getAttribute("name")
      .toString();
    let value = event.target.value;

    let newConfig = {
      ...configFilterUser,
      [propiedadFilter]: value,
    };

    dispatch(configFilterUserPut(newConfig));
  };

  let handlerFilterName = (event) => {
    let value = event.target.value;

    setSearchName(value);

    let newConfig = {};
    if (value.length >= 3) {
      newConfig = {
        ...configFilterUser,
        name: value,
      };
      dispatch(configFilterUserPut(newConfig));
    } else {
      newConfig = {
        ...configFilterUser,
        name: "",
      };

      dispatch(configFilterUserPut(newConfig));
    }
  };
  useEffect(() => {
    dispatch(getAllProfesionales(configFilterUser));
  }, [configFilterUser]);
  return (
    <>
      <div className="p-10 bg-gray-100 ">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Busque un profesional</h1>
        </div>

        {/* searchFilter*/}
        <div className="grid grid-cols-6">
          <div className="col-span-4">
            <div className="grid grid-cols-4 gap-4 items-center mb-4">
              <form className="col-span-3">
                <div className="relative">
                  <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
                    Por nombre
                  </p>
                  <input
                    type="text"
                    placeholder="buqueda por nombre"
                    name={"name"}
                    value={searchName}
                    className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
                    onChange={handlerFilterName}
                  />
                </div>
              </form>

              {/* Barra de eleccion Jobs */}
              <div className="relative w-full">
                <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
                  Por profesion
                </p>
                <select
                  value={configFilterUser.job}
                  onChange={handleOptionFilter}
                  className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
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

              {/* Barra de eleccion provincia*/}
              <div className="relative w-full">
                <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
                  Por Provincia
                </p>
                <select
                  defaultValue={Object.keys(provinciasObj)[0]}
                  value={configFilterUser.provincia}
                  onChange={handleOptionFilter}
                  className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
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
                <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
                  Por ciudad
                </p>
                <select
                  value={configFilterUser.ciudad}
                  onChange={handleOptionFilter}
                  className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
                  // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
                >
                  <option key={1} value={false} name={"ciudad"}>
                    {"All"}
                  </option>
                  {configFilterUser.provincia != false &&
                    configFilterUser.provincia &&
                    provinciasObj[configFilterUser.provincia].map(
                      (ciudad, ind) => (
                        <option key={ind + 1} value={ciudad} name={"ciudad"}>
                          {ciudad}
                        </option>
                      )
                    )}
                </select>
              </div>

              {/* Horario */}
              <div className="relative w-full">
                <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
                  Por hora
                </p>
                <select
                  name="horario"
                  value={configFilterUser.horario}
                  className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
                  onChange={handleOptionFilter}
                >
                  {horario.length &&
                    horario.map((ele) => (
                      <option value={ele} name={"horario"}>
                        {ele}
                      </option>
                    ))}
                </select>
              </div>

              {/* orderName ASC*/}

              <div className="relative w-full">
                <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
                  Rating
                </p>
                <select
                  value={configFilterUser.orderRating}
                  onChange={handleOptionFilter}
                  className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
                  // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
                >
                  <option key={1} value={"DESC"} name={"orderRating"}>
                    {"Mejor puntuados"}
                  </option>

                  <option key={2} value={"ASC"} name={"orderRating"}>
                    {"Menos puntuados"}
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/*Dias */}
          <div className="col-span-2 pl-5">
            <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
              Por dia
            </p>
            <div className=" grid grid-cols-2 w-full">
              {dias.map((dia) => (
                <div key={dia.id} className="flex items-center">
                  <input
                    type="checkbox"
                    //checked={configFilterUser.result.includes(dia.name)}
                    value={dia.name}
                    onChange={handleCheckedDias}
                    className="mr-2 leading-tight"
                  />
                  <span className="text-lg">
                    {capitalizeFirstLetter(dia.name)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* orderRating DESC */}
        </div>
      </div>
    </>
  );
}

export default FilterUser;
