import { Link } from "react-router-dom";
import GoJobLogo from "../../../assets/GoJobLogo.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButtons from "../../../authentication/components/LoginButtons";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";

const NavBarPortada = () => {
  const { isAuthenticated, user } = useAuth0();
  const users = useSelector((state) => state.userLogin);

  const [open, setOpen] = useState(false);
  return (
    <nav class="bg-white">
      <div class="flex items-center font-medium justify-around">
        <div class="z-50 p-3 md:w-auto w-full flex justify-between md:p-7 lg:p-7">
          <Link to="/">
            <img src={GoJobLogo} alt="logo" class="md:cursor-pointer h-9" />
          </Link>
          <div class="text-3xl px-2 md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul class="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" class="py-4 px-3 inline-block">
              Inicio
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/service" class="py-4 px-3 inline-block">
              Servicios
            </Link>
          </li>
          {isAuthenticated ? (
            <li>
              <Link to="/Dashboard" class="py-4 px-3 inline-block">
                Dashboard
              </Link>
            </li>
          ) : (
            <></>
          )}
          {isAuthenticated ? (
            <li>
              <Link to="/create/service" class="py-4 px-3 inline-block">
                Crear Servicio
              </Link>
            </li>
          ) : (
            <></>
          )}
          {/* <li>
            <Link to="/user/register" class="py-4 px-3 inline-block">
              Crear User
            </Link>
          </li> */}
          {/* </ul>
        <ul> */}
          {users.role === "comun" ? (
            <Link to={`/profilec/${users.id}`} class="py-4 px-3 inline-block">
              Mi Perfil
            </Link>
          ) : users.role === "professional" ? (
            <Link to={`/profilep/${users.id}`} class="py-4 px-3 inline-block">
              Mi Perfil
            </Link>
          ) : (
            <LoginButtons />
          )}
        </ul>
        {isAuthenticated === true && (
          <div class="py-4">
            <Link to={"/user/profile"}>
              <img
                class="object-contain h-16 w-16 rounded-full auto px-3 py-3"
                src={user.picture}
                alt={user.name}
              />
            </Link>
          </div>
        )}
        {/* <div class="md:block hidden"> */}
        {/* <Button /> */}
        {/* </div> */}
        {/* Mobile nav */}

        <ul
          class={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%]"}`}
        >
          <li>
            <Link to="/" class="py-3 px-2 inline-block">
              Inicio
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/service" class="py-3 px-2 inline-block">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/admin/create/job" class="py-3 px-2 inline-block">
              Crear Jobs
            </Link>
          </li>
          <li>
            <Link to="/create/service" class="py-3 px-2 inline-block">
              Crear Servicio
            </Link>
          </li>
          {/* <li>
            <Link to="/user/register" class="py-3 px-2 inline-block">
              Crear User
            </Link>
          </li> */}
          <li>
            {users.role === "comun" ? (
              <Link to={`/profilec/${users.id}`} class="py-7 px-2 inline-block">
                Mi Perfil
              </Link>
            ) : users.role === "professional" ? (
              <Link to={`/profilep/${users.id}`} class="py-7 px-2 inline-block">
                Mi Perfil
              </Link>
            ) : (
              // <LoginButtons />
              <></>
            )}
          </li>
          <div class="py-7">
            {isAuthenticated ? (
              <Link to={"/user/profile"}>
                <img
                  class="object-contain h-16 w-16 rounded-full auto px-2 py-3"
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
