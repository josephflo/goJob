import React from "react";
import { NavLink } from "react-router-dom";
import { HiHeart } from "react-icons/hi";
import "./card.css";

function Card({
  id,
  firstName,
  lastName,
  imageurl,
  job,
  contrat,
  numberJobs,
  reviews,
  description,
  ratings,
  /* tarif_min, */
}) {
  const Swal = require("sweetalert2");
  function handleClick() {
    Swal.fire({
      title: "Añadido a Favoritos",
      icon: "success",
      confirmButtonText: "ok",
    });
  }
  return (
    <div className=" sticky absolute">
      <div className="grid grid-cols-4 box-border  h-72 w-70 top-96 left-56 bg-white border-solid-gray-300 rounded-2xl">
        <div className=" flex col-span-1 w-56">
          <img
            src={imageurl}
            alt=""
            className="  h-44 w-52 left-4 top-11 rounded-2xl "
          />
        </div>
        <div className=" flex col-span-2">
          <p className=" w-38 h-7 left-60 top-9 font-sans text-xl not-italic text-black">
            {firstName} {lastName}
            <i className="fa-regular fa-square-check text-green-700"></i>
          </p>
          <p className=" w-38 h-6 left-60 top-20 font-sans not-italic font-light text-base text-gray-500">
            {job}
          </p>
          <p className=" w-38 h-4 left-56 top-32 font-sans not-italic font-light text-base text-zinc-500">
            <i className="fa-solid fa-user px-3"></i>
            {contrat} contratos
          </p>
          <p className=" w-38 h-4 left-96 top-32 font-sans not-italic font-light text-base text-zinc-500">
            {numberJobs} trabajos realizados
          </p>
          <p className=" w-38 h-9 left-60 top-48 font-sans not-italic font-normal text-base text-black">
            {description}
          </p>
        </div>
        <div className=" flex col-span-1">
          <p className="  h-9 left-2/3 top-9 font-sans not-italic font-normal text-3xl text-black">
            <i className="fa-solid fa-star text-yellow-400"></i>
            {ratings}
          </p>

          <p className=" w-36 h-6 left-2/3 top-20 font-sans not-italic text-sm font-light text-gray-300">
            {reviews}reseñas
          </p>
        </div>
        <div className=" flex col-span-1">
          {/* <p className="absolute w-36 h-10 left-3/4 top-9 font-sans not-italic font-normal text-3xl text-black">
            {tarif_min}
          </p> */}
          <p className=" w-36 h-30 left-3/4 top-20 font-sans not-italic text-sm font-light text-gray-300 ">
            {" "}
            Tarifa min
          </p>

          <NavLink to={`/calender/${id}`}>
            <button className=" absolute w-48 h-14 left-2/3 top-32 bg-blue-400 rounded-2xl">
              Reservar dia de trabajo
            </button>
          </NavLink>
          <NavLink to={`/detail/${id}`}>
            <button className=" w-48 h-14 left-2/3 sm:top-48 rounded-2xl bg-gray-300">
              Contactar
            </button>
          </NavLink>
          <button
            onClick={() => {
              handleClick();
            }}
            className=" h-36 w-48 left-44 top-0 text-red-500"
          >
            <HiHeart size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
