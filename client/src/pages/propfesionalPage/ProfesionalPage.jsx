import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";
import Filter from "../../containers/filters/Filter";
import FilterUser from "../../containers/filters/filterUser/filterUser";
import PaginationProfesional from "../../containers/filters/filterUser/PaginationProfesional";
import { getAllProfesionales } from "../../redux/actions/users/profesionales";
import Professionals from "./components/Professionals";

function ProfesionalPage() {
  //const service = useSelector((state) => state.service);
  let configFilterUser = useSelector((state) => state.configFilterUser);
  const usersProfesionales = useSelector((state) => state.usersProfesionales);
  const dispatch = useDispatch();

  //cargamos todos los jobs y services cuando se renderiza
  useEffect(() => {
    dispatch(getAllProfesionales(configFilterUser));
  }, []);

  console.log(usersProfesionales);

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white ">
        <NavBarPortada />
      </div>

      <div>
        <FilterUser />
      </div>

      <div className="flex flex-col justify-center items-center my-2 ">
        <PaginationProfesional />
      </div>

      <div className="pt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {usersProfesionales.result ? (
          <Professionals/>
        ) : (
          <div className="flex items-center col-span-4 justify-center h-screen">
            <p className="text-2xl font-semibold">{"Sin resultados"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfesionalPage;
