import React, { useEffect, useState } from "react";
import SideBar from "./ProfielProfesional/SideBar";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import SinServicios from "./ProfielProfesional/Ups/SinServicios";
import {
  getMyServices,
  stateSelected,
  stateSelectedComun,
} from "../../redux/actions/professionalActions";
import { acceptUser } from "../../redux/actions/offers/acceptUser";
import { userFormBackground } from "../../assets";

import { getSessionUrl } from "../../redux/actions/services/stripePago";
import FilterOffers from "./ProfielProfesional/Filter/FilterOffers";
import SideBarComun from "./ProfileComun/SideBarComun";

export default function OffersPageP() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.myservices);
  let configFilterPerfilOffer = useSelector(
    (state) => state.configFilterPerfilOffer
  );

  useEffect(() => {
    dispatch(getMyServices(configFilterPerfilOffer));
    dispatch(stateSelected(2));
    dispatch(stateSelectedComun(2));
  }, [configFilterPerfilOffer]);

  // useEffect(() => {
  //   dispatch(getMyServices(configFilterPerfilOffer));
  // }, []);

  // MODAL
  const [modal, setModal] = useState(false);
  const [modalPostulantes, setModalPostulantes] = useState({});
  const [modalIdService, setModalIdService] = useState("");
  const [modalService, setModalService] = useState({});
  const handleModalOffer = (postulantes, id, e) => {
    setModal(true);
    setModalPostulantes(postulantes);
    setModalIdService(id);
    setModalService(e);
  };

  const handleAccept = (id_postulante) => {
    dispatch(acceptUser(id_postulante, modalIdService));
    alert("Aceptaste el trabajador")

    dispatch(getMyServices(configFilterPerfilOffer));
    dispatch(stateSelected(2));
    dispatch(stateSelectedComun(2));
  };

  const fecha = new Date(modalService.fecha_publicacion);
  const opciones = { day: "numeric", month: "numeric", year: "numeric" };
  const fechaFormateada = fecha.toLocaleDateString("es-ES", opciones);

  /************************************** */

  let [newSession, setNewSession] = useState({});

  // eslint-disable-next-line no-restricted-globals
  function abrirVentana(ruta) {
    const width = 650;
    const height = 650;
    // eslint-disable-next-line no-restricted-globals
    const left = window.screenLeft + (window.outerWidth - width) / 2;
    // eslint-disable-next-line no-restricted-globals
    const top = window.screenTop + (window.outerHeight - height) / 2;

    // Verificar si ya hay una ventana hija abierta
    if (!window.childWindow || window.childWindow.closed) {
      window.childWindow = window.open(
        ruta,
        "_blank",
        `width=${width},height=${height},left=${left},top=${top}`
      );
    } else {
      // Si ya hay una ventana hija abierta, enfocarla y cambiar su ubicación
      window.childWindow.focus();
      window.childWindow.moveTo(left, top);
    }
  }

  let generateSessionPagar = () => {
    let prueba5 = getSessionUrl(modalService.id)
      .then((res) => {
        setNewSession(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    if (newSession.stripeSesionURL) {
      abrirVentana(newSession.stripeSesionURL);
    }
  }, [newSession]);

  // NAVBAR
  const role = useSelector((state) => state.userLogin.role);

  return (
    <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
      {role === "professional" ? <SideBar /> : <SideBarComun />}
      <div className="col-span-5 bg-gray-100 h-full ">
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
        <div className=" p-3">
          <div className="">
            <h1 className="text-lg text-left font-semibold md:text-xl lg:text-3xl">
              Tus Ofertas
            </h1>
          </div>
          <div className="flex justify-around   items-center">
            <FilterOffers />
          </div>

          <div className="grid grid-cols-7 ">
            <div className="col-span-2 my-10 mx-7 description_barra h-screen">
              <div className="">
                <div className=" pt-4 grid grid-cols-1 ">
                  {services?.length > 0 ? (
                    services?.map((e, ind) => (
                      <div
                        className={
                          modalIdService === e.id
                            ? "gap-4 bg-gray-600 p-1 m-2 mt-1 mb-1 rounded"
                            : "gap-4 bg-gray-300 p-1 m-2 mt-1 mb-1 rounded"
                        }
                      >
                        <Card
                          key={e.id}
                          id={e.ind}
                          tittle={e.tittle}
                          imagenurl={e.imagenurl}
                          direccion={e.direccion}
                          presupuesto={e.presupuesto}
                          description={e.description}
                          postulantes={e.postulantes}
                          state={e.state}
                          imageServiceUrl={e.imageServiceUrl}
                          handleModalOffer={() =>
                            handleModalOffer(e.postulantes, e.id, e)
                          }
                        />
                      </div>
                    ))
                  ) : (
                    <SinServicios />
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-5 p-10 ">
              {modal ? (
                <>
                  <div className="">
                    <h1 className="text-lg text-left font-semibold md:text-xl lg:text-2xl">
                      Descripción
                    </h1>
                  </div>
                  <div className="mt-5">
                    <div className="text-left grid grid-cols-2">
                      <div className="h-100 overflow-hidden">
                        {modalService.imageServiceUrl === "sin foto" ? (
                          <img
                            src={userFormBackground}
                            className="object-fill fra_border  object-left"
                            alt=""
                          />
                        ) : (
                          <img
                            src={modalService.imageServiceUrl}
                            alt=""
                            className="object-fill fra_border w-full "
                          />
                        )}
                      </div>
                      <div className="pb-5 pl-5 pt-0 mt-0">
                        <div>
                          <h2 className="font-sans not-italic font-medium text-gray-700">
                            Título:
                          </h2>
                          <p className="text-sm">{modalService.tittle}</p>
                          <h2 className="font-sans pt-1 not-italic font-medium text-gray-700">
                            Descripción del trabajo:
                          </h2>
                          <p className="text-sm">{modalService.description}</p>
                          <h2 className="font-sans pt-1 not-italic font-medium  text-gray-700">
                            Estado del Servicio:
                          </h2>
                          <p className="text-sm">{modalService.state}</p>
                        </div>
                        <div>
                          <h2 className="font-sans pt-1 not-italic font-medium  text-gray-700">
                            Presupuesto:
                          </h2>
                          <p className="text-sm">
                            $ {modalService.presupuesto}
                          </p>
                          <h2 className="font-sans pt-1 not-italic font-medium text-gray-700">
                            Fecha de Publicación:
                          </h2>
                          <p className="text-sm">{fechaFormateada}</p>
                          <h2 className="font-sans pt-1 not-italic font-medium text-gray-700">
                            Lugar:
                          </h2>
                          <p className="text-sm">
                            {modalService.ciudad}, {modalService.provincia}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {modalService.state === "pendiente" ? (
                    <div>
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
                                  Profesión
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
                                        {postulante.firstName}{" "}
                                        {postulante.lastName}
                                      </p>
                                      <p className="font-bold">
                                        {postulante.email}
                                      </p>
                                    </div>
                                  </th>
                                  <th className="text-center">
                                    {postulante?.Jobs.map((job) => job.name)}
                                  </th>
                                  <th className="text-center">
                                    {postulante.rating_promedio}
                                  </th>
                                  <th className="text-center">
                                    <button className="hov_acceptar"
                                      onClick={() =>
                                        handleAccept(postulante.id)
                                      }
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
                    </div>
                  ) : modalService.state === "proceso" ? (
                    <div className="text-center ">
                      <div className="mt-10 mb-15 pb-10 w-full text-center	">
                        <h1 className="text-lg text-center font-semibold md:text-xl lg:text-2xl">
                          Para pagar
                        </h1>
                      </div>

                      <button bg-
                        onClick={generateSessionPagar}
                        class="bg-green-800 hover:bg-green-700 mt-15 text-white font-bold py-2 px-4 rounded text-xl"
                      >
                        Pagar
                      </button>

                    </div>
                  ) : (
                    <div>
                      <div className="">
                        <h1 className="text-lg text-left font-semibold md:text-xl lg:text-2xl">
                          Proceso Culminado
                        </h1>
                      </div>
                    </div>
                  )}
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
                        Dale click a uno
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
    </div>
  );
}
