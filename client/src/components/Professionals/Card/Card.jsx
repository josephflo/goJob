import React from "react";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import { HiHeart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { BsCheck2Square} from "react-icons/bs";
import { CgProfile} from "react-icons/cg";


import './card.css';

function Card({
  id,
  firstName,
  lastName,
  image,
  job,
  contrat,
  numberJobs,
  reviews,
  description,
  ratings,
  tarif_min='$',
}) {
  
  const Swal = require('sweetalert2');
  function handleClick(){
    Swal.fire({
      title: 'Añadido a Favoritos',
      icon: 'success',
      confirmButtonText: 'ok'
    })
  }
  return (
    <div className="card">
      <img src={image} className="card-img" alt="image-profile" />
      <div>
        <h2 className="name">
          {firstName} {lastName}
        </h2>
        <h3 className="profesion">{job}</h3>
        <p className="description">{description}</p>
        <h2 className="rating">{ratings}</h2>
        <h1 className="reviews">{reviews} reseñas</h1>
        <h1 className="price">{tarif_min}</h1>
        <h2 className="tarif_min">Tarifa min</h2>
        <h2 className="contrat">{contrat} contratos</h2>
        <h2 className="numberJobs">{numberJobs} trabajos realizados</h2>
      </div>
      <div>
        <NavLink to={`/calender/${id}`}>
          <button className="btn_calendar">Reservar día de Trabajo</button>
        </NavLink>
        <NavLink to={`/detail/${id}`}>
          <button className="btn_contact">Contactar</button>
        </NavLink>
        <div class="flex space-x-4">
        <button  onClick={() =>{ handleClick()}}>
        <HiHeart className="icon_heart"/>
        </button>
        < AiFillStar size={32} className='star'/>
        < BsCheck2Square size={25} className='check'/>
        < CgProfile size={32} className='icon_profile'/>
        </div>
      </div>
    </div>
  );
}

export default Card;
