import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import SinServicios from "./SinServicios";
import { getMyServices } from "../../redux/actions/professionalActions";


export default function OffersPageP() {
  const dispatch = useDispatch();

  const services = useSelector((state) => state.myservices);
 

  useEffect(() => {
    dispatch(getMyServices());
  }, []);

  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5">
        <div className="p-4 bg-gray-100 ">
          {/* <div className="grid grid-cols-5 gap-4 items-center mb-4">
            <div>
              <label className=" text-black ">Estado</label>
            </div>
            <form className="col-span-1">
              <div className="relative">
                <RiUserLocationLine className="absolute left-2 top-3 text-blue-600" />
                <select className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none">
                  <option>Pendiente</option>
                </select>
              </div>
            </form>
            <div>
              <label className=" text-black ">Orden</label>
            </div>
            <form className="col-span-1">
              <div className="relative">
                <RiFilter3Line className="absolute left-2 top-3 text-blue-600" />
                <select className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none">
                  <option>Mas antiguo</option>
                  <option>Mas reciente</option>
                </select>
              </div>
            </form>
            <div className="col-span-1">
              <button className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors">
                Borrar filtros
              </button>
            </div>
          </div> */}
          <div className=" pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
            {services?.length > 0 ? (
              services?.map((e) => (
                <Card
                  key={e.id}
                  id={e.id}
                  tittle={e.tittle}
                  imagenurl={e.imagenurl}
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
