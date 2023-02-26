import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { provincias } from "../../constants/ciudadesObject";
import { convertirProvinciasAObjeto } from "../../helpers/convertProvinciasToObj";
import { configFilterService } from "../../redux/actions/services/modifyFilterServices";
import Pagination from "../pagination/Pagination";

function Filter({ totalPages }) {
  let configFilterServices = useSelector((state) => state.configFilterServices);

  let services = useSelector((state) => state.services);

  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  //convertimos el array de provincias y ciudades a un obj
  let provinciasObj = convertirProvinciasAObjeto(provincias);

  //arry para orden
  let order = [
    { name: "mas recientes", valor: "DESC" },
    { name: "mas antiguos", valor: "ASC" },
  ];

  //Estados para menu Jobs
  let [selectFilter, setSelectFilter] = useState({
    //...configFilterServices
    page: 1,
    page_size: 5,
    state: "pendiente",
    tittle: "",
    orderFecha: "DESC",
    provincia: "Buenos Aires",
    ciudad: false,
    job: false,
  });

  // Estados de la paginacion
  const [page, setPage] = useState(1);
  const [page_size, setPage_size] = useState(15);

  // useEffect(() => {
  //   configFilterService({
  //     ...selectFilter,
  //     totalPages: services.totalPages,
  //   });
  // }, []);

  let handleOptionFilter = (event) => {
    let propiedadFilter = event.target.options[event.target.selectedIndex]
      .getAttribute("name")
      .toString();
    let value = event.target.value;

    let newConfig = {
      ...configFilterServices,
      [propiedadFilter]: value,
    };

    if (propiedadFilter == "provincia") {
      newConfig.ciudad = false;
    }

    setSelectFilter(newConfig);
    dispatch(configFilterService(newConfig));
  };

  let handlerFilterName = (event) => {
    let value = event.target.value;

    setSelectFilter({
      ...selectFilter,
      tittle: value,
    });

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
    <div className="grid grid-cols-4">
      <div className="col-span-2">
        {/* Por nombre */}
        <input
          type="text"
          placeholder="buqueda por nombre"
          name={"tittle"}
          value={selectFilter.tittle}
          onChange={handlerFilterName}
        />

        {/* Barra de eleccion Jobs */}
        <p>Por profesion</p>
        <div className="relative w-full">
          <select
            value={selectFilter.job}
            onChange={handleOptionFilter}
            className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
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

        <div>asa</div>
        <div>asa</div>

        {/* Barra de eleccion orderFecha*/}
        <p>Por lanzamiento</p>
        <div className="relative w-full">
          <select
            value={selectFilter.orderFecha}
            onChange={handleOptionFilter}
            className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
          >
            {order.length &&
              order.map((ord, ind) => (
                <option key={ind} value={ord.valor} name={"orderFecha"}>
                  {ord.name}
                </option>
              ))}
          </select>
        </div>

        <div>asa</div>
        <div>asa</div>

        {/* Barra de eleccion provincia*/}
        <p>Por Provincia</p>
        <div className="relative w-full">
          <select
            defaultValue={Object.keys(provinciasObj)[0]}
            value={selectFilter.provincia}
            onChange={handleOptionFilter}
            className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
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

        <div>asa</div>
        <div>asa</div>

        {/* Barra de eleccion ciudad*/}
        <p>Por ciudad</p>
        <div className="relative w-full">
          <select
            value={selectFilter.ciudad}
            onChange={handleOptionFilter}
            className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
          >
            <option key={1} value={false} name={"ciudad"}>
              {"All"}
            </option>
            {selectFilter.provincia != false &&
              selectFilter.provincia &&
              provinciasObj[selectFilter.provincia].map((ciudad, ind) => (
                <option key={ind + 1} value={ciudad} name={"ciudad"}>
                  {ciudad}
                </option>
              ))}
          </select>
        </div>

        <div>asa</div>
        <div>asa</div>
      </div>
      <div>
        <Pagination
          paginatePrev={paginatePrev}
          paginateNext={paginateNext}
          paginate={paginate}
          totalPages={totalPages}
        />
      </div>
      {/* <div>
        <select name="select" onChange={fn}>
          <option value="3" selected>
            3
          </option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
      </div> */}
    </div>
  );
}

export default Filter;
