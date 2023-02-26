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
import { SideBar } from "./sidebar";
import { Header } from "./header";

export default function ModifyUser() {
  return (
    <>
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
         <SideBar/>
                    <div className="lg:col-span-3 xl:col-span-5 p-8 h-[100vh] overflow-y-scroll">
                  <Header/>
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