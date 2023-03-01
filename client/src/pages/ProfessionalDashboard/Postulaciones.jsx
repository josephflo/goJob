import React, { useEffect } from "react";
import { RiFilter3Line, RiUserLocationLine } from "react-icons/ri";
import SideBarProfessional from "./SideBarProfessional";
import { useDispatch, useSelector } from "react-redux";

import { getService, getServiceById } from "../../redux/actions/serviceActions";

export default function Postulaciones() {
    const dispatch = useDispatch();

    const services = useSelector((state) => state.service);

    useEffect(() => {
        dispatch(getService());
      }, []);

      useEffect(() => {
        dispatch(getServiceById(services[0]?.userId?.id));
        
      }, [services[0]?.userId?.id]);

   
  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBarProfessional />
      <div className="col-span-5">
        <div className="p-4 bg-gray-100 ">
          <div className="grid grid-cols-4 gap-4 items-center mb-4">
            <div >
              <label className=" text-black ">
                Orden
              </label>
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
            <form className="col-span-1">
              <div className="relative">
                <RiFilter3Line className="absolute left-2 top-3 text-blue-600" />
                <select className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none">
                  <option>A-Z</option>
                  <option>Z-A</option>
                </select>
              </div>
            </form>
            <div className="col-span-1">
              <button className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors">
                Borrar filtros
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
          
          {/*  <OffersCard imagenurl={services.userId?.imagenurl}
                   description={services.userId?.description}
                   title={services.userId?.title}
                   firstName={services.userId?.firstName} 
                   lastName={services.userId?.lastName}
                   />  */}
        </div>
             </div>
        </div>
      </div>
  );
}