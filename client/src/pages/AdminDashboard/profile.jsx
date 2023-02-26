import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/userActions";
import logo from "../AdminDashboard/image.svg"
import Swal from "sweetalert2";
// components

export default function Profile() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  function enableUser(e) {
    const users = {
      id: e.id,
     rating:e.rating,
      firstName: e.firstName,
      lastName: e.lastName,
direccion: e.direccion,
      role: e.role,
      active: false,
    };
    dispatch(updateUser(users));
    Swal.fire({
      title: "Usuario habilitado",
    }).then(() => {
      window.location.reload();
    });
  }

  function disableUser(e) {
    Swal.fire({
      title: '¿Estas seguro de Deshabilitar este Usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desactivalo!'
  }).then((result) => {
    const users = {
      id: e.id,
     rating:e.rating,
      firstName: e.firstName,
      lastName: e.lastName,
direccion: e.direccion,
      role: e.role,
      active: true,
    };
    if (result.value) {
    dispatch(updateUser(users));
    Swal.fire(
      'Deshabilitado!',
      'El Usuario fue deshabilitado.',
      'success'
    )
    }
  })
  }
  return (
    <>
     {users?.map((e) => (
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
       
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                
                <img
                  alt=""
                  src="https://laguiainmobiliaria.com/wp-content/uploads/2016/10/perfil-circulo-300x199.png"
                 className="shadow-xl rounded-full h-auto items-center border-none relative -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-gray-400">Servicios</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    4.5
                  </span>
                  <span className="text-sm text-gray-400">{e.rating}</span>
                </div>
               
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {e.firstName} {e.lastName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>{" "}
              {e.direccion}
            </div>
            <div className="mb-2 text-gray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
              {e.job}
            </div>
            <div className="mb-2 text-gray-600">
              <i className="fas fa-university mr-2 text-lg text-gray-400"></i>
              {e.id}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                 {e.descripcion}
                  </p>
                {e.active === true ? (
              <button
              className="mt-3 bg-red-600 text-white active:bg-red-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => enableUser(e)} 
              >
                Habilitar
              </button>
            ) : (
              <button 
              onClick={() => disableUser(e)} 
              type="button">
                Deshabilitar
              </button>
            )}

                </div>
            </div>
            
          </div>
       
        </div>
      </div>
          ))}
    </>
  );
}
