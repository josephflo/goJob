import React from "react";
import { userFormBackground } from "../../../../assets";

export default function CardJob({
  id,
  imagenurl,
  tittle,
  presupuesto,
  description,
  postulantes,
  state,
  imageServiceUrl,
  detail,
}) {
  return (
    <div key={id} className="bg-gray-100 p-4 grid grid-cols-6">
      <div className="col-span-2">
        <div className="overflow-hidden h-[300px]">
          {imageServiceUrl === "sin foto" ? (
            <img
              src={userFormBackground}
              className="w-full h-full object-center object-cover "
              alt=""
            />
          ) : (
            <img
              src={imageServiceUrl}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          )}
        </div>

        <div
          className={`h-100 overflow-hidden border-solid-gray-300 rounded-sm p-4 ${
            state === "pendiente"
              ? "bg-blue-600"
              : state === "terminado"
              ? "bg-gray-600"
              : "bg-yellow-600"
          }`}
        >
          <h1 className=" w-38 h-7 top-9 font-sans font-semibold text-xl not-italic text-white">
            {tittle}
          </h1>
        </div>
      </div>

      <div className="col-span-4">
        <div className="box-border h-full flex pt-8 bg-white border-solid-gray-300 rounded-sm p-4">
          <div className="">
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

            <h2 className="font-sans pt-1 not-italic font-medium  text-gray-700">
              Fecha de publicación:
            </h2>
            <p className="text-sm">{detail.fecha_publicacion}</p>

            <h2 className="font-sans pt-1 not-italic font-medium  text-gray-700">
              Ubicación:
            </h2>
            <p className="text-sm">
              {detail.direccion}, {detail.ciudad} - {detail.provincia}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
