import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { provincias } from "../../constants/ciudadesObject";
import { convertirProvinciasAObjeto } from "../../helpers/convertProvinciasToObj";
import { configFilterService } from "../../redux/actions/services/modifyFilterServices";

function Filter() {
  let configFilterServices = useSelector((state) => state.configFilterServices);

  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  //convertimos el array de provincias y ciudades a un obj
  let provinciasObj = convertirProvinciasAObjeto(provincias)

  //arry para orden
  let order = [
    {name: "mas recientes", valor: "DESC"},
    {name: "mas antiguos", valor: "ASC"}
  ]

  //Estados para menu Jobs
   let [selectFilter, setSelectFilter] = useState({
    //...configFilterServices
    state: "pendiente",
    tittle: "",
    orderFecha: "DESC",
    provincia: "Buenos Aires",
    ciudad: false,
    job: false
   })
  
  let handleOptionFilter= (event)=> {
    let propiedadFilter = event.target.options[event.target.selectedIndex].getAttribute('name').toString()
    let value = event.target.value

    let newConfig = {
      ...configFilterServices,
      [propiedadFilter]: value,
    }

    if(propiedadFilter == "provincia") {
      newConfig.ciudad = false
    }


    setSelectFilter(newConfig);
    dispatch(configFilterService(newConfig))
  }

  let handlerFilterName = (event)=>{
    let value = event.target.value

    setSelectFilter({
      ...selectFilter,
      tittle: value
    });


    let newConfig = {}
    if(value.length >= 3){
      newConfig = {
        ...configFilterServices,
        tittle: value
      }
      dispatch(configFilterService(newConfig))
    }else if(value.length <= 0){
      newConfig = {
        ...configFilterServices,
        tittle: ""
      }
      dispatch(configFilterService(newConfig))
    }
  }

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-2">

        {/* Por nombre */}
        <input type="text" placeholder="buqueda por nombre" name={"tittle"} value={selectFilter.tittle} onChange={handlerFilterName}/>

        {/* Barra de eleccion Jobs */}
        <p>Por profesion</p>
        <div className="relative w-full">
          <select value={selectFilter.job} onChange={handleOptionFilter} className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
            <option value={false} name={"job"}>{"All"}</option>
            {jobs.length && jobs.map((job, ind)=>
              <option key={ind} value={job.id} name={"job"}>{job.name}</option>
            )}
          </select>
        </div>

              <div>asa</div>
              <div>asa</div>


        {/* Barra de eleccion orderFecha*/}
        <p>Por lanzamiento</p>
        <div className="relative w-full">
          <select value={selectFilter.orderFecha} onChange={handleOptionFilter} className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
              {order.length && order.map((ord, ind)=>
                <option key={ind} value={ord.valor} name={"orderFecha"}>{ord.name}</option>
              )}
          </select>
        </div>

            <div>asa</div>
            <div>asa</div>

        {/* Barra de eleccion provincia*/}
        <p>Por Provincia</p>
        <div className="relative w-full">
          <select defaultValue={Object.keys(provinciasObj)[0]} value={selectFilter.provincia} onChange={handleOptionFilter} className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
            {/* <option key={1} value={false} name={"provincia"}>{"All"}</option> */}
            {provinciasObj && Object.keys(provinciasObj).length && Object.keys(provinciasObj).map((prov, ind)=>
              <option key={ind+1} value={prov} name={"provincia"}>{prov}</option>
            )}
          </select>
        </div>

            <div>asa</div>
            <div>asa</div>

        {/* Barra de eleccion ciudad*/}
        <p>Por ciudad</p>
        <div className="relative w-full">
          <select value={selectFilter.ciudad} onChange={handleOptionFilter} className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
            <option key={1} value={false} name={"ciudad"}>{"All"}</option>
            {selectFilter.provincia != false && selectFilter.provincia && provinciasObj[selectFilter.provincia].map((ciudad, ind)=>
              <option key={ind+1} value={ciudad} name={"ciudad"}>{ciudad}</option>
            )}
          </select>
        </div>

            <div>asa</div>
            <div>asa</div>

      </div>
    </div>
  );
}

export default Filter;
