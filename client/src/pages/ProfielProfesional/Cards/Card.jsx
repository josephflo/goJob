import React from "react";

import { userFormBackground } from "../../../assets";

export default function Card({
  id,
  imagenurl,
  imageServiceUrl,
  tittle,
  presupuesto,
  description,
  postulantes,
  state,
  handleModalOffer,
}) {
  return (
    <>
      <button onClick={handleModalOffer}>
        <div key={id} className="bg-gray-100 grid grid-cols-1">
          <div className="col-span-1">
            <div className="h-100 overflow-hidden">
              <div className="col-span-2 flex">
                {imageServiceUrl === "sin foto" ? (
                  <img
                    src={userFormBackground}
                    className="object-fill "
                    alt=""
                  />
                ) : (
                  <img
                    src={imageServiceUrl}
                    alt=""
                    className="object-fill h-full"
                  />
                )}
              </div>
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
              <h1 className="top-9 font-sans font-semibold text-xl not-italic text-white">
                {tittle}
              </h1>
            </div>
          </div>

          {/* <div className="box-border bg-white border-solid-gray-300 rounded-sm p-4">
            <div className="text-left">
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
          </div> */}
        </div>
      </button>
    </>
  );
}
