import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";

function ProfesionalPage() {
  //const service = useSelector((state) => state.service);
  const dispatch = useDispatch();

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

    </div>
  );
}

export default ProfesionalPage;
