import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";
import Filter from "../../containers/filters/Filter";
import Pagination from "../../containers/pagination/Pagination";
import { getJobs } from "../../redux/actions/jobActions";
import { getService } from "../../redux/actions/serviceActions";
import { getAllServices } from "../../redux/actions/services/getServices";
import { getUsers } from "../../redux/actions/userActions";

import Services from "./services/Services";

function ServicesPage() {
  const service = useSelector((state) => state.service);
  let configFilterServices = useSelector((state) => state.configFilterServices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices(configFilterServices));
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
        {/* <h1 className=" text-5xl text-black mx-auto p-7 text-center">
          Página de servicios
        </h1> */}
        <div>
          {/* <h1 className=" left-12 top-36 font-sans not-italic font-extrabold text-2xl text-black">
            Soluciones cerca de ti: encuentra un profesional
          </h1> */}

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
