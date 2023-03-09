import React, { useEffect } from "react";
import SideBar from "./SideBarComun";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card/Card";
import SinServicios from "./Ups/SinServicios";
import {
  getMyServices,
  stateSelectedComun,
} from "../../redux/actions/professionalActions";

export default function OffersPage() {
  const dispatch = useDispatch();

  const services = useSelector((state) => state.myservices);
  let configFilterPerfilOfferComun = useSelector(
    (state) => state.configFilterPerfilOfferComun
  );

  useEffect(() => {
    dispatch(getMyServices(configFilterPerfilOfferComun));
    dispatch(stateSelectedComun(2));
  }, [configFilterPerfilOfferComun]);

  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5">
        <div /* className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" */
        >
          <div className=" pt-4 grid grid-cols-3 ">
            {services?.length > 0 ? (
              services?.map((e, ind) => (
                <Card
                  key={e.ind}
                  tittle={e.tittle}
                  imageServiceUrl={e.imageServiceUrl}
                  direccion={e.direccion}
                  presupuesto={e.presupuesto}
                  description={e.description}
                  postulantes={e.postulantes}
                  state={e.state}
                />
              ))
            ) : (
              <SinServicios />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
