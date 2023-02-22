import n from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButtonsss from "../auth0/LoginButtonsss";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  console.log(user);
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
        {/* <div>
          <Link to={"/user/register"} className={n.link}>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Registrarse
            </button>
          </Link>
        </div> */}
        {isAuthenticated ? (
          <Link to={"/user/profile"}>
            <img
              class="object-contain h-10 w-10 rounded-full auto"
              src={user.picture}
              alt={user.name}
            />
          </Link>
        ) : (
          <LoginButtonsss />
        )}
      </div>
    </div>
  );
};

export default Navbar;
