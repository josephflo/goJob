import React from "react";
import { Link } from "react-router-dom";
import i from "./navBarInicioSecion.module.css";

function NavbarInicioSecion() {
  return (
    <div className={i.container}>
      <div className={i.logo}>
        <Link to={"/"}>
          <h2>LOGO</h2>
        </Link>
      </div>

      <div className={i.right}>
        <Link to={"/"} className={i.link}>
          <h2>Recomendar un amigo</h2>
        </Link>
        <Link to={"/"} className={i.link}>
          <h2>Conviertete profesional</h2>
        </Link>
        <Link to={"/"} className={i.link}>
          <h2>Encontrar Profesionales</h2>
        </Link>
        <Link to={"/"} className={i.link}>
          <h2 className={i.button}>Inicio Sesion</h2>
        </Link>
        <Link to={"/"} className={i.link}>
          <h2 className={i.ayuda}> ? </h2>
        </Link>
      </div>
    </div>
  );
}

export default NavbarInicioSecion;
