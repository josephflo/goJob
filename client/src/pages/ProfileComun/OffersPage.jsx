import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "./Card";
import { getUserDetail } from "../../redux/actions/userActions";
import SinServicios from "../ProfielProfesional/SinServicios";
import Filter from "./Filter";

export default function OffersPage() {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  const services = useSelector((state) => state.userLogin);
 
 

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, []);

  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5">
      <Filter />

          <div className=" pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services?.myServices ?
            services?.myServices.map((e) => 
            <Card
            key={e.id}
            tittle={e.tittle} 
            imagenurl={e.imagenurl} 
            direccion={e.direccion} 
            presupuesto={e.presupuesto} 
            description={e.description} 
            postulantes={e.postulantes} 
            state={e.state} 
            />  ) : <SinServicios/> }
              
            </div>
          </div>
        </div>
     
  
  );
}
