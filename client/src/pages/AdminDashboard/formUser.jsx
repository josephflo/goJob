import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../../redux/actions/admin/inactiveuser";
// components

export default function FormUser({ detailUser }) {
  const [userDetail, setUserDetail] = useState({});
  const dispatch = useDispatch()

  const formUpdate = (event) => {
    let propiedad = event.target.name;
    let value = event.target.value;

    let formConstruct = {
      ...userDetail,
      [propiedad]: value,
    };

    setUserDetail(formConstruct);
  };


const modifyUser = () => { 
  dispatch(
    updateUser({ 
      ...detailUser,
      ...userDetail
    })
  );

}

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-700 text-xl font-bold">
              Detalles del Usuario
            </h6>

            <button
              className="bg-blue-600 text-white active:bg-blue-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={modifyUser}
            >
              Modificar
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Informacion del Usuario
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="user"
                    placeholder={detailUser.user}
                    value={userDetail.user}
                    onChange={formUpdate}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder={detailUser.email}
                    value={userDetail.email}
                    onChange={formUpdate}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder={detailUser.firstName}
                    value={userDetail.firstName}
                    name="firstName"
                    onChange={formUpdate}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder={detailUser.lastName}
                    value={userDetail.lastName}
                    name="lastName"
                    onChange={formUpdate}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Direccion
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Calle
                  </label>
                  {detailUser.direccion ? (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder={detailUser.direccion}
                      value={userDetail.direccion}
                      name="direccion"
                      onChange={formUpdate}
                    />
                  ) : (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="N/E"
                      value={userDetail.direccion}
                      name="direccion"
                      onChange={formUpdate}
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Ciudad
                  </label>
                  {detailUser.ciudad ? (
                    <input
                    type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder={detailUser.ciudad}
                      value={userDetail.ciudad}
                      name="ciudad"
                      onChange={formUpdate}
                    />
                  ) : (
                    <input
                    type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="N/E"
                      value={userDetail.ciudad}
                      name="ciudad"
                      onChange={formUpdate}
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Provincia
                  </label>
                  {detailUser.provincia ? (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder={detailUser.provincia}
                      value={userDetail.provincia}
                      name="provincia"
                      onChange={formUpdate}
                    />
                  ) : (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="N/E"
                      value={userDetail.provincia}
                      name="provincia"
                      onChange={formUpdate}
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Telefono
                  </label>
                  {detailUser.phone ? (
                    <input
                      type="tel"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder={detailUser.phone}
                      value={userDetail.phone}
                      name="phone"
                      onChange={formUpdate}
                    />
                  ) : (
                    <input
                      type="tel"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="N/E"
                      value={userDetail.phone}
                      name="phone"
                      onChange={formUpdate}
                    />
                  )}
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
            {detailUser.Jobs?.length ? (
              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                JOBS
                {detailUser.Jobs?.map((job, index) => (
                  <span
                    key={index}
                    className="text-xs py-1 px-2 bg-blue-200 font-bold text-blue-600 ml-2"
                  >
                    {job.name}
                  </span>
                ))}
              </h6>
            ) : (
              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                SIN JOBS
              </h6>
            )}

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Descripcion
                  </label>
                  {detailUser.description ? (
                    <textarea
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      rows="4"
                      placeholder={detailUser.description}
                      value={userDetail.description}
                      name="description"
                      onChange={formUpdate}
                    ></textarea>
                  ) : (
                    <textarea
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      rows="4"
                      placeholder="N/E"
                      value={userDetail.description}
                      name="description"
                      onChange={formUpdate}
                    ></textarea>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
