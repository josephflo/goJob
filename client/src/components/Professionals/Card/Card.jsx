import React from "react";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import { HiHeart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { BsCheck2Square} from "react-icons/bs";


import './card.css';

function Card({
  id,
  firstName,
  lastName,
  name,
  description,
  image,
  rating,
  reviews,
  tarif_min,
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
        <h3 className="profesion">{name}</h3>
        <p className="description">{description}</p>
        <h2 className="rating">{rating}</h2>
        <h1 className="reviews">{reviews}</h1>
        <h1 className="price">{tarif_min}</h1>
        <h2 className="tarif_min">Tarifa min</h2>
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
        < AiFillStar className='star'/>
        < BsCheck2Square className='check'/>
        </div>
      </div>
    </div>
  );
}

export default Card;
