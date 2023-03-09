import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { userFormBackground } from "../../../src/assets/index";
import capitalizeFirstLetter from "../../../src/helpers/capitalizeFirstLetter"
import { useAuth0 } from "@auth0/auth0-react";
import { inactiveService, activateService } from "../../redux/actions/admin/inactiveservice";
import { useDispatch, useSelector } from "react-redux";
import { getServiceById } from "../../redux/actions/serviceActions";
import axios from "axios";


function ServiceCard({
  tittle,
  id,
  presupuesto,
  description,
  userId,
  imageurl,
  myPostulaciones,
}) {

const service = useSelector((state)=>state.serviceDetail)

const dispatch = useDispatch()

  function desctivateServices (event){
      const ids = event.target.value
     
    dispatch(getServiceById(23)) 
   
    
    console.log(service)
}

useEffect(() => {
    axios.delete("admin/service/delete", {
      data: { id: 23 }
    })
    .then(response => {
      console.log(response.data);
      // manejar la respuesta de la solicitud DELETE
    })
    .catch(error => {
      console.log(error);
      // manejar el error de la solicitud DELETE
    });
  }, []);


  tittle = capitalizeFirstLetter(tittle);
  description = capitalizeFirstLetter(description);

  let id_myPostulaciones = myPostulaciones?.map((myPost) => myPost.id);

  /**LOCAL STORAGE */
  const localStorage = window.localStorage.getItem("userStorage");

  const { loginWithRedirect } = useAuth0();
  if (!localStorage) {
    return (
      <div className="bg-gray-100 p-4">
        <div className="overflow-hidden h-[350px]">
          {imageurl === "sin foto" ? (
            <img
              src={userFormBackground}
              className="w-full h-full object-center object-cover"
              alt=""
            />
          ) : (
            <img
              src={imageurl}
              className="w-full h-full object-center object-cover"
              alt=""
            />
          )}
        </div>

        <div className="box-border grid grid-cols-3 bg-white border-solid-gray-300 rounded-sm p-4">
          <div className="col-span-2">
            <h1 className=" w-38 h-7 top-9 font-sans font-semibold text-xl not-italic text-black">
              {tittle}
            </h1>
            <p className="font-sans pt-1 not-italic font-medium text-gray-700">
              Descripción del trabajo:
            </p>
            <p className="text-sm">{description}</p>
            <p className="font-sans pt-1 not-italic font-medium text-gray-700">
              Datos del cliente
            </p>
            <p className="text-sm">Name: {userId.firstName}</p>
          </div>
          <div className="col-span-1 gap-2 flex flex-col justify-center items-end">
            <p className="h-9 top-9 font-sans not-italic font-normal text-2xl text-black">
              ${presupuesto}
            </p>
            <div className="flex justify-end ">
              <button
                value={id}
                onClick={desctivateServices}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              > Eliminar </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4">
        <div className="overflow-hidden h-[350px]">
          {imageurl === "sin foto" ? (
            <img
              src={userFormBackground}
              className="w-full h-full object-center object-cover"
              alt=""
            />
          ) : (
            <img
              src={imageurl}
              className="w-full h-full object-center object-cover"
              alt=""
            />
          )}
        </div>

        <div className="box-border grid grid-cols-3 bg-white border-solid-gray-300 rounded-sm p-4">
          <div className="col-span-2">
            <h1 className=" w-38 h-7 top-9 font-sans font-semibold text-xl not-italic text-black">
              {tittle}
            </h1>
            <p className="font-sans pt-1 not-italic font-medium text-gray-700">
              Descripción del trabajo:
            </p>
            <p className="text-sm">{description}</p>
            <p className="font-sans pt-1 not-italic font-medium text-gray-700">
              Datos del cliente
            </p>
            <p className="text-sm">Name: {userId.firstName}</p>
          </div>
          <div className="col-span-1 gap-2 flex flex-col justify-center items-end">
            <p className="h-9 top-9 font-sans not-italic font-normal text-2xl text-black">
              ${presupuesto}
            </p>
            <div className="flex justify-end ">
              <button
                 value={id}
                onClick={desctivateServices}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              > Desactivar </button>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default ServiceCard;
