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

import {
  RiSearchLine,
  RiFilter3Line,
  RiUserLocationLine,
  RiCloseLine,
} from "react-icons/ri";
import { FaUser } from "react-icons/fa";

function FilterUser({ totalPages }) {
  let configFilterUser = useSelector((state) => state.configFilterUser);// estado filtra usuario 
  //el cual es un objeto igual a este
//config para filtros services
// configFilterUser: {
//   page: 1,
//   page_size: 15,
//   name: "",
//   job: false,
//   provincia: "Buenos Aires",
//   ciudad: false,
//   dias: false,
//   horario: "mañana",
//   role: "professional",
//   orderName: false,
//   orderRating: "DESC",


  // modificando por ejemplo name: la ruta del api regresar los usuarios correspondientes

  const jobs = useSelector((state) => state.jobs);//obtengo estado de los jobs
  const dispatch = useDispatch();

//convertimos el array de provincias y ciudades a un obj 
  // se usan los datos de prueba para poder usarlo en la option y hacerle un map
    let provinciasObj = convertirProvinciasAObjeto(provincias);

  let [checkDia, setChekDia] = useState([]);// creamos el estado dia se guarda el value lunes, Martess etc 
  
  const handleCheckedDias = (event) => {
    const isChecked = event.target.checked; //check da true contrario false
    const value = event.target.value; //el name del dia de la semana


    let newDias = [];  //array donde se guardan los dias

    if (isChecked) { //si es true el check 
      newDias = [...checkDia, value]; //guardamos el nuevo copiando los anteriores
    } else {
      newDias = checkDia.filter((e) => e != value);//si esta en false lo sacamos del array excluyendllo con el filter
    }
    setChekDia(newDias);//al estado de dias le agregamos lo obtenido de los checks

    dispatch(
      configFilterUserPut({  //actualizamos el estado de redux configFilterUser con el array newDias
        ...configFilterUser,
        dias: newDias,
      })
    );
  };

  let [searchName, setSearchName] = useState(configFilterUser.name);//creamos estado local para el nombre

  // Estados de la paginacion

  const [page, setPage] = useState(1);
  const [page_size, setPage_size] = useState(15);

  let handleOptionFilter = (event) => { //recive el evento Onchange es un objeto de un select 
    let propiedadFilter = event.target.options[event.target.selectedIndex] // //en el objeto de un select con el array selecciamos el option
      .getAttribute("name")  ////obtenemos el atributo name del option debe tener un name="""
     //propiedadfilter seria el nombre de la propiedad por ejemplo hoorario = 
    let value = event.target.value; // con este obtenmos el valor por ejemplo horario=mañana
    
    let newConfig = { //aqui vamos  guardar la propiedad que tengamos con su valor 
      ...configFilterUser, //guardamos lo que ya llevabamos
      [propiedadFilter]: value,  //mismo ejemplo de arriba horario=mañana
    };

    dispatch(configFilterUserPut(newConfig));//actualizamos el estado de redux con lo obtenido de los selects
  };

  let handlerFilterName = (event) => {//recibimos el valor del input
    let value = event.target.value;  //

    setSearchName(value); //acctualizamos el estado local con lo que se escribe en el input

    let newConfig = {};//creamos newconfig objeto vacio

    if (value.length >= 3) { //si se escribe al menos 3 letras
      newConfig = {  // creamos el nuevo modelo de configFilterUser
        ...configFilterUser, //traemos todo lo que tenemos en el estado de redux
        name: value,  //pisamos el value 
      };
      dispatch(configFilterUserPut(newConfig)); //actualizamos el valor de configFilterUser con ese dispatch
    } else {
      newConfig = {//en caso de que sea menor a 3 actualizamos el estado
        ...configFilterUser,
        name: "", //con name vacio
      };

      dispatch(configFilterUserPut(newConfig));//actualizamos el estado de redux 
    }
  };

  useEffect(() => {
    dispatch(getAllProfesionales(configFilterUser)); //una vez que tenemos el estado hacemos la peticion al back para traer los usuariios con e filtro armado
  }, [configFilterUser]); //cada que se modifica el la variable que representa como se modificara el estado de redux que es el formmato del filtro

  
  return (
    <>
      <div className="p-4 bg-gray-100 ">
        <div className="mb-2">
          <h1 className="text-2xl font-semibold">Busque un profesional</h1>
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
                    placeholder="Búsqueda por nombre"
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
