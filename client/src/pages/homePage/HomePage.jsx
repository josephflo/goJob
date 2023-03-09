import React from "react";
import Footer from "../../components/Footer/Footer";
import JobPage from "../jobPage/JobPage";
import FormHomePage from "../../containers/forms/formHomePage/FormHomePage";
import Reviews from "../../components/Reviews/Reviews";
import NavBarPortada from "../../components/navBar/navBarPortada/NavBarPortada";

export default function HomePage() {
  //const { isAuthenticated, user, isLoading } = useAuth0();

  return (
    <>
      <div className="inset-0 bg-gray-900 absolute bg-opacity-40 z-10"></div>
      <div className=" h-screen bg-no-repeat bg-center bg-cover  bg-landingBackground">
        <div className="sticky top-0 z-50 bg-white ">
          <NavBarPortada/>
        </div>
        <div className=" h-screen flex flex-col justify-center ">
          <h1 className="text-white mx-auto p-5 text-center z-20 text-3xl md:text-4xl lg:text-5xl">
            Trabajadores con experiencia y referencia
          </h1>
          <h2 className="text-white mx-auto p-7 text-center z-20 text-xl md:text-3xl lg:text-4xl">
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
