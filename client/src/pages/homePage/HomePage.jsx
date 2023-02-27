//eslint-disable react-hooks/rules-of-hooks
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import JobPage from "../jobPage/JobPage";
import FormHomePage from "../../containers/forms/formHomePage/FormHomePage";
import Reviews from "../../components/Reviews/Reviews";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser2, getUserAuth0Id } from "../../redux/actions/userActions";
import axios from "axios";

export default function HomePage() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div class="flex items-center justify-center content-center">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }


  const createUser = () => {
    const { given_name, nickname, family_name, email } = user;
    console.log(user);
    axios.post("/user/register", {
      user: {
        firstName: given_name || 'sin nombre',
        lastName:family_name || 'sin apellido',
        email: email,
        user: nickname,
        password: ""
      },
      jobs: [],
    }).then((res)=> console.log(res).catch((error)=>console.log(error)));
  };
  
  if(isAuthenticated){
    createUser()
  }


  return (
    <>
      <div class="inset-0 bg-gray-900 absolute bg-opacity-40 z-10"></div>
      <div class=" h-screen bg-no-repeat bg-center bg-cover  bg-landingBackground">
        <div class="p-1.5 sticky top-0 z-50 bg-white ">
          <NavBarPortada />
        </div>
        <div className=" h-screen flex flex-col justify-center ">
          <h1 className=" text-5xl text-white mx-auto p-5 text-center z-20">
            Trabajadores con experiencia y referencia
          </h1>
          <h2 className=" text-4xl text-white mx-auto p-7 text-center z-20">
            Desarrolla tu oficio cerca de ti
          </h2>
          <FormHomePage />
        </div>
      </div>

      <div>
        <JobPage />
      </div>

      <div>
        <Reviews />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
import React from "react";
import Footer from "../../components/Footer/Footer";
import JobPage from "../jobPage/JobPage";
import FormHomePage from "../../containers/forms/formHomePage/FormHomePage";
import Reviews from "../../components/Reviews/Reviews";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";

export default function HomePage() {
  return (
    <>
      <div class="inset-0 bg-gray-900 absolute bg-opacity-40 z-10"></div>
      <div class=" h-screen bg-no-repeat bg-center bg-cover  bg-landingBackground">
        <div class="p-1.5 sticky top-0 z-50 bg-white ">
          <NavBarPortada />
        </div>
        <div className=" h-screen flex flex-col justify-center ">
          <h1 className=" text-5xl text-white mx-auto p-5 text-center z-20">
            Trabajadores con experiencia y referencia
          </h1>
          <h2 className=" text-4xl text-white mx-auto p-7 text-center z-20">
            Desarrolla tu oficio cerca de ti
          </h2>
          <FormHomePage />
        </div>
      </div>

      <div>
        <JobPage />
      </div>

      <div>
        <Reviews />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
