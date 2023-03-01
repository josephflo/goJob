import React from "react";

export default function Card({ firstName,tittle, presupuesto, description, tarif_min, imagenurl}) {

  return (
    <div className="bg-gray-100 p-4">
      <div className="h-100 overflow-hidden">
        <img src={imagenurl} className="object-fill" alt="" />
      </div>

      <div className="box-border grid grid-cols-3 bg-white border-solid-gray-300 rounded-sm p-4">
        <div className="col-span-2 w-72">
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
          <p className="text-sm">Name: {firstName}</p>
        </div>
        <div className="col-span-1 gap-2 flex flex-col justify-center items-end">
          <p className="h-9 top-9 font-sans not-italic font-normal text-2xl text-black">
            {tarif_min}${presupuesto}
          </p>

         
         
        </div>
      </div>
    </div>
  );
}


