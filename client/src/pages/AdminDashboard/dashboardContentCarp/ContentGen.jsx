//eslint-disable react-hooks/rules-of-hooks
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {dashboardContentAdmin } from "../../../redux/actions/dashboard/dashboardcontent";
import { getService } from "../../../redux/actions/serviceActions";
import DashboardContent from "./DashboardContent";

export default function ContentGen({ isAuthenticated, isLoading }) {
  const dispatch = useDispatch();

  let userLogin = useSelector((state) => state.userLogin);
  let services = useSelector((state) => state.servicesDashboard);

  let servicesDashboard = useSelector((state) => state.dashboardAdmin);

  useEffect(() => {
    console.log("Entra aqui??");
     dispatch(dashboardContentAdmin())
  }, [isAuthenticated]);

  return (
    <div>
      {isLoading && <div>Cargando...</div>}

      {isAuthenticated && servicesDashboard.status == "success" && userLogin.role === "admin" &&(
        <DashboardContent servicesDashboard={servicesDashboard}/>
      )}
    </div>
  );
}
