import React from "react";
import { NavLink } from "react-router-dom";
import { userFormBackground } from "../../../assets";
import capitalizeFirstLetter from "../../../helpers/capitalizeFirstLetter";
import { useAuth0 } from "@auth0/auth0-react";

function ServiceCard({
  tittle,
  id,
  presupuesto,
  description,
  userId,
  imageurl,
  myPostulaciones,
}) {
  const Swal = require("sweetalert2");
  function handleClick() {
    Swal.fire({
      title: "Añadido a Favoritos",
      icon: "success",
      confirmButtonText: "ok",
    });
  }

  tittle = capitalizeFirstLetter(tittle);
  description = capitalizeFirstLetter(description);

  let id_myPostulaciones = myPostulaciones?.map((myPost) => myPost.id);

  /**LOCAL STORAGE */
  const localStorage = window.localStorage.getItem("userStorage");

  const { loginWithRedirect } = useAuth0();
  if (!localStorage) {
    return (
      <div className="bg-gray-100 p-4">
        <div className="overflow-hidden h-[350px]">
          {imageurl === "sin foto" ? (
            <img
              src={userFormBackground}
              className="w-full h-full object-center object-cover"
              alt=""
            />
          ) : (
            <img
              src={imageurl}
              className="w-full h-full object-center object-cover"
              alt=""
            />
          )}
        </div>

        <div className="box-border grid grid-cols-3 bg-white border-solid-gray-300 rounded-sm p-4">
          <div className="col-span-2">
            <h1 className=" w-38 h-7 top-9 font-sans font-semibold text-xl not-italic text-black">
              {tittle}
            </h1>
            <p className="font-sans pt-1 not-italic font-medium text-gray-700">
              Descripción del trabajo:
            </p>
            <p className="text-sm">{description}</p>
            <p className="font-sans pt-1 not-italic font-medium text-gray-700">
              Datos del cliente
            </p>
            <p className="text-sm">Name: {userId.firstName}</p>
          </div>
          <div className="col-span-1 gap-2 flex flex-col justify-center items-end">
            <p className="h-9 top-9 font-sans not-italic font-normal text-2xl text-black">
              ${presupuesto}
            </p>
            <div className="flex justify-end ">
              <button
                disabled={id_myPostulaciones?.includes(id)}
                onClick={() => loginWithRedirect()}
                className={
                  id_myPostulaciones?.includes(id)
                    ? "bg-green-800 text-white font-bold py-2 px-4 border border-green-700 rounded"
                    : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                }
              >
                {id_myPostulaciones?.includes(id) ? (
                  <>Postulado</>
                ) : (
                  <>Postular</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4">
      <NavLink to={`/service/detail/${id}`}>
        <div className="overflow-hidden h-[350px]">
          {imageurl === "sin foto" ? (
            <img
              src={userFormBackground}
              className="w-full h-full object-center object-cover"
              alt=""
            />
          ) : (
            <img
              src={imageurl}
              className="w-full h-full object-center object-cover"
              alt=""
            />
          )}
        </div>

        <div className="box-border grid grid-cols-3 bg-white border-solid-gray-300 rounded-sm p-4">
          <div className="col-span-2">
            <h1 className=" w-38 h-7 top-9 font-sans font-semibold text-xl not-italic text-black">
              {tittle}
            </h1>
            <p className="font-sans pt-1 not-italic font-medium text-gray-700">
              Descripción del trabajo:
            </p>
            <p className="text-sm">{description}</p>
            <p className="font-sans pt-1 not-italic font-medium text-gray-700">
              Datos del cliente
            </p>
            <p className="text-sm">Name: {userId.firstName}</p>
          </div>
          <div className="col-span-1 gap-2 flex flex-col justify-center items-end">
            <p className="h-9 top-9 font-sans not-italic font-normal text-2xl text-black">
              ${presupuesto}
            </p>
            <div className="flex justify-end ">
              <button
                disabled={id_myPostulaciones?.includes(id)}
                className={
                  id_myPostulaciones?.includes(id)
                    ? "bg-green-800 text-white font-bold py-2 px-4 border border-green-700 rounded"
                    : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                }
              >
                {id_myPostulaciones?.includes(id) ? (
                  <>Postulado</>
                ) : (
                  <>Postular</>
                )}
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default ServiceCard;
