import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jobs from "./formCreateProfessional/Jobs";

import removeItemOnce from "../../../helpers/removeItemOnce";
import Location from "./formCreateProfessional/Location";
import { updateUser } from "../../../redux/actions/userActions";

function FormUpdateUserAuth() {
  const [input, setInput] = useState({});
  const [inputDay, setInputDay] = useState([]);
  const [inputJob, setInputJob] = useState([]);
  const jobs_ = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

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
    // input["imageurl"] = inputImage;
    console.log(input);
    dispatch(updateUser(input));
  };

  return (
    <>
      <div className="text-center lg:text-left">
        <h2 className=" text-4xl font-extrabold text-blue-900">Profesional</h2>
      </div>
      <div class="min-height-full flex">
        <Jobs
          jobs={jobs_}
          handleJob={handleJob}
          handleDay={handleDay}
          changeInput={changeInput}
        />
        <Location changeInput={changeInput} handleRegister={handleRegister} />
      </div>
    </>
  );
}

export default FormUpdateUserAuth;
