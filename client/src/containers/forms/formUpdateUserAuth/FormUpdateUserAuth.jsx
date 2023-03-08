import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jobs from "./formCreateProfessional/Jobs";
import { useNavigate } from "react-router-dom";
import removeItemOnce from "../../../helpers/removeItemOnce";
import Location from "./formCreateProfessional/Location";
import { updateUser } from "../../../redux/actions/userActions";
import Swal from "sweetalert2";
import SideBar from "../../../pages/perfilesUsuarios/ProfileComun/SideBarComun";

function FormUpdateUserAuth() {
  const [input, setInput] = useState({});
  const [inputDay, setInputDay] = useState([]);
  const [inputJob, setInputJob] = useState([]);
  const jobs_ = useSelector((state) => state.jobs);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleJob = (e) => {
    // const name = e.target.name;
    const value = parseInt(e.target.value);
    if (inputJob.find((elem) => elem == value) === undefined) {
      setInputJob(inputJob.concat(value));
    } else {
      removeItemOnce(inputJob, value);
    }
    console.log(inputJob);
  };

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const handleDay = (e) => {
    const value = e.target.value;
    if (inputDay.find((elem) => elem === value) === undefined) {
      setInputDay(inputDay.concat(value));
    } else {
      removeItemOnce(inputDay, value);
    }
    console.log(inputDay);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    input["dias"] = inputDay;
    input["jobs"] = inputJob;
    input["role"] = "professional";
    // input["imageurl"] = inputImage;

    dispatch(updateUser(input));
    Swal.fire({
      title: "Datos guardados",
      confirmButtonColor: "green",
    });
    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen grid grid-gol-1 lg:grid-cols-6">
        <SideBar />
        <div className="col-span-5">
          <div className=" bg-gray-100 ">
            <div className="flex flex-col justify-center items-center h-[112vh]">
              <div className="relative flex flex-col items-center w-[1000px] max-w-[95%] mx-auto bg-gray-200 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="mt-8 mb-8 w-full">
                  <h2 className="px-2 text-xl font-bold text-white dark:text-white h-30 overflow-hidden border-solid-gray-300  p-4 bg-blue-500 ">
                    Profesional
                  </h2>
                </div>
                <div className="min-height-full w-full flex">
                  <Jobs
                    jobs={jobs_}
                    handleJob={handleJob}
                    handleDay={handleDay}
                    changeInput={changeInput}
                  />
                  <Location
                    changeInput={changeInput}
                    handleRegister={handleRegister}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormUpdateUserAuth;
