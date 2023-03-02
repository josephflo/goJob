import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { RiFolderUserLine, RiLogoutBoxLine } from "react-icons/ri";
import logo from "../ProfileComunDashboard/image.svg";
import { useSelector } from "react-redux";

export default function SideBar() {
  const users = useSelector((state) => state.userLogin)
  console.log(users, "acaaaaa profeee")

  return (
   
      <div>
        <div className="col-span-1 p-8 border-r">
          <div className="text-center p-8">
            <img
              src={users.imagePerfil}
              alt={users.firstName}
              className="w-1/8 rounded-full h-auto"
            />
          </div>
          <div className="text-center p-8">
            <Link to="/">
              <h1 className="uppercase font-bold tracking-[4px]">GoJob</h1>
            </Link>
          </div>
          <div className=" flex flex-col h-[430px] justify-between">
            <nav>
              <ul>
                <li>
                  <Link
                    to={`/comun/${users.id}`}
                    className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                  >
                    <RiFolderUserLine />
                    Mis Ofertas
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/comun/jobs`}
                    className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                  >
                    <RiFolderUserLine />
                    Mis trabajos
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/comun/postulaciones`}
                    className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                  >
                    <RiFolderUserLine />
                    Mis Postulaciones
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-4">
              <img src={logo} alt="image" />
              <Link
                to="#"
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