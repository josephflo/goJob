import React, { useEffect } from 'react'

export default function FailPago(){


  useEffect(()=>{
    const timer = setTimeout(() => {
      window.close();
    }, 5000);
  }, [])

  return (

    <div className="bg-red-500 text-white rounded-md p-4 animate-fade-in-out">
      <p className="font-bold text-lg mb-2">¡Pago fallido!</p>
      <p>Por favor, revisa tus datos de pago e intenta nuevamente.</p>
    </div>  

  )
}


