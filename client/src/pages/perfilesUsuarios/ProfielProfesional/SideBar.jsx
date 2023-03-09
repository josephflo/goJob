import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { RiFolderUserLine, RiLogoutBoxLine } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import logo from "../ProfileComun/image.svg";
import { FiHome } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import {
  stateSelected,
  stateSelectedComun,
} from "../../../redux/actions/professionalActions";

import { CgProfile } from "react-icons/cg";
import {
  cleanOfferPerfilProfessional,
  cleanPostulacionesPerfilProfessional,
  cleanTrabajosPerfilProfessional,
} from "../../../redux/actions/users/profileUser";
import LogoutButtons from "../../../authentication/components/LogoutButtons";

export default function SideBar() {
  const users = useSelector((state) => state.userLogin);

  const imagePerfil = useSelector((state) => state.userLogin.imagePerfil);

  // Button
  const select = useSelector((state) => state.selected);
  const dispatch = useDispatch();

  // const [selected, setSelected] = useState(select);
  const handleOption = (e, p) => {
    console.log(select, p);
    // e.preventDefault();
    dispatch(stateSelected(p));
    // setSelected(p);
  };

  const handleCleanClick = () => {
    dispatch(cleanOfferPerfilProfessional());
    dispatch(cleanTrabajosPerfilProfessional());
    // dispatch(cleanPostulacionesPerfilProfessional());
    dispatch(stateSelected(1));
    dispatch(stateSelectedComun(1));
  };

  return (
    <div>
      <div className="col-span-1 p-8 border-r">
        <div className="text-center p-8">
          <img
            src={imagePerfil}
            alt={users.firstName}
            className="w-1/8 rounded-full h-auto"
          />
        </div>

        <div className=" flex flex-col h-[430px] justify-between">
          <nav>
            <ul>
              <li>
                <button onClick={(e) => handleOption(e, 1)}>
                  <Link
                    to={`/myprofilep/${users.id}`}
                    // className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                    className={
                      select === 1
                        ? "flex items-center mt-1 mb-1 w-[200px] gap-4 bg-blue-600 p-4 text-gray-400 text-white rounded-lg transition-colors"
                        : "flex items-center mt-1 mb-1 w-[200px] gap-4 hover:bg-blue-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                    }
                  >
                    <CgProfile />
                    Mi Perfil
                  </Link>
                </button>
              </li>
              <li>
                <button onClick={(e) => handleOption(e, 2)}>
                  <Link
                    to={`/profilep/${users.id}`}
                    // className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                    className={
                      select === 2
                        ? "flex items-center mt-1 mb-1 w-[200px] gap-4 bg-blue-600 p-4 text-gray-400 text-white rounded-lg transition-colors"
                        : "flex items-center mt-1 mb-1 w-[200px] gap-4 hover:bg-blue-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                    }
                  >
                    <GoBriefcase />
                    Mis Publicaciones
                  </Link>
                </button>
              </li>
              <li>
                <button onClick={(e) => handleOption(e, 3)}>
                  <Link
                    to={`/profilep/jobs/${users.id}`}
                    // className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                    className={
                      select === 3
                        ? "flex items-center mt-1 mb-1 w-[200px] gap-4 bg-blue-600 p-4 text-gray-400 text-white rounded-lg transition-colors"
                        : "flex items-center mt-1 mb-1 w-[200px] gap-4 hover:bg-blue-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                    }
                  >
                    <BsTools />
                    Mis trabajos
                  </Link>
                </button>
              </li>
              <li>
                <button onClick={(e) => handleOption(e, 4)}>
                  <Link
                    to={`/profilep/postulaciones/${users.id}`}
                    // className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                    className={
                      select === 4
                        ? "flex items-center mt-1 mb-1 w-[200px] gap-4 bg-blue-600 p-4 text-gray-400 text-white rounded-lg transition-colors"
                        : "flex items-center mt-1 mb-1 w-[200px] gap-4 hover:bg-blue-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                    }
                  >
                    <FaPaperPlane />
                    Mis Postulaciones
                  </Link>
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <img src={logo} alt="image" />

            <button onClick={handleCleanClick}>
              <Link
                to="/"
                className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
              >
                <FiHome />
                Volver
              </Link>
            </button>

            <button className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors">
              <RiLogoutBoxLine />
              <LogoutButtons />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
