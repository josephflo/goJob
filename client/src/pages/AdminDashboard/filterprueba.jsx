import React from "react";


import { Header } from "./header";
import { SideBar } from "./sidebar";
import { Carduser } from "./carduser";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../containers/pagination/Pagination";
import UsersMap from "./usermap";
import { FilterUser } from "./filterUser";
// import {configFilterUser} from ""

export default function Prueba() {
  const users = useSelector((state) => state.users);

  const mapUsers = users.map((user
    
     )=>{
    return({firstName : 
        user.firstName,
             user : user.lastName,
             role: user.role,
             provincia: user.provincia,
             ciudad: user.ciudad,
             imageurl:  user.imageurl,
             direccion:  user.direccion,
             id: user.id,
             jobs: user.Jobs?user.Jobs.map(job => job.name): []
              }
              
    
    ) 
  })


 

  console.log(mapUsers)

  return (
    <div>
    <UsersMap users={mapUsers}/>    
    </div>
  );
}
