import React from "react";

import { userFormBackground } from "../../assets";
import "./as/BlurCard.css"

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
        <div key={id} className="relative bg-gray-100 grid grid-cols-1">

          <div className="relative col-span-1 " >
        
            <div className="h-100  overflow-hidden  ">
              <div className="h-100 min-h-100 col-span-2 min-w-full overflow-hidden">
                {imageServiceUrl === "sin foto" ? (
                  <img
                    src={userFormBackground}
                    className="object-cover min-w-full "
                    alt=""
                  />
                ) : (
                  <img
                    src={imageServiceUrl}
                    alt=""
                    className="object-cover min-w-full "
                  />
                )}
              </div>  
            </div>

            <div className={`h-100 absolute min-w-full text-center bottom-0 overflow-hidden border-solid-gray-300 pt-1 pb-2 ${
                state === "pendiente"
                  ? "bg-green-800/50"
                  : state === "terminado"
                  ? "bg-slate-400/40"
                  : "bg-cyan-700/60 	"
              } container_videogames `}>


              <h1 className="top-9 font-sans font-semibold text-sm not-italic text-white">
                {tittle}
              </h1>
            </div>
          </div>

        </div>
      </button>
    </>
  );
}
