import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";
import Filter from "../../containers/filters/Filter";
import { getService } from "../../redux/actions/serviceActions";
import { getUsers } from "../../redux/actions/userActions";

import Services from "./services/Services";

function ServicesPage() {
  let services = useSelector((state) => state.services);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getService());
  }, []);

  return (
    <div>
      <div class="p-1.5 sticky top-0 z-50 bg-white ">
        <NavBarPortada />
      </div>
      <div>
        <h1 className=" left-12 top-36 font-sans not-italic font-extrabold text-2xl text-black">
          Soluciones cerca de ti: encuentra un profesional
        </h1>

        <div className=" ">
          {" "}
          <Filter />{" "}
        </div>
        <h1 className=" left-12 top-80 font-sans not-italic text-1xl text-black">
          Profesionales que se ajustan a tus necesidades
        </h1>
      </div>

      <div className="flex flex-wrap pt-80 w-[50%] mx-auto">
        {services?.length > 0 ? (
          <Services users={services} />
        ) : (
          <p> ups! no hay profesionales </p>
        )}
      </div>
    </div>
  );
}

export default ServicesPage;
