import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import UserProfile from "./UserProfile";
import SideBarData from "./SibeBarData";

function SideBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>
        <UserProfile toggle={toggle}/>
        <SideBarData toggle={toggle}/>
     {/*  <div
        className={`flex gap-5 items-center ${
          toggle
            ? "bg-none transition-all duration-300 delay-200"
            : "bg-white rounded-xl p-2"
        } min-w-[3.5rem] h-[3.5rem] `}
      > */}
      
      <div
        className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <BiChevronLeft
          className={`${
            toggle ? "rotate-180" : ""
          } text-3xl transition-all duration-300`}
        />
     
      </div>
    </div>
  );
}

export default SideBar;
