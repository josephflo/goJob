import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";
import Filter from "../../containers/filters/Filter";
import { getJobs } from "../../redux/actions/jobActions";
import { getAllServices } from "../../redux/actions/services/getServices";
import Services from "./services/Services";

function ServicesPage() {
  const service = useSelector((state) => state.service); //obtiene  el estado-objeto servicio
  let configFilterServices = useSelector((state) => state.configFilterServices); //obtiene este estado
  // configFilterServices: {
  //   page: 1,
  //   page_size: 15,
  //   state: "pendiente",
  //   tittle: "",
  //   orderFecha: "DESC",
  //   provincia: "Buenos Aires",
  //   ciudad: false,
  //   job: false,
  // },

  const dispatch = useDispatch();//el despachador de acciones

  useEffect(() => {
    dispatch(getAllServices(configFilterServices));//si modificamos el estado configFilterServices se guarda en redux los nuevos valores
console.log(service)
  }, [configFilterServices]);

  //cargamos todos los jobs y services cuando se renderiza
  useEffect(() => {
    dispatch(getJobs());
    dispatch(getAllServices(configFilterServices));
    
  }, []); 

  return (
    <div>
      <div class="p-1.5 sticky top-0 z-50 bg-white">
        <NavBarPortada />
      </div>
      <div className="pl-10 px-10">
        <div>
          <div className=" ">
            {" "}
            <Filter totalPages={service.totalPages} />{" "}
          </div>
        </div>

        <div class="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {service.result && service.result.length > 0 ? (
            <Services services={service.result} />
          ) : (
            <p className="flex items-center justify-center h-screen">
              {" "}
              ups! no hay servicios{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
