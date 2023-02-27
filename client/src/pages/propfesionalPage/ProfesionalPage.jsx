import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";
import Filter from "../../containers/filters/Filter";
import FilterUser from "../../containers/filters/filterUser/filterUser";
import { getAllProfesionales } from "../../redux/actions/users/profesionales";

function ProfesionalPage() {
  //const service = useSelector((state) => state.service);
  let configFilterUser = useSelector((state) => state.configFilterUser);
  const usersProfesionales = useSelector((state) => state.usersProfesionales);
  const dispatch = useDispatch();

  //cargamos todos los jobs y services cuando se renderiza
  useEffect(() => {
    dispatch(getAllProfesionales(configFilterUser));
  }, []);

  return (
    <div>
      <div class="p-1.5 sticky top-0 z-50 bg-white ">
        <NavBarPortada />
      </div>

      <div>
        <FilterUser totalPages={usersProfesionales.totalPages} />
      </div>

      <div class="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {usersProfesionales.result ? (
          usersProfesionales.result.map((user, ind) => (
            <div
              key={ind}
              className="font-sans pt-1 not-italic font-medium text-gray-700"
            >
              {user.lastName}
            </div>
          ))
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
