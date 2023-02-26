import React from "react";
import Footer from "../../components/footer/Footer";
import JobPage from "../jobPage/JobPage";
import FormHomePage from "../../containers/forms/formHomePage/FormHomePage";
import Reviews from "../../components/reviews/Reviews";
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
