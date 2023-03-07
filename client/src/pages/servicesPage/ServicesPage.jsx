import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";
import Filter from "../../containers/filters/Filter";
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
  const totalPages = useSelector((state) => state.totalPages);
  let configFilterServices = useSelector((state) => state.configFilterServices);
  const dispatch = useDispatch();

  let myPostulaciones = useSelector((state) => state.mypostulaciones);

  useEffect(() => {
    dispatch(cleanAllServices());
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
        {/* <h1 className=" text-5xl text-black mx-auto p-7 text-center">
          Página de servicios
        </h1> */}
        <div>
          {/* <h1 className=" left-12 top-36 font-sans not-italic font-extrabold text-2xl text-black">
            Soluciones cerca de ti: encuentra un profesional
          </h1> */}

          <div className=" ">
            {" "}
            <Filter totalPages={totalPages} />{" "}
          </div>
        </div>

        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {service.result && service.result.length > 0 ? (
            <Services
              services={service.result}
              myPostulaciones={myPostulaciones}
            />
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
