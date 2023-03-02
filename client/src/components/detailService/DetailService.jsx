import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { detail } from "../../constants/detailCard";
import { getServiceById } from "../../redux/actions/serviceActions";
import DescriptionService from "./components/DescriptionService";
import HeaderService from "./components/HeaderService";
import Postularse from "./components/Postularse";
// import Navbar from "../navbarPortada/NavBar";

export default function DetailService() {
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();

  // get detail service
  const detail = useSelector((state) => state.serviceDetail);
  console.log("acauseriddetail", detail)

  useEffect(() => {
    dispatch(getServiceById(id));
  }, []);



  return (
    <>
      <div class="grid grid-cols-3 gap-3 mx-6 bg-gray-200">
        <div class="col-span-2">
          <div class="border-2 rounded flex m-3 p-4 bg-white">
            <HeaderService 
             firstName={detail.userId?.firstName} 
             lastName={detail.userId?.lastName} 
             imageurl={detail.userId?.imageurl} 
             direccion={detail?.direccion} 
             provincia={detail?.provincia} 
             ciudad={detail?.ciudad} 
              />
          </div>
          <div class="border-2 rounded  m-3 p-4 bg-white">
            <DescriptionService detail={detail} />
          </div>
          
        </div>
        <div class="col-span-1">
          <Postularse
            firstName={detail.userId?.firstName} lastName={detail.userId?.lastName} imageurl={detail.userId?.imageurl} 
          />
        </div>
      </div>
    </>
  );
}