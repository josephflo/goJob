import React from "react";
import { Link } from "react-router-dom";
import { userFormBackground } from "../../../../assets";

export default function CardPostulaciones({
  id,
  imagenurl,
  tittle,
  presupuesto,
  description,
  postulantes,
  state,
  imageServiceUrl,
}) {
  return (
    <div key={id} className=" bg-gray-100 p-4">
      <Link to={`/service/detail/${id}`}>
        <div className=" relative overflow-hidden h-[250px]">
          {imageServiceUrl === "sin foto" ? (
            <img
              src={userFormBackground}
              className="w-full h-full object-center object-cover fra_border_5 "
              alt=""
            />
          ) : (
            <img
              src={imageServiceUrl}
              alt=""
              className="w-full h-full object-center object-cover fra_border_5"
            />
          )}

        <div className="absolute bottom-0 text-center h-100 min-w-full overflow-hidden bg-slate-600/50 container_videogames  border-solid-gray-300 rounded-sm py-2">
          <h1 className=" w-38 h-7 top-9 font-sans font-semibold text-xl not-italic text-white  ">
            {tittle}
          </h1>
        </div>
        </div>



        <div className="box-border grid grid-cols-3 bg-white border-solid-gray-300 rounded-sm p-2">
          <div className="col-span-1 w-60">
            <h2 className="font-sans pt-1 not-italic font-medium text-gray-700">
              Descripción del trabajo:
            </h2>
            <p className="text-sm">{description}</p>
            <h2 className="font-sans pt-1 not-italic font-medium  text-gray-700">
              Estado del Servicio:
            </h2>
            <p className="text-sm">{state}</p>

            <h2 className="font-sans pt-1 not-italic font-medium  text-gray-700">
              Presupuesto:
            </h2>
            <p className="text-sm">${presupuesto}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
