import React, { useEffect } from "react";
import { RiFilter3Line, RiUserLocationLine } from "react-icons/ri";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getServiceById } from "../../redux/actions/serviceActions";
import { useParams } from "react-router";
import Card from "./Card";

export default function OffersPage() {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  const services = useSelector((state) => state.serviceDetail);


  useEffect(() => {
    dispatch(getServiceById(id));
  }, []);

  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5">
        <div className="p-4 bg-gray-100 ">
          <div className="grid grid-cols-5 gap-4 items-center mb-4">
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
          </div>

          <div className="flex items-center justify-between mb-8">
            {services? <Card
            firstName={services.userId?.firstName} 
            tittle={services?.tittle} 
            imageurl={services?.imageurl} 
            presupuesto={services?.presupuesto} 
            description={services?.description} 
            ciudad={services?.ciudad} 
            /> : <p>Aún no creaste servicios</p> }
              
            </div>
          </div>
        </div>
      </div>
  
  );
}
