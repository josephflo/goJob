import React from "react";
import { SideBar } from "./sidebar";
import { Header } from "./header";
import JobAdmin from "../../components/DashboardPrueba/JobAdmin";
import CreateJob from "../../containers/createJob/CreateJob";

export function JobList() {
  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />

      <div className="col-span-5">
        <Header />
        <div className="p-1 bg-gray-100 lg:flex lg:p-10 ">
          <CreateJob />
        </div>
      </div>
    </div>
  );
}
