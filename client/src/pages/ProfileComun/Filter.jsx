import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { provincias } from "../../constants/ciudadesObject";
import { convertirProvinciasAObjeto } from "../../helpers/convertProvinciasToObj";
import { configFilterService } from "../../redux/actions/services/modifyFilterServices";
import Pagination from "../../containers/pagination/Pagination";
import { RiFilter3Line, RiUserLocationLine } from "react-icons/ri";

function Filter({ totalPages }) {
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

  // Estados de la paginacion
  const [page, setPage] = useState(1);
  const [page_size, setPage_size] = useState(15);

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

  const paginatePrev = (e) => {
    e.preventDefault();
    if (page === 1) return;
    setPage(page - 1);
    console.log(e.target.value);
    let newConfig = {
      ...configFilterServices,
      page: page - 1,
    };
    dispatch(configFilterService(newConfig));
  };
  const paginateNext = (e) => {
    e.preventDefault();
    if (page === totalPages) return;
    setPage(page + 1);
    let newConfig = {
      ...configFilterServices,
      page: page + 1,
    };
    dispatch(configFilterService(newConfig));
  };

  const paginate = (e, num) => {
    // e.preventDefault();
    setPage(num);
    let newConfig = {
      ...configFilterServices,
      page: num,
    };
    dispatch(configFilterService(newConfig));
  };

  const fn = (e) => {
    setPage_size(e.target.value);
    setPage(1);
    let newConfig = {
      ...configFilterServices,
      page: 1,
      page_size: parseInt(e.target.value),
    };
    dispatch(configFilterService(newConfig));
  };

  return (
    <>
      <div >
        <div className="p-4 bg-gray-100 ">
          <div className="grid grid-cols-5 gap-4 items-center mb-4">
            <div className="col-span-1">
              <label className=" text-black ">Estado</label>
            </div>
            <form className="col-span-1">
              <div className="relative">
                <RiUserLocationLine className="absolute left-2 top-3 text-blue-600" />
                <select className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none">
                  <option>Pendiente</option>
                </select>
              </div>
            </form>
         
          {/* Barra de eleccion orderFecha*/}
          <div>
            <label className=" text-black ">Orden</label>
          </div>
          <form className="col-span-1">
            <div className="relative">
              <RiFilter3Line className="absolute left-2 top-3 text-blue-600" />
              <select
                value={configFilterServices.orderFecha}
                onChange={handleOptionFilter}
                className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"

              >
                {order.length &&
                  order.map((ord, ind) => (
                    <option key={ind} value={ord.valor} name={"orderFecha"}>
                      {ord.name}
                    </option>
                  ))}
              </select>
            </div>
          </form>
      
        <div className="col-span-1">
          <button className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors">
            Borrar filtros
          </button>
        </div>
      </div>
       </div>
       </div>
      <div class="p-2 bg-gray-100">
        <div class="flex justify-center">
          <Pagination
            paginatePrev={paginatePrev}
            paginateNext={paginateNext}
            paginate={paginate}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
}

export default Filter;
