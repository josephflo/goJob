import React from "react";
import { NavLink } from "react-router-dom";
import { userFormBackground } from "../../../assets";

import capitalizeFirstLetter from "../../../helpers/capitalizeFirstLetter";

function ServiceCard({
  tittle,
  id,
  presupuesto,
  description,
  tarif_min,
  userId,
}) {
  const Swal = require("sweetalert2");
  function handleClick() {
    Swal.fire({
      title: "Añadido a Favoritos",
      icon: "success",
      confirmButtonText: "ok",
    });
  }

  tittle = capitalizeFirstLetter(tittle);
  description = capitalizeFirstLetter(description);

  return (
    <div className="bg-gray-100 p-4">
      <div class="h-100 overflow-hidden">
        <img src={userFormBackground} className="object-fill" alt="" />
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
          <p className="text-sm">Name: {userId.firstName}</p>
        </div>
        <div className="col-span-1 gap-2 flex flex-col justify-center items-end">
          <p className="h-9 top-9 font-sans not-italic font-normal text-2xl text-black">
            {tarif_min}${presupuesto}
          </p>
          <p className="">
            <NavLink to={`/calender/${id}`}>
              <button className="w-20 h-10 bg-blue-400 rounded-lg">
                Postular
              </button>
            </NavLink>
          </p>
          <p>
            <NavLink to={`/detail/${id}`}>
              <button className=" w-20 h-10 rounded-lg bg-gray-300">
                Contactar
              </button>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
