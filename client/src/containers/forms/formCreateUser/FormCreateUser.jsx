import React, { useState } from "react";
import NavBarPortada from "../../../components/navBar/navBarPortada/NavBarPortada";
import Form from "./components/Form";
import { userFormBackground } from "../../../assets";
import FormCreateProfessional from "./formCreateProfessional/FormCreateProfessional";
import FormCreateComun from "./formCreateComun/FormCreateComun";
import Jobs from "./formCreateComun/Jobs";
import { useSelector } from "react-redux";
import removeItemOnce from "../../../helpers/removeItemOnce";

export default function FormCreateUser() {
  const [input, setInput] = useState({});
  const [inputForm, setInputForm] = useState({
    state: false,
    role: "",
  });

  const [inputJob, setInputJob] = useState([]);

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

  return (
    <>
      <div class="p-1.5 sticky top-0 z-50 bg-white ">
        <NavBarPortada />
      </div>

      <div class="min-height-full flex">
        {!inputForm.state ? (
          <div class="hidden lg:block relative h-full flex-1">
            <img src={userFormBackground} class="h-screen " alt="" />
          </div>
        ) : (
          <>
            {inputForm.role === "professional" ? (
              <>
                <Jobs jobs={jobs_} handleJob={handleJob} />
              </>
            ) : (
              <></>
            )}
          </>
        )}
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none">
          <div class="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]">
            <div class="text-center lg-text-left">
              {!inputForm.state ? (
                <Form
                  changeInput={changeInput}
                  handleOpenFormByRol={handleOpenFormByRol}
                />
              ) : (
                <>
                  {inputForm.role === "professional" ? (
                    <FormCreateProfessional
                      handleCloseFormByRol={handleCloseFormByRol}
                    />
                  ) : (
                    <FormCreateComun />
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
