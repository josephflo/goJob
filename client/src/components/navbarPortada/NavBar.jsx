import n from "./NavBar.module.css";
import { Link } from "react-router-dom";

import { logo } from "../../assets";

const Navbar = () => {
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
        <Link to={"/user/login"} className={n.link}>
          <h2>
            <b>Acceder</b>
          </h2>
        </Link>
        <Link to={"/user/register"} className={n.link}>
          <h2 className={n.registrate}>Registrate</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
