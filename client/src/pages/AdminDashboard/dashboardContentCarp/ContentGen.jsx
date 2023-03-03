//eslint-disable react-hooks/rules-of-hooks
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getService } from "../../../redux/actions/serviceActions";
import DashboardContent from "./DashboardContent";

export default function ContentGen({ isAuthenticated, isLoading }) {
  const dispatch = useDispatch();

  let userLogin = useSelector((state) => state.userLogin);
  let servicesDashboard = useSelector((state) => state.servicesDashboard);
  let users = useSelector((state) => state.users);

  useEffect(() => {
    console.log("Entra aqui??");
    dispatch(getService());
  }, [isAuthenticated]);

  return (
    <div>
      {isLoading && <div>Cargando...</div>}

      {isAuthenticated && servicesDashboard.length && (
        <DashboardContent servicesDashboard={servicesDashboard} users={users} />
      )}
    </div>
  );
}
