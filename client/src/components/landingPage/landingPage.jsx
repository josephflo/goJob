import React from "react";
import { lupa } from "../../assets";
import Footer from "../Footer/Footer";
import Navbar from "../navbarPortada/NavBar";
import Reviews from "../Reviews/Reviews";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div class="inset-0 bg-gray-900 absolute bg-opacity-40 z-10"></div>
      <div class=" h-screen bg-no-repeat bg-center bg-cover  bg-landingBackground">
        <div class="p-1.5 sticky top-0 z-50 bg-white ">
          <Navbar />
        </div>
        <div className=" h-screen flex flex-col justify-center ">
          <h1 className=" text-5xl text-white mx-auto p-5 text-center z-20">
            Trabajadores con experiencia y referencia
          </h1>
          <h2 className=" text-4xl text-white mx-auto p-7 text-center z-20">
            Desarrolla tu oficio cerca de ti
          </h2>
          <form className="flex flex-justify-center mx-auto p-7 z-20">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={lupa} class="w-6" />
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-72 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <Link to="/service">
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ver Perfiles
                </button>
              </Link>
            </div>
          </form>
        </div>
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
