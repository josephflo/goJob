import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";
import Filter from "../../containers/filters/Filter";
import PaginationServices from "../../containers/filters/PaginationServices";
import { getJobs } from "../../redux/actions/jobActions";
import { getMyPostulaciones } from "../../redux/actions/professionalActions";
import { getService } from "../../redux/actions/serviceActions";
import {
  cleanAllServices,
  getAllServices,
} from "../../redux/actions/services/getServices";

import Services from "./services/Services";

function ServicesPage() {
  const service = useSelector((state) => state.service);
  let configFilterServices = useSelector((state) => state.configFilterServices);
  const dispatch = useDispatch();

  let myPostulaciones = useSelector((state) => state.mypostulaciones);

  useEffect(() => {
    //dispatch(cleanAllServices());
    dispatch(getAllServices(configFilterServices));
  }, [configFilterServices]);

  //cargamos todos los jobs y services cuando se renderiza
  useEffect(() => {
    dispatch(getJobs());
    dispatch(getAllServices(configFilterServices));
    dispatch(getMyPostulaciones());
  }, []);

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <NavBarPortada />
      </div>

      <div className="">

        <div>
          <Filter/>
        </div>

        <div className="flex flex-col justify-center items-center my-2 ">
          <PaginationServices/>
        </div>



        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {service.result && service.result.length > 0 ? (
            <Services
              services={service.result}
              myPostulaciones={myPostulaciones}
            />
          ) : (
            <div className="flex items-center col-span-4 justify-center h-screen">
              <p className="text-2xl font-semibold">{"Sin resultados"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
