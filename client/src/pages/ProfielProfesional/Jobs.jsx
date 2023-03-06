import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import CardJob from "./Cards/CardJob";
import SinJobs from "./Ups/SinJobs";
import { getMyTrabajos } from "../../redux/actions/professionalActions";

export default function Jobs() {
  
    const dispatch = useDispatch();
  
    const jobs = useSelector((state) => state.mytrabajos);
    
    useEffect(() => {
      dispatch(getMyTrabajos());
      }, []);

  
   
  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar/>
      <div className="col-span-5">
        <div className="p-4 bg-gray-100 ">
       
          <div >
          
          {jobs?.length > 0 
          ?
            jobs?.map((e) => 
            <CardJob
            key={e.id}
            tittle={e.tittle} 
            imagenurl={e.imagenurl} 
            direccion={e.direccion} 
            presupuesto={e.presupuesto} 
            description={e.description} 
            postulantes={e.postulantes} 
            state={e.state} 
            />  ) 
            : <SinJobs/> }
        </div>
             </div>
        </div>
      </div>
  );
}