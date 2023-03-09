import { Link, useNavigate } from "react-router-dom";
import GoJobLogo from "../../../assets/GoJobLogo.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButtons from "../../../authentication/components/LoginButtons";
import { useEffect, useState } from "react";
import NavLinkProf from "./NavLinkProf";
import { useSelector } from "react-redux";
import useUserLogin from "../../../helpers/customHooks/useUserLogin";
import Swal from "sweetalert2";
import LogoutButtons from "../../../authentication/components/LogoutButtons";

const NavBarPortada = () => {
  const { isAuthenticated, user } = useAuth0();
  // const users = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const { userInfo: users, isLogin } = useUserLogin();
  const [open, setOpen] = useState(false);

  const localStorage = window.localStorage.getItem("userStorage");

  useEffect(() => {
    if (users?.lastName === "sin apellido") {
      Swal.fire({
        title: "Necesitamos más datos",
        confirmButtonColor: "green",
      });
      navigate("/aditionalinfo");
    }
  }, [users]);
  console.log(users);

  return (
    <nav class="bg-white">
      <div class="flex items-center font-medium justify-around">
        <div class="z-50 p-3 md:w-auto w-full flex justify-between md:p-7 lg:p-7">
          <Link to="/">
            <img src={GoJobLogo} alt="logo" className="md:cursor-pointer h-9" />
          </Link>
          <div
            className="text-3xl px-2 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-4 px-3 inline-block">
              Inicio
            </Link>
          </li>
          <NavLinkProf />
          <li>
            <Link to="/service" className="py-4 px-3 inline-block">
              Servicios
            </Link>
          </li>
          {localStorage && (
            <li>
              {JSON.parse(localStorage).role === "comun" ||
              JSON.parse(localStorage).role === "professional" ? (
                <Link to="/create/service" className="py-3 px-2 inline-block">
                  Crear Servicio
                </Link>
              ) : null}
            </li>
          )}

          {localStorage && JSON.parse(localStorage).role === "admin" && (
            <li>
              <Link to="/Dashboard" class="py-4 px-3 inline-block">
                Dashboard
              </Link>
            </li>
          )}
        </ul>
        {localStorage && JSON.parse(localStorage).role !== "admin" ? (
          <div className="md:flex hidden uppercase">
            <Link
              to={`/${users?.role === "comun" ? "profile" : "myprofilep"}/${
                users?.id
              }`}
              class=""
            >
              <img
                className="object-contain h-12 w-12 rounded-full auto "
                src={users?.imagePerfil}
                alt={users?.firstName}
              />
              {/* Mi Perfil */}
            </Link>
          </div>
        ) : (
          <div>
            {localStorage && JSON.parse(localStorage).role === "admin" ? (
              <img
                className="object-contain h-12 w-12 rounded-full auto "
                src={users?.imagePerfil}
                alt={users?.firstName}
              />
            ) : (
              <LoginButtons />
            )}
          </div>
        )}
        {/* {users && (
          <div class="py-4">
            <Link to={"/user/profile"}>
              <img
                class="object-contain h-16 w-16 rounded-full auto px-3 py-3"
                src={users?.imagePerfil}
                alt={users?.firstName}
              />
            </Link>
          </div>
        )} */}
        {/* <div class="md:block hidden"> */}
        {/* <Button /> */}
        {/* </div> */}

        {/********************** Mobile nav **********************/}

        <ul
          className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%]"}`}
        >
          <li>
            <Link to="/" className="py-3 px-2 inline-block">
              Inicio
            </Link>
          </li>
          <NavLinkProf />
          <li>
            <Link to="/service" className="py-3 px-2 inline-block">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/admin/create/job" className="py-3 px-2 inline-block">
              Crear Jobs
            </Link>
          </li>
          <li>
            <Link to="/create/service" className="py-3 px-2 inline-block">
              Crear Servicio
            </Link>
          </li>
          {/* <li>
            <Link to="/user/register" className="py-3 px-2 inline-block">
              Crear User
            </Link>
          </li> */}
          <li>
            {users?.role === "comun" ? (
              <Link
                to={`/profile/${users.id}`}
                className="py-7 px-2 inline-block"
              >
                <img
                  className="object-contain h-16 w-16 rounded-full auto "
                  src={users?.imagePerfil}
                  alt={users?.firstName}
                />
                {/* Mi Perfil */}
              </Link>
            ) : users?.role === "professional" ? (
              <Link
                to={`/myprofilep/${users?.id}`}
                className="py-7 px-2  inline-block"
              >
                <img
                  className="object-contain h-16 w-16 rounded-full auto "
                  src={users?.imagePerfil}
                  alt={users?.firstName}
                />
                {/* Mi Perfil */}
              </Link>
            ) : (
              // <LoginButtons />
              <></>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarPortada;
