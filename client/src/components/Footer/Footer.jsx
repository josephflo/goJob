import React from "react";

function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://flowbite.com/docs/images/logo.svg"//aca deberia ir nuestro logo
              className="h-8 mr-3"
              alt="aca va nuestro logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Go-Job
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/contact" className="mr-4 hover:underline md:mr-6">
                Contactanos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Politica de Privacidad
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©Go-Job™. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
export default Footer;
