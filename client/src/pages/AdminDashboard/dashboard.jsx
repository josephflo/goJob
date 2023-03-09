import React from "react";
import { Header } from "./header";
import { SideBar } from "./sidebar";
import { useSelector } from "react-redux";
import UsersMap from "./usermap";
import { FilterUser } from "./filterUser";
// import {configFilterUser} from ""


export default function Dashboard() {
    

    const usersProfesionales = useSelector((state) => state.usersProfesionales);
    
    


  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5">
        <Header />
        <div className="p-10 bg-gray-100 ">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold">Usuarios</h1>
          </div>
          <FilterUser totalPages={usersProfesionales.result}/>
          {usersProfesionales.result ? (
            <UsersMap users={usersProfesionales.result} />
          ) : (
            <p className="text-center"> no hay usuarios para mostrar </p>
          )}
        </div>
      </div>
    </div>
  );
}