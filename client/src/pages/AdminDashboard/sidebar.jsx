import React from "react";
import { Link } from "react-router-dom";
import {
  RiDashboardLine,
  RiFolderUserLine,
  RiMoneyDollarBoxLine,
  RiCalendarEventLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import logo from "../AdminDashboard/image.svg";
import LogoutButtons from "../../authentication/components/LogoutButtons";

export function SideBar() {
  return (
    <div className="col-span-1 p-8 border-r">
      <div className="text-center p-8">
        <Link to="/">
          <h1 className="uppercase font-bold tracking-[4px]">Go-Job</h1>
        </Link>
      </div>
      <div className=" flex flex-col h-[430px] justify-between">
        <nav>
          <ul>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
              >
                <RiDashboardLine />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/users"
                className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
              >
                <RiFolderUserLine />
                Usuarios
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/services"
                className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
              >
                <RiMoneyDollarBoxLine />
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/jobs"
                className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors"
              >
                <RiCalendarEventLine />
                Jobs
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
            <LogoutButtons />
          </Link>
        </div>
      </div>
    </div>
  );
}
