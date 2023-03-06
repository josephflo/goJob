import React from "react";
import { userFormBackground } from "../../assets";

export default function Card({
  id,
  imagenurl,
  tittle,
  presupuesto,
  description,
  postulantes,
  state,
}) {
    // eslint-disable-next-line no-restricted-globals
    function abrirVentana(ruta) {
      const width = 650;
      const height = 650;
      const left = window.screenLeft + (window.outerWidth - width) / 2;
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
    let ruta = "https://checkout.stripe.com/c/pay/cs_test_a17MwMX7qM5FLIYar433xwsZ1scEwb2MkfST1V8mmyy7OuPSYL13QqtbWn#fidkdWxOYHwnPyd1blpxYHZxWjA0SGwzc29MYn1oYWtRdlxyR2lNbkRuTUtMNVVsQ3RRUmZPdjRCcDBtfWI8amJDNU5qMDI1VUdISnRVNE1JXFZcSWNtZ0ZnVHFTczFvZ2dVVHZsUHNVRnNcNTVBMD1mYTBKVicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"

    abrirVentana(ruta)

    // const ancho = 650;
    // const altura = 650;
    // // eslint-disable-next-line no-restricted-globals
    // const izquierda = (screen.width - ancho) / 2;
    // // eslint-disable-next-line no-restricted-globals
    // const arriba = (screen.height - altura) / 2;
    // window.open('/hija/nueva', '_blank', `width=${ancho},height=${altura},left=${izquierda},top=${arriba}`);

  }


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
