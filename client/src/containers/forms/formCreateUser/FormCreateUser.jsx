import React, { useState } from "react";
import NavBarPortada from "../../../components/navBar/navBarPortada/NavBarPortada";
import Form from "./components/Form";
import { userFormBackground } from "../../../assets";
import FormCreateProfessional from "./formCreateProfessional/FormCreateProfessional";

import Jobs from "./formCreateProfessional/Jobs";
import { useDispatch, useSelector } from "react-redux";
import removeItemOnce from "../../../helpers/removeItemOnce";
import { createUser, uploadImage } from "../../../redux/actions/userActions";

export default function FormCreateUser() {
  const [input, setInput] = useState({});
  const [inputDay, setInputDay] = useState([]);
  const [inputImage, setInputImage] = useState({});

  const [inputForm, setInputForm] = useState({
    state: false,
    role: "",
  });

  const [inputJob, setInputJob] = useState([]);

  const dispatch = useDispatch();

  const jobs_ = useSelector((state) => state.jobs);

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

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

  const changeInputImage = (e) => {
    const value = e.target.files;
    console.log(value[0]);
    setInputImage(value[0]);
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
  const handleOpenFormByRol = () => {
    setInputForm({
      state: true,
      role: input.role,
    });
  };

  const handleCloseFormByRol = () => {
    setInputForm({
      state: false,
      role: input.role,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    input["dias"] = inputDay;
    // input["imageurl"] = inputImage;
    console.log(typeof inputImage);
    console.log(inputImage);
    dispatch(
      createUser({
        user: input,
        jobs: inputJob,
        image: inputImage,
      })
    );
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white ">
        <NavBarPortada />
      </div>

      <div className="min-height-full flex">
        {!inputForm.state ? (
          <div className="hidden lg:block relative h-full flex-1">
            <img src={userFormBackground} className="h-screen " alt="" />
          </div>
        ) : (
          <>
            {inputForm.role === "professional" ? (
              <>
                <Jobs
                  jobs={jobs_}
                  handleJob={handleJob}
                  handleDay={handleDay}
                  changeInput={changeInput}
                />
              </>
            ) : (
              <></>
            )}
          </>
        )}
        <div className="flex-1 flex flex-col justify-center  px-4 sm:px-6 lg:flex-none">
          <div className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
            <div className="text-center lg-text-left">
              {!inputForm.state ? (
                <Form
                  changeInput={changeInput}
                  handleOpenFormByRol={handleOpenFormByRol}
                  handleRegister={handleRegister}
                  changeInputImage={changeInputImage}
                />
              ) : (
                <>
                  {inputForm.role === "professional" ? (
                    <FormCreateProfessional
                      handleCloseFormByRol={handleCloseFormByRol}
                      changeInput={changeInput}
                      handleRegister={handleRegister}
                    />
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
