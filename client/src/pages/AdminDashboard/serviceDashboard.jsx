import React from "react";
import { Header } from "./header";
import { SideBar } from "./sidebar";
import Filter from "../../containers/filters/Filter";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllServices } from "../../redux/actions/services/getServices";
import { getJobs } from "../../redux/actions/jobActions";
import Services from "./servicemap";

export default function ServicesDashboard (){
    const service = useSelector((state) => state.service);
    
    let configFilterServices = useSelector((state) => state.configFilterServices);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllServices(configFilterServices));
    }, [configFilterServices]);
  
    //cargamos todos los jobs y services cuando se renderiza
    useEffect(() => {
      dispatch(getJobs());
      dispatch(getAllServices(configFilterServices));
    }, []);
  

    return (
            <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
               <SideBar/>                 
                <div className="col-span-5">
                <Header/>
                <div className="p-10 bg-gray-100 ">
                <Filter totalPages={service.totalPages} />
                </div>
                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {service.result && service.result.length > 0 ? (
                    <Services services={service.result} />
                ) : (
                    <p className="text-center"> ups! no hay servicios </p>
                )}
                </div>
                </div>
            </div>
    )

}