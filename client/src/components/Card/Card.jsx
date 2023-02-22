import React from "react";
import { NavLink } from "react-router-dom";
import "./card.css";

function Card({
  tittle,
  id,
  presupuesto,
  imageurl,
  job,
  contrat,
  numberJobs,
  reviews,
  description,
  ratings,
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

  console.log(job[0]);

  return (
    <div className=" sticky absolute">
      <div className="grid grid-cols-4 box-border  h-72 w-70 top-96 left-56 bg-white border-solid-gray-300 rounded-2xl">
        <div className=" flex col-span-1 w-56">
          {/* <img
            src={imageurl}
            alt=""
            className="  h-44 w-52 left-4 top-11 rounded-2xl "
          /> */}
          <p>
            <button
              onClick={() => {
                handleClick();
              }}
            >
              <i className="fa fa-heart text-red-500"></i>
            </button>
          </p>
        </div>

        <div className="col-span-2 w-72">
          <h1 className=" w-38 h-7 left-96 top-9 font-sans text-xl not-italic text-black">
            {/* {firstName} {lastName} */}
            {tittle}
            <i className="fa-regular fa-square-check text-green-700"></i>
          </h1>
          {/* <h2 className="font-sans text-base text-gray-500">{job[0].name}</h2> */}
          {/* <h3 className=" font-sans not-italic font-light text-base text-zinc-500">
            <i className="fa-solid fa-user px-3"></i>
            {contrat}20 contratos
          </h3> */}
          {/* <h3 className="font-sans not-italic font-light text-base text-zinc-500">
            10 {numberJobs} trabajos realizados
          </h3> */}
          <p className="font-sans not-italic font-normal text-base text-black">
            Descripción del trabajo:
            {description}
          </p>
          <h1>Datos del cliente</h1>
          {/* <p className="font-sans not-italic font-normal text-base text-black">
            Nombre: {firstName} {lastName}
          </p>
          <p className="font-sans not-italic font-normal text-base text-black">
            User: {user}
          </p> */}
        </div>
        <div className=" col-span-1 w-72">
          <p className="  h-9 left-2/3 top-9 font-sans not-italic font-normal text-2xl text-black">
            <i className="fa-solid fa-star text-yellow-400"></i>
            {ratings}4.5
          </p>

          <p className=" w-36 h-6 left-2/3 top-20 font-sans not-italic text-sm font-light text-gray-400">
            {reviews}reseñas
          </p>

          <p className="h-9 left-2/3 top-9 font-sans not-italic font-normal text-2xl text-black">
            {tarif_min}${presupuesto}
          </p>
          {/* <p className=" w-36 h-6 left-3/4 top-20 font-sans not-italic text-sm font-light text-gray-400">
            Tarifa minima
          </p> */}
          <p>
            <NavLink to={`/calender/${id}`}>
              <button
                className="  w-36 h-14 left-36 
             top-32 bg-blue-400 rounded-2xl"
              >
                Reservar día de trabajo
              </button>
            </NavLink>
          </p>
          <p>
            <NavLink to={`/detail/${id}`}>
              <button className=" w-36 h-14 left-36 top-48 rounded-2xl bg-gray-300">
                Contactar
              </button>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
