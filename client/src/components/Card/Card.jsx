import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { HiHeart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import image from "../../assets/profile.png";
import "./card.css";

function Card({
  id = 1,
  firstName = "Dario",
  lastName = "Rodriguez",
  image = "image",
  job = "Carpintero",
  contrat = 87,
  numberJobs = 20,
  reviews = 10,
  description = "Carpintero con certificado.",
  ratings = 5,
  tarif_min = "$" + 1500,
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
   

      <div className="grid grid-cols-4 box-border absolute h-72 w-70 top-96 bg-white border-solid-gray-300 rounded-2xl">
        <div className=" flex col-span-1 w-56">
          <img
            src={image}
            alt=""
            class=" absolute h-44 w-52 left-4 top-11 rounded-2xl "
          />
        </div>
        <div className=" flex col-span-2">
          <p className="absolute w-38 h-7 left-60 top-9 font-sans text-xl not-italic text-black">
            {firstName} {lastName}{" "}
            <i className="fa-regular fa-square-check text-green-700"></i>
          </p>
          <p className="absolute w-38 h-6 left-60 top-20 font-sans not-italic font-light text-base text-gray-500">
            {job}
          </p>
          <p className="absolute w-38 h-4 left-56 top-32 font-sans not-italic font-light text-base text-zinc-500">
            <i class="fa-solid fa-user px-3"></i>
            {contrat} contratos
          </p>
          <p className="absolute w-38 h-4 left-96 top-32 font-sans not-italic font-light text-base text-zinc-500">
            {numberJobs} trabajos realizados
          </p>
          <p className="absolute w-38 h-9 left-60 top-48 font-sans not-italic font-normal text-base text-black">
            {description}
          </p>
        </div>
        <div className=" flex col-span-1">
          <p className=" absolute h-9 left-2/3 top-9 font-sans not-italic font-normal text-3xl text-black">
            <i class="fa-solid fa-star text-yellow-400"></i>
            {ratings}
          </p>

          <p className="absolute w-36 h-6 left-2/3 top-20 font-sans not-italic text-sm font-light text-gray-300">
            {reviews}reseñas
          </p>
        </div>
        <div className=" flex col-span-1">
          <p className="absolute w-36 h-10 left-3/4 top-9 font-sans not-italic font-normal text-3xl text-black">
            {tarif_min}
          </p>
          <p className="absolute w-36 h-30 left-3/4 top-20 font-sans not-italic text-sm font-light text-gray-300 ">
            {" "}
            Tarifa min
          </p>

          <NavLink to={`/calender/${id}`}>
            <button className=" absolute w-48 h-14 left-2/3 top-32 bg-blue-400 rounded-2xl">
              Reservar dia de trabajo
            </button>
          </NavLink>
          <NavLink to={`/detail/${id}`}>
            <button className="absolute w-48 h-14 left-2/3 sm:top-48 rounded-2xl bg-gray-300">
              Contactar
            </button>
          </NavLink>
        </div>
    </div>

  );
}

export default Card;
