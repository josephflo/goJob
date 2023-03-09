import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import CardJob from "./Cards/CardJob";
import SinJobs from "./Ups/SinJobs";
import { getMyTrabajos } from "../../../redux/actions/professionalActions";
import FilterJobs from "./Filter/FilterJobs";

export default function Jobs() {
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.mytrabajos);

  let configFilterServices = useSelector(
    (state) => state.configFilterPerfilJobs
  );
  useEffect(() => {
    dispatch(getMyTrabajos(configFilterServices));
  }, [configFilterServices]);

  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5  bg-gray-100">
        <div className="">
          <h1 className="text-lg text-left font-semibold md:text-xl lg:text-3xl">
            Tus Trabajos
          </h1>
        </div>
        <div className="flex justify-around   items-center">
          <FilterJobs />
        </div>
        <div className="p-4 ">
          <div>
            {jobs?.length > 0 ? (
              <div className="grid grid-cols-1 rounded">
                {jobs?.map((e) => (
                  <CardJob
                    key={e.id}
                    tittle={e.tittle}
                    imagenurl={e.imagenurl}
                    direccion={e.direccion}
                    presupuesto={e.presupuesto}
                    description={e.description}
                    postulantes={e.postulantes}
                    state={e.state}
                    imageServiceUrl={e.imageServiceUrl}
                    detail={e}
                  />
                ))}
              </div>
            ) : (
              <SinJobs />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
