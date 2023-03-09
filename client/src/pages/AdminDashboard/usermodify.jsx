import React from "react";

// components

import FormUser from "../AdminDashboard/formUser";
import Profile from "../AdminDashboard/profile";
import { SideBar } from "./sidebar";
import { Header } from "./header";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetail } from "../../redux/actions/userActions";
import { useState,useEffect } from "react";
import { updateUser } from "../../redux/actions/admin/inactiveuser";

export default function ModifyUser() {
  const detailUser = useSelector((state)=>state.userDetail)

  const dispatch = useDispatch();

  function updateDetail(event) {
    const value = event.target.value;

    dispatch(
      updateUser({
        ...detailUser,
        state: value,
      })
    );
  }

  

  return (
    <>
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
         <SideBar/>
                    <div className="lg:col-span-3 xl:col-span-5 p-8 h-[100vh] overflow-y-scroll">
                  <Header/>
                <div className="p-10 bg-gray-100" >
                    <div className="flex flex-wrap">
                     <div className="w-full lg:w-8/12 px-4">
                      <FormUser  detailUser={detailUser} updateDetail={updateDetail} />
                    </div>
                <div className="w-full lg:w-4/12 px-4">
                  <Profile updateDetail={updateDetail} />
        </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}