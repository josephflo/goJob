import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import SinServicios from "./SinServicios";
import { getMyServices } from "../../redux/actions/professionalActions";

export default function OffersPage() {

  const dispatch = useDispatch();

  const services = useSelector((state) => state.myservices);
 

  useEffect(() => {
    dispatch(getMyServices());
  }, []);

  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5">

          <div /* className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" */>
            {services?.length > 0 ? (
            services?.map((e) =>  ( 
            <Card
            key={e.id}
            tittle={e.tittle} 
            imagenurl={e.imagenurl} 
            direccion={e.direccion} 
            presupuesto={e.presupuesto} 
            description={e.description} 
            postulantes={e.postulantes} 
            state={e.state} 
            />  )) 
            ): (<SinServicios/> )}
              
            </div>
          </div>
        </div>
     
  
  );
}
