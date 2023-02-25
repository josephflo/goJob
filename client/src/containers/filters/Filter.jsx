import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { configFilterService } from "../../redux/actions/services/modifyFilterServices";

function Filter() {
  let configFilterServices = useSelector((state) => state.configFilterServices);

  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  //Estados para menu Jobs
   let [selectJob, setSelectJob] = useState(false)

  let handleOptionFilterJob= (event)=> {
    let propiedadFilter = event.target.options[event.target.selectedIndex].getAttribute('name')
    let value = event.target.value

    let newConfig = {
      ...configFilterServices,
      [propiedadFilter]: value
    }

    setSelectJob(value);
    dispatch(configFilterService(newConfig))

  }

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-2">

        {/* Barra de eleccion Jobs */}
        <p>Por profesion</p>
        <div className="relative w-full">
          <select value={selectJob} onChange={handleOptionFilterJob} className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm">
            <option value={false} name={"job"}>{"All"}</option>
            {jobs.length && jobs.map((job)=>
              <option value={job.id} name={"job"}>{job.name}</option>
            )}
          </select>
        </div>

      </div>
    </div>
  );
}

export default Filter;
