import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { configFilterService } from "../../redux/actions/services/modifyFilterServices";

function Filter() {
  let configFilterServices = useSelector((state) => state.configFilterServices);

  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  //arry para orden
  let order = ["ASC", "DESC"]

  //Estados para menu Jobs
   let [selectFilter, setSelectJob] = useState({
    //...configFilterServices
    state: "pendiente",
    tittle: "",
    orderFecha: "DESC",
    provincia: false,
    ciudad: false,
    job: false
   })

  let handleOptionFilter= (event)=> {
    let propiedadFilter = event.target.options[event.target.selectedIndex].getAttribute('name')
    let value = event.target.value

    let newConfig = {
      ...configFilterServices,
      [propiedadFilter]: value
    }

    setSelectJob({
      ...selectFilter,
      [propiedadFilter]: value
    });
    dispatch(configFilterService(newConfig))
  }

  let handlerFilterName = (event)=>{
    let value = event.target.value

    setSelectJob({
      ...selectFilter,
      tittle: value
    });

    if(value.length >= 3){
      let newConfig = {
        ...configFilterServices,
        tittle: value
      }
      dispatch(configFilterService(newConfig))
    }else if(value.length <= 0){
      let newConfig = {
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
            {jobs.length && jobs.map((job)=>
              <option value={job.id} name={"job"}>{job.name}</option>
            )}
          </select>
        </div>

              <div>asa</div>
              <div>asa</div>


        {/* Barra de eleccion orderFecha*/}
        <p>Por lanzamiento</p>
        <div className="relative w-full">
          <select value={selectFilter.orderFecha} onChange={handleOptionFilter} className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
              <option value={"DESC"} name={"orderFecha"}>{"mas recientes"}</option>
              <option value={"ASC"} name={"orderFecha"}>{"mas antiguos"}</option>
          </select>
        </div>

            <div>asa</div>
            <div>asa</div>

        {/* Barra de eleccion orderFecha*/}
        <p>Por Provincia</p>
        <div className="relative w-full">
          <select value={selectFilter.orderFecha} onChange={handleOptionFilter} className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
              <option value={"DESC"} name={"orderFecha"}>{"mas recientes"}</option>
              <option value={"ASC"} name={"orderFecha"}>{"mas antiguos"}</option>
          </select>
        </div>

            <div>asa</div>
            <div>asa</div>

        {/* Barra de eleccion orderFecha*/}
        <p>Por ciudad</p>
        <div className="relative w-full">
          <select value={selectFilter.orderFecha} onChange={handleOptionFilter} className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
              <option value={"DESC"} name={"orderFecha"}>{"mas recientes"}</option>
              <option value={"ASC"} name={"orderFecha"}>{"mas antiguos"}</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default Filter;
