import React from "react";
import GoJobLogo from "../../assets/GoJobLogo.png";
import { BsWhatsapp, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between grid-cols-3">
          <div className="col-span-1">
          <a  className="flex  mb-4 sm:mb-0">
            <img
              src={GoJobLogo}
              className="h-12 mt-3"
              alt="Go-Job"
            />
          </a>
          </div>
          <div className='flex col-span-1 gap-6'>
								<BsTwitter />
								<BsFacebook />
								<a
									href="https://www.instagram.com/go-job/"
									target="_blank"
									rel=""
								>
									<BsInstagram />
								</a>
							</div>
              <div className="col-span-1">
          <ul className="flex flex-wrap mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            {/* <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Nosotros
              </a>
            </li> */}
            <li>
              <a href="/contact" className="mr-4 hover:underline md:mr-6">
                Contáctanos
              </a>
            </li>
            
          </ul>
          </div>
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
