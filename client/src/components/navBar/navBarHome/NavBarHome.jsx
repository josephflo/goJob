import React from "react";
import { Link } from "react-router-dom";
import h from "./navBarHome.module.css";

function NavBarHome() {
  return (
    <div className={h.container}>
      <div className={h.logo}>
        <Link to={"/"}>
          <h2>LOGO</h2>
        </Link>
      </div>

      <div className={h.right}>
        <Link to={"/"} className={h.link}>
          <h2>Conviertete profesional</h2>
        </Link>
        <Link to={"/"} className={h.link}>
          <h2>Encontrar Profesionales</h2>
        </Link>
        <Link to={"/"} className={h.link}>
          <h2 className={h.button}>Recomendar un amigo</h2>
        </Link>
        <Link to={"/"} className={h.link}>
          <h2 className={h.ayuda}> ? </h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBarHome;
