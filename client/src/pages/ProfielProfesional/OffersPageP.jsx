import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Cards/Card";
import SinServicios from "./Ups/SinServicios";
import {
  getMyServices,
  stateSelected,
} from "../../redux/actions/professionalActions";
import { acceptUser } from "../../redux/actions/offers/acceptUser";

export default function OffersPageP() {
  const dispatch = useDispatch();

  const services = useSelector((state) => state.myservices);

  useEffect(() => {
    dispatch(getMyServices());
    dispatch(stateSelected(1));
  }, []);

  // MODAL
  const [modal, setModal] = useState(false);
  const [modalPostulantes, setModalPostulantes] = useState({});
  const [modalIdService, setModalIdService] = useState("");
  const handleModalOffer = (postulantes, id) => {
    setModal(true);
    setModalPostulantes(postulantes);
    setModalIdService(id);
  };

  const handleAccept = (id_postulante) => {
    dispatch(acceptUser(id_postulante, modalIdService));
  };

  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      <SideBar />
      <div className="col-span-5">
        {/* <div className="grid grid-cols-5 gap-4 items-center mb-4">
            <div>
            <label className=" text-black ">Estado</label>
            </div>
            <form className="col-span-1">
            <div className="relative">
            <RiUserLocationLine className="absolute left-2 top-3 text-blue-600" />
            <select className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none">
            <option>Pendiente</option>
            </select>
            </div>
            </form>
            <div>
            <label className=" text-black ">Orden</label>
            </div>
            <form className="col-span-1">
            <div className="relative">
            <RiFilter3Line className="absolute left-2 top-3 text-blue-600" />
            <select className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none">
            <option>Mas antiguo</option>
            <option>Mas reciente</option>
            </select>
            </div>
            </form>
            <div className="col-span-1">
            <button className="flex items-center gap-4 hover:bg-blue-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors">
            Borrar filtros
            </button>
            </div>
          </div> */}
        <div className="grid grid-cols-5  bg-gray-100 h-screen">
          <div className="col-span-2 p-10">
            <div className="">
              <h1 className="text-lg text-left font-semibold md:text-xl lg:text-2xl">
                Tus Ofertas
              </h1>
            </div>
            <div className=" pt-4 grid grid-cols-1 ">
              {services?.length > 0 ? (
                services?.map((e) => (
                  <div
                    className={
                      modalIdService === e.id
                        ? "gap-4 bg-blue-500 p-1 mt-1 mb-1"
                        : "gap-4 bg-blue-100 p-1 mt-1 mb-1"
                    }
                  >
                    <Card
                      key={e.id}
                      id={e.id}
                      tittle={e.tittle}
                      imagenurl={e.imagenurl}
                      direccion={e.direccion}
                      presupuesto={e.presupuesto}
                      description={e.description}
                      postulantes={e.postulantes}
                      state={e.state}
                      handleModalOffer={() =>
                        handleModalOffer(e.postulantes, e.id)
                      }
                    />
                  </div>
                ))
              ) : (
                <SinServicios />
              )}
            </div>
          </div>
          <div className="col-span-3 p-10">
            {modal ? (
              <>
                <div className="">
                  <h1 className="text-lg text-left font-semibold md:text-xl lg:text-2xl">
                    Postulantes
                  </h1>
                </div>
                <div className="flex justify-start">
                  {modalPostulantes.length !== 0 ? (
                    <table
                      id="users"
                      class="mt-4 w-full text-sm text-left text-gray-500 dark:text-gray-400"
                    >
                      <thead class="text-xs lg:text-sm text-center text-white bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="">
                          <th data-priority="" className="">
                            Name
                          </th>
                          <th data-priority="" className="">
                            Rating
                          </th>
                          <th data-priority="" className="">
                            Acción
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {modalPostulantes.map((postulante) => (
                          <tr className="h-5">
                            <th className="flex items-center">
                              <img
                                src={postulante.imagePerfil}
                                alt=""
                                className="scale-75"
                              />
                              <div className="text-left">
                                <p className="font-bold">
                                  {postulante.firstName} {postulante.lastName}
                                </p>
                                <p className="font-bold">{postulante.email}</p>
                              </div>
                            </th>
                            <th className="text-center">
                              {postulante.rating_promedio}
                            </th>
                            <th className="text-center">
                              <button
                                onClick={() => handleAccept(postulante.id)}
                              >
                                ACEPTAR
                              </button>
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="bg-gray-100 w-full flex mt-10 items-center justify-center">
                      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                        <p className="text-2xl md:text-1xl lg:text-3xl font-bold tracking-wider text-gray-500 mt-4">
                          Aún no tienes postulantes
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="">
                  <h1 className="text-lg text-left font-semibold md:text-xl lg:text-2xl">
                    Postulantes
                  </h1>
                </div>
                <div className="bg-gray-100 w-full mt-10 px-16 md:px-0 flex items-center justify-center">
                  <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                    <p className="text-2xl md:text-1xl lg:text-3xl font-bold tracking-wider text-gray-500 mt-4">
                      Dale click en uno
                    </p>
                    <div className="grid grid-cols-1"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
