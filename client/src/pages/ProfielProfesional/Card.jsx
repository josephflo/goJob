import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userFormBackground } from "../../assets";
import { getSessionUrl } from "../../redux/actions/services/stripePago";

export default function Card({
  id,
  imagenurl,
  tittle,
  presupuesto,
  description,
  postulantes,
  state,
}) {
  let [newSession, setNewSession] = useState({})
  let dispatch = useDispatch()

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
        window.childWindow = window.open(ruta, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
      } else {
        // Si ya hay una ventana hija abierta, enfocarla y cambiar su ubicación
        window.childWindow.focus();
        window.childWindow.moveTo(left, top);
      }
    }

  let generateSessionPagar = ()=>{
    let prueba5 = getSessionUrl(id)
    .then((res)=>{
      setNewSession(res)
      alert("Todo salio bien")
    }).catch(error=>{
      alert(error.message)}
    )
  }

  useEffect(()=>{
    if(newSession.stripeSesionURL){
      abrirVentana(newSession.stripeSesionURL)
    }
  }, [newSession])


  return (
    <div key={id} className="bg-gray-100 p-4">

      {/* Pruaba pagar */}
      
      <div onClick={generateSessionPagar} className="h-100 overflow-hidden">
        <img src={userFormBackground} className="object-fill" alt="" />
      </div>

      <div className="h-100 overflow-hidden bg-blue-500 border-solid-gray-300 rounded-sm p-4">
        <h1 className=" w-38 h-7 top-9 font-sans font-semibold text-xl not-italic text-white">
          {tittle}
        </h1>
      </div>

      <div className="box-border grid grid-cols-3 bg-white border-solid-gray-300 rounded-sm p-4">

      <div className="col-span-1 w-60">

          <h2 className="font-sans pt-1 not-italic font-medium text-gray-700">
            Descripción del trabajo:
          </h2>
          <p className="text-sm">{description}</p>
          <h2 className="font-sans pt-1 not-italic font-medium  text-gray-700">
            Estado del Servicio:
          </h2>
          <p className="text-sm">{state}</p>
        

        
          <h2 className="font-sans pt-1 not-italic font-medium  text-gray-700">
            Postulantes:
          </h2>
          <p className="text-sm">{postulantes}</p>

          <h2 className="font-sans pt-1 not-italic font-medium  text-gray-700">
            Presupuesto:
          </h2>
          <p className="text-sm">${presupuesto}</p>
        </div>
      </div>
    </div>
  );
}
