import React from "react";
import CreateJob from "../../containers/createJob/CreateJob";
import { SideBar } from "./sidebar";
import { Header } from "./header";

export function JobCreate() {
  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />

      <div className="col-span-5">
        <Header />
        <div className=" bg-gray-100 ">
          <CreateJob />
        </div>
      </div>
    </div>
  );
}
