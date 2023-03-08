import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import CardPostulaciones from "./Cards/CardPostulaciones";
import SinPostulaciones from "./Ups/SinPostulaciones";
import { getMyPostulaciones } from "../../../redux/actions/professionalActions";
import FilterPostulaciones from "./Filter/FilterPostulaciones";

export default function Postulaciones() {
  const dispatch = useDispatch();

  const applications = useSelector((state) => state.mypostulaciones);
  let configFilterServices = useSelector(
    (state) => state.configFilterPerfilPostulaciones
  );
  useEffect(() => {
    dispatch(getMyPostulaciones(configFilterServices));
  }, [configFilterServices]);

  return (
    <div className="h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5 bg-gray-100">
        <div className="">
          <h1 className="text-lg text-left font-semibold md:text-xl lg:text-3xl">
            Mis Postulaciones
          </h1>
        </div>
        <div className="flex justify-around   items-center">
          <FilterPostulaciones />
        </div>
        <div className="h-screen p-4  ">
          <div>
            {applications?.length > 0 ? (
              <div className="grid grid-cols-3">
                {applications?.map((e) => (
                  <CardPostulaciones
                    key={e.id}
                    id={e.id}
                    tittle={e.tittle}
                    imagenurl={e.imagenurl}
                    direccion={e.direccion}
                    presupuesto={e.presupuesto}
                    description={e.description}
                    postulantes={e.postulantes}
                    state={e.state}
                    imageServiceUrl={e.imageServiceUrl}
                  />
                ))}
              </div>
            ) : (
              <SinPostulaciones />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
