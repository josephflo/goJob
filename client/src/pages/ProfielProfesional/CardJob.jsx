import React from "react";
import { userFormBackground } from "../../assets";

export default function CardJob({
  id,
  imagenurl,
  tittle,
  presupuesto,
  description,
  postulantes,
  state,
}) {
  return (
    <div key={id} className="bg-gray-100 p-4">
      <div className="h-100 overflow-hidden">
        <img src={userFormBackground} className="object-fill" alt="" />
      </div>

      <div className="h-100 overflow-hidden bg-blue-500 border-solid-gray-300 rounded-sm p-4">
        <h1 className=" w-38 h-7 top-9 font-sans font-semibold text-xl not-italic text-white">
          {tittle}
        </h1>
      </div>

      <div className="box-border grid grid-cols-3 bg-white border-solid-gray-300 rounded-sm p-4">

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
    </div>
  );
}
