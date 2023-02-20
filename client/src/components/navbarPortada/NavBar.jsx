import n from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className={n.container}>
      <div className={n.logo}>
        <Link to={"/"}>
          {/* <h2>LOGO</h2> */}
          <img src={logo} />
        </Link>
      </div>

      <div className={n.right}>
        <Link to={"/"} className={n.link}>
          <h2>Inicio</h2>
        </Link>
        <Link to={"/job"} className={n.link}>
          <h2>Jobs</h2>
        </Link>
        <Link to={"/service"} className={n.link}>
          <h2>Services</h2>
        </Link>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => loginWithRedirect()}
        >
          Acceder
        </button>

        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Cerrar sesion
        </button>

        <Link to={"/user/register"} className={n.link}>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Registrarse</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
