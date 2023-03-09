import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserDetail } from "../../../redux/actions/userActions";
import CardProfile from "./Card/CardProfile";
import SideBarComun from "./SideBarComun";
import SideBar from "./SideBarComun";

export default function MyProfile() {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, []);
  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBarComun />
      <div className="col-span-5">
        <div className=" bg-gray-100 ">
          <CardProfile
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            provincia={user.provincia}
            ciudad={user.ciudad}
            direccion={user.direccion}
            phone={user.phone}
            user={user.user}
            role={user.role}
            rating_promedio={user.rating_promedio}
          />
        </div>
      </div>
    </div>
  );
}
