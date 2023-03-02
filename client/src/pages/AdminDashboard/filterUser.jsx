import React from "react";
import {
  RiSearchLine,
  RiFilter3Line,
  RiUserLocationLine,
  RiCloseLine,
} from "react-icons/ri";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { provincias } from "../../constants/ciudadesObject"
import { dias, horario } from "../../constants/dias";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { convertirProvinciasAObjeto } from "../../helpers/convertProvinciasToObj";
import {
  configFilterUserPut,
  getAllProfesionales,
} from "../../redux/actions/users/profesionales";




export function FilterUser({ totalPages }) {
  let configFilterUser = useSelector((state) => state.configFilterUser);
  const usersProfesionales = useSelector((state) => state.usersProfesionales);
  let provinciasObj = convertirProvinciasAObjeto(provincias);

  let [filter,setFilter]= useState({
    page:1,
    page_size:15,
    name:"",
    role:false
  })

  const dispatch = useDispatch();

  let [searchName, setSearchName] = useState(filter.name);

  // Estados de la paginacion
   let handleOptionFilter = (event) => {
    let propiedadFilter = event.target.options[event.target.selectedIndex]
      .getAttribute("name")
      
    let value = event.target.value;
    

    let newConfig = {
      ...filter,
      [propiedadFilter]: value,
    };

    setFilter(newConfig);
  };

  let handlerFilterName = (event) => {
    let value = event.target.value;

    setSearchName(value);

    let newConfig = {};
    if (value.length >= 3) {
      newConfig = {
        ...filter,
        name: value,
      };
     setFilter(newConfig);
    } else {
      newConfig = {
        ...filter,
           name: "",
      };

      setFilter(newConfig);
    }
  };

  useEffect(() => {
    dispatch(getAllProfesionales(filter));
  }, [filter]);

  
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 items-center mb-4">
        <form className="col-span-2">
          <div className="relative">
            <RiSearchLine className="absolute left-2 top-3 text-blue-600" />
            <input
              type="text"
              value={searchName}
              placeholder="buqueda por nombre"
              name={"name"}
              className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
              onChange={handlerFilterName}
            />
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative">
            <RiUserLocationLine className="absolute left-2 top-3 text-blue-600" />
            <select
              onChange={handleOptionFilter}
              type="text"
              className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
              placeholder="Buscar"
              value={filter.role}
            >
             
              <option name={"role"} value={"todos"} >todos</option>
              <option name={"role"} value={"professional"} >professional</option>
              <option name={"role"} value={"comun"} >comun</option>
              
            </select>
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative">
            <RiFilter3Line className="absolute left-2 top-3 text-blue-600" />
            <select
                  defaultValue={Object.keys(provinciasObj)[0]}
                  value={configFilterUser.provincia}
                  onChange={handleOptionFilter}
                  className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
                       >
                     {provinciasObj &&
                    Object.keys(provinciasObj).length &&
                    Object.keys(provinciasObj).map((prov, ind) => (
                      <option key={ind + 1} value={prov} name={"provincia"}>
                        {prov}
                      </option>
                    ))}
                </select>
          </div>
        </form>
      </div>

      <div className="flex items-center flex-wrap gap-4 mb-20">
        {/* <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
          <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
            <RiCloseLine />
            {""}
          </button>
          Filtro1
        </span>
        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
          <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
            <RiCloseLine />
            {""}
          </button>
          Filtro1
        </span>
        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
          <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
            <RiCloseLine />
            {""}
          </button>
          Filtro1
        </span>
        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
          <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
            <RiCloseLine />
            {""}
          </button>
          Filtro1
        </span> */}
        <button className="text-gray-500 ml-4">borrar filtros</button>
      </div>

      <div className="flex items-center justify-between mb-8">
        <p className="text-gray-500">
          Hemos encontrado <span className="text-blue-500 font-bold">{usersProfesionales.result?usersProfesionales.result.length: 0}</span>{" "}
          usuarios!
        </p>
        <p className="flex items-center gap-2">
          Rating:
          <select
                  value={configFilterUser.orderRating}
                  onChange={handleOptionFilter}
                  className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
                 >
                  <option key={1} value={"DESC"} name={"orderRating"}>
                    {"Desc"}
                  </option>

                  <option key={2} value={"ASC"} name={"orderRating"}>
                    {"Asc"}
                  </option>
                </select>
        </p>
      </div>
    </div>
  );
}