import React, { useState } from "react";
import FormCreateProfessional from "./FormCreateProfessional";

const ProfessionalProfile = ({setIsProfesional}) => {
  const [input, setInput] = useState({});

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setIsProfesional(false)
  };

  return (
    <FormCreateProfessional
      changeInput={changeInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default ProfessionalProfile;
