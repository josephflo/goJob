import React from "react";
import { Link } from "react-router-dom";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";
import {RiDashboardLine,RiFolderUserLine,RiMoneyDollarBoxLine,RiCalendarEventLine,RiLogoutBoxLine,
    RiNotification3Line,RiArrowDownSLine,
    RiSearchLine,RiCheckboxBlankCircleFill,RiFilter3Line,RiUserLocationLine,RiCloseLine} from "react-icons/ri"
    import logo from "../AdminDashboard/image.svg"

// components

import FormUser from "../AdminDashboard/formUser";
import Profile from "../AdminDashboard/profile";

export default function ModifyUser() {
  return (
    <>
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
    <div className="col-span-1 p-8 border-r">
                    <div className="text-center p-8">
                <h1 className="uppercase font-bold tracking-[4px]">GoJob</h1>
                    </div>
                    <div className=" flex flex-col h-[430px] justify-between">
                    <nav>
                        <ul>
                            <li>
                            <Link to="#" className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors">
                               <RiDashboardLine/>
                          Dashboard
                                </Link>
                            </li>
                            <li>
                            <Link to="#" className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors">
                               <RiFolderUserLine/>
                          Usuarios
                                </Link>
                            </li>
                            <li>
                            <Link to="#" className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors">
                               <RiMoneyDollarBoxLine/>
                          Servicios
                                </Link>
                            </li>
                            <li>
                            <Link to="#" className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors">
                               <RiCalendarEventLine/>
                          Calendario
                                </Link>
                            </li>
                        </ul>              

                    </nav>
                    <div className="flex flex-col gap-4">
                        <img src={logo} alt="image"/>
                        <Link to="#" className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors">
                                <RiLogoutBoxLine/>
                                Log Out
                                </Link>
                    </div>
                    </div>
                    </div>
                    <div className="lg:col-span-3 xl:col-span-5 p-8 h-[100vh] overflow-y-scroll">
                    <header className="flex items-center justify-between  p-4 w-full pl-11 md:px-10">
                    {/* Search */}
                    <form className="w-[30%]">
                        <div className="relative w-full">
                        <RiSearchLine className="absolute left-2 top-3" />
                        <input type="text" className="p-2 py-2 pl-8 pr-4 outline-none rounded-lg w-full" placeholder="Buscar" />

                        </div>
                        
                    </form>
                {/* Notifications */}
                <nav className="w-[70%] flex justify-end">
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link to="#" className="relative">
                            <RiNotification3Line className="text-lg"/>
                            <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-red-500"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center gap-1">
                            Usuario
                            <RiArrowDownSLine/>
                            </Link>
                          
                        </li>
                        
                    </ul>

                </nav>
                </header>
                <div className="p-10 bg-gray-100" >
                    <div className="flex flex-wrap">
                     <div className="w-full lg:w-8/12 px-4">
                      <FormUser />
                    </div>
                <div className="w-full lg:w-4/12 px-4">
                  <Profile />
        </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}