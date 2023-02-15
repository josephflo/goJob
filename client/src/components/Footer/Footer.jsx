import React from "react";

function Footer() {
  return (
    <div>
      <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/" class="flex items-center mb-4 sm:mb-0">
            <img
              src="https://flowbite.com/docs/images/logo.svg"//aca deberia ir nuestro logo :
              class="h-8 mr-3"
              alt="aca va nuestro logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Go-Job
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/contact" class="mr-4 hover:underline md:mr-6">
                Contactanos
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Politica de Privacidad
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©Go-Job™. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
export default Footer;
