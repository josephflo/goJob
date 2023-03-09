import React from "react";
import {
  RiSearchLine,
  RiFilter3Line,
  RiUserLocationLine,

} from "react-icons/ri";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  configFilterUserPut,
  getAllProfesionales,
} from "../../redux/actions/users/profesionales";


export function FilterUser({ totalPages }) {
  let configFilterUser = useSelector((state) => state.configFilterUser);

  const usersProfesionales = useSelector((state) => state.usersProfesionales);
 

  let [filter,setFilter]= useState({
    page:1,
    page_size:30,
    name:"",
    role:false,
    horario:false,
    provincia:false,
    state:true
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
     dispatch(configFilterUserPut(filter));
     dispatch(getAllProfesionales(configFilterUser))
  }, [filter,configFilterUser]);

  console.log(usersProfesionales)
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
              <option name={"role"} value={"false"} >todos</option>
              <option name={"role"} value={"admin"} >admin</option>
              <option name={"role"} value={"professional"} >professional</option>
              <option name={"role"} value={"comun"} >comun</option>
              
            </select>
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative">
            <RiFilter3Line className="absolute left-2 top-3 text-blue-600" />
            <select
                  value={configFilterUser.state}
                  onChange={handleOptionFilter}
                  className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
                       >
                   <option key="1" value={true} name={"state"}>activo</option>
                   <option key="2" value={false} name={"state"}>inactivo</option>
                </select>
          </div>
        </form>
      </div>

      {/* <div className="flex items-center flex-wrap gap-4 mb-20">
       
      </div> */}

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