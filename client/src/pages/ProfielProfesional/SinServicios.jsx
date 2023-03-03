import React from "react";
import { Link } from "react-router-dom";

export default function SinServicios () {
    return (
       
            <div className="bg-gray-100 w-full px-16 md:px-0 h-screen flex items-center justify-center">
    <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-43l lg:text-5xl font-bold tracking-wider text-gray-300">Ups!</p>
        <p className="text-2xl md:text-1xl lg:text-3xl font-bold tracking-wider text-gray-500 mt-4">Aún no tienes servicios creados</p>
        <div className="grid grid-cols-2">
            <div className="flex flex-col">
        <Link to='/create/service'>
              <button className="flex gap-4  md:text-0xl lg:text-1xl hover:bg-blue-600 p-2 text-gray-400 hover:text-white rounded-lg transition-colors">
                Crear Servicios
              </button>
              </Link>
              </div>
              <div className="flex flex-col">
               <Link to='/'>
              <button className="flex gap-4 md:text-0xl lg:text-1xl hover:bg-blue-600 p-2 text-gray-400 hover:text-white rounded-lg transition-colors">
                Home
              </button>
              </Link>
              </div>
              </div>
    </div>
</div>
       
    )
}