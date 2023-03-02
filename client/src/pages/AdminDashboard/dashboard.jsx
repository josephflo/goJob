import React from "react";


import { Header } from "./header";
import { SideBar } from "./sidebar";
import { Carduser } from "./carduser";
import { useState } from "react";
import { useSelector, useDispatch, createDispatchHook } from "react-redux";
import Pagination from "../../containers/pagination/Pagination";
import UsersMap from "./usermap";
import { FilterUser } from "./filterUser";
// import {configFilterUser} from ""

export default function Dashboard() {
  const users = useSelector((state) => state.users);
  const allusers = useSelector((state) => state.allUsers);
  

//    dispatch()


  const mapUsers = users.map((user
    
     )=>{
    return({firstName : 
        user.firstName,
        lastName : user.lastName,
        role: user.role,
        provincia: user.provincia,
        ciudad: user.ciudad,
        imageurl:  user.imagePerfil,
        direccion:  user.direccion,
        id: user.id,
        jobs: user.Jobs?user.Jobs.map(job => job.name): [],
        length: users.length,
        rating: user.rating_promedio,
        phone: user.phone
        }
              
    ) 
  })


 

  console.log(mapUsers)

  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5">
        <Header />
        <div className="p-10 bg-gray-100 ">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold">Usuarios</h1>
          </div>
          <FilterUser totalPages={allusers}/>
          {mapUsers.length > 0 ? (
            <UsersMap users={mapUsers} />
          ) : (
            <p className="text-center"> no hay usuarios para mostrar </p>
          )}
        </div>
      </div>
    </div>
  );
}