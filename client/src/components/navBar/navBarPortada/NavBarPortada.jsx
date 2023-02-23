import n from "./navBar.module.css";
import { Link } from "react-router-dom";
import GoJobLogo from "../../../assets/GoJobLogo.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButtons from "../../../authentication/components/LoginButtons";
import { useState } from "react";
import Button from "./Button";
import NavLinks from "./NavLinks";

const NavBarPortada = () => {
  const { isAuthenticated, user } = useAuth0();
  const [open, setOpen] = useState(false);

  return (
    <nav class="bg-white">
      <div class="flex items-center font-medium justify-around">
        <div class="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={GoJobLogo} alt="logo" class="md:cursor-pointer h-9" />
          <div class="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul class="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" class="py-7 px-3 inline-block">
              Inicio
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/service" class="py-7 px-3 inline-block">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/admin/create/job" class="py-7 px-3 inline-block">
              Crear Job
            </Link>
          </li>
          <li>
            <Link to="/create/service" class="py-7 px-3 inline-block">
              Crear Servicio
            </Link>
          </li>
          <div class="py-5">
            {isAuthenticated ? (
              <Link to={"/user/profile"}>
                <img
                  class="object-contain h-16 w-16 rounded-full auto px-3 py-3"
                  src={user.picture}
                  alt={user.name}
                />
              </Link>
            ) : (
              <LoginButtons />
            )}
          </div>
        </ul>
        <div class="md:block hidden">{/* <Button /> */}</div>

        {/* Mobile nav */}

        <ul
          class={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" class="py-7 px-3 inline-block">
              Inicio
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/service" class="py-7 px-3 inline-block">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/admin/create/job" class="py-7 px-3 inline-block">
              Crear Job
            </Link>
          </li>
          <li>
            <Link to="/create/service" class="py-7 px-3 inline-block">
              Crear Servicio
            </Link>
          </li>
          <div class="py-5">
          {isAuthenticated ? (
              <Link to={"/user/profile"}>
                <img
                  class="object-contain h-16 w-16 rounded-full auto px-3 py-3"
                  src={user.picture}
                  alt={user.name}
                />
              </Link>
            ) : (
              <LoginButtons />
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};


export default NavBarPortada;
