import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { RiFolderUserLine, RiLogoutBoxLine } from "react-icons/ri";
import { BsTools} from "react-icons/bs";
import { FaPaperPlane} from "react-icons/fa";
import { GoBriefcase} from "react-icons/go";
import logo from "../ProfileComun/image.svg";
import { useSelector } from "react-redux";

export default function SideBar() {
  const users = useSelector((state) => state.userLogin);

  const imagePerfil = useSelector((state) => state.imagePerfil);

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
                <Link
                  to={`/profilep/${users.id}`}
                  className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                >
                  <GoBriefcase />
                  Mis Ofertas
                </Link>
              </li>
              <li>
                <Link
                  to={`/profilep/jobs/${users.id}`}
                  className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                >
                  <BsTools />
                  Mis trabajos
                </Link>
              </li>
              <li>
                <Link
                  to={`/profilep/postulaciones/${users.id}`}
                  className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                >
                  <FaPaperPlane />
                  Mis Postulaciones
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-4">
            <img src={logo} alt="image" />
            <Link
              to="/"
              className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
            >
              <RiLogoutBoxLine />
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
