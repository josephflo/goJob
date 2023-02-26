import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";

function ProfesionalPage() {
  //const service = useSelector((state) => state.service);
  const dispatch = useDispatch();
  let configFilterUser = useSelector((state) => state.configFilterUser);
  let allUsers = useSelector((state) => state.allUsers);

  
  useEffect(() => {
  }, []);

  //cargamos todos los jobs y services cuando se renderiza
  useEffect(() => {

  }, []);

  return (
    <div>
      <div class="p-1.5 sticky top-0 z-50 bg-white ">
        <NavBarPortada />
      </div>


      
      <div class="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allUsers.result && allUsers.result.length}
      </div>

    </div>
  );
}

export default ProfesionalPage;
