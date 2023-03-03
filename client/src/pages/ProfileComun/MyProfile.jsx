import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserDetail } from "../../redux/actions/userActions";
import CardProfile from "./CardProfile";
import SideBar from "./SideBar";


export default function MyProfile() {
    const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userLogin);


  useEffect(() => {
    dispatch(getUserDetail(id));
  }, []);
  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5">
      
              <div className=" bg-gray-100 ">
                <CardProfile
                key={user.id}
                firstName={user.firstname}
                lastName={user.lastName}
                email={user.email}
                provincia={user.provincia}
                ciudad={user.ciudad}
                direccion={user.direccion}
                phone={user.phone}
                user={user.user}
                role={user.role}
                rating_promedio={user.rating_promedio
                }

                />



</div>
</div>
</div>


  );
}