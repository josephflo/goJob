import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../AdminDashboard/image.svg";
import Swal from "sweetalert2";
import { updateUser } from "../../redux/actions/admin/inactiveuser";

// components

export default function Profile({updateDetail}) {
  const detailUser = useSelector((state) => state.userDetail);

 
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 r">
              <div className="relative flex justify-center items-center">
                <img
                  alt=""
                  src={detailUser.imagePerfil}
                  className="shadow-xl rounded-full h-auto items-center border-none relative -m-20 -ml-25 lg:-ml-30 max-w-200-px "
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  {}
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {detailUser.myTrabajos?.length}
                    {detailUser.myTrabajos?.length}
                  </span>
                  <span className="text-sm text-gray-400">Servicios</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {detailUser.rating_promedio}
                  </span>
                  <span className="text-sm text-gray-400">Rating</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {detailUser.firstName}
            </h3>
            {detailUser.provincia ? (
              <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>{" "}
                {detailUser.provincia}
              </div>
            ) : (
              <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>{" "}
                Sin registro
              </div>
            )}

            <div className="mb-2 text-gray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
              {detailUser.user}
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-university mr-2 text-lg text-gray-400"></i>
              {"ID: " + detailUser.id}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  {detailUser.role}
                </p>
                {detailUser.state === true
                  ? "Usuario Activo"
                  : "Usuario Baneado"}

                {detailUser.state === true ? (
                  <button
                    className="mt-3 bg-red-600 text-white active:bg-red-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    value={false}
                    onClick={updateDetail}
                  >
                    Banear
                  </button>
                ) : (
                  <button
                    className="mt-3 bg-green-600 text-white active:bg-red-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    value={true}
                    onClick={updateDetail}
                  >
                    Activar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
