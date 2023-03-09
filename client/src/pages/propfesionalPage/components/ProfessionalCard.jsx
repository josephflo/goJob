import { NavLink } from "react-router-dom";
import { imageUrlNotFound } from "../../../assets";
import { useAuth0 } from "@auth0/auth0-react";

function ProfessionalCard({
  id,
  firstName,
  lastName,
  imageurl,
  jobs,
  imagePerfil,
  contrat,
  description,
}) {
  const { loginWithRedirect } = useAuth0();
  const localStorage = window.localStorage.getItem("userStorage");

  if (!localStorage) {
    return (
      <div className="bg-gray-100 p-6 m-1">
        <div>
          {imagePerfil === "sin foto" ? (
            <img
              src={imageUrlNotFound}
              className="object-cover rounded-full text-xs w-[40px] h-[40px] md:text-sm lg:w-[80px] lg:h-[80px]"
              alt=""
            />
          ) : (
            <img
              src={imagePerfil}
              alt=""
              className="object-cover rounded-full text-xs w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]"
            />
          )}
        </div>
        <div className="box-borderbg-white pt-2 border-solid-gray-300 rounded-sm">
          <p className="font-sans pt-1 not-italic font-medium text-gray-700 hidden sm:block">
            Datos del profesional
          </p>
          <p className=" text-xs md:text-sm lg:text-base">
            {firstName} {lastName}
          </p>
          {jobs.map((job) => (
            <p className=" text-xs md:text-sm lg:text-sm"> {job.name}</p>
          ))}

          <div class="flex justify-center mt-4">
            <button
              onClick={() => loginWithRedirect()}
              class="bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded btn-sm"
            >
              <i class="fa-regular fa-envelope"></i> Contactar
            </button>
          </div>
          {/*
              <p className="font-sans pt-1 not-italic font-medium text-gray-700">
                Descripción
              </p>
              {!description ? (
                <h1 className="text-sm">No hay descripción</h1>
              ) : (
                <h1 className="text-sm">{description}</h1>
              )} */}
          {/* </div> */}
          {/* <div className="col-span-1 gap-2 flex flex-col justify-center items-end">
              <p>Perfil</p>
            </div> */}
          {/* </button> */}
        </div>
      </div>
    );
  }

  return (
    <NavLink to={`/professional/detail/${id}`}>
      <div className="bg-gray-100 p-6 m-1">
        <div>
          {imagePerfil === "sin foto" ? (
            <img
              src={imageUrlNotFound}
              className="object-cover rounded-full text-xs w-[40px] h-[40px] md:text-sm lg:w-[80px] lg:h-[80px]"
              alt=""
            />
          ) : (
            <img
              src={imagePerfil}
              alt=""
              className="object-cover rounded-full text-xs w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]"
            />
          )}
        </div>
        <div className="box-borderbg-white pt-2 border-solid-gray-300 rounded-sm">
          <p className="font-sans pt-1 not-italic font-medium text-gray-700 hidden sm:block">
            Datos del profesional
          </p>
          <p className=" text-xs md:text-sm lg:text-base">
            {firstName} {lastName}
          </p>
          {jobs.map((job) => (
            <p className=" text-xs md:text-sm lg:text-sm"> {job.name}</p>
          ))}

          <div class="flex justify-center mt-4">
            <button class="bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded btn-sm">
              <i class="fa-regular fa-envelope"></i> Contactar
            </button>
          </div>
          {/*
              <p className="font-sans pt-1 not-italic font-medium text-gray-700">
                Descripción
              </p>
              {!description ? (
                <h1 className="text-sm">No hay descripción</h1>
              ) : (
                <h1 className="text-sm">{description}</h1>
              )} */}
          {/* </div> */}
          {/* <div className="col-span-1 gap-2 flex flex-col justify-center items-end">
              <p>Perfil</p>
            </div> */}
          {/* </button> */}
        </div>
      </div>
    </NavLink>
  );
}

export default ProfessionalCard;
