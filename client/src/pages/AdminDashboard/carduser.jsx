import React from "react";
import { Link } from "react-router-dom";

export function Carduser (){

    return (
        <Link to="/dashboard/user/detail" className="bg-white rounded-3xl mb-4 p-8 flex gap-8 w-full shadow-lg hover:border-blue-400 border-2 transition-all">
                            <div className="w-[10%] flex items-center justify-center">
                                {/* imagen */}
                                <img src="https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp" className="rounded-full"/>
                            </div>
                             {/* datos */}
                            <div className="w-[70%] ">                               
                                <h1 className="text-xl flex items-center gap-4 mb-2">Nombre Completo<span className="text-xs py-1 px-2 bg-blue-200 font-bold text-blue-600">Tipo de usuario</span>
                                <span className="text-xs py-1 px-2 bg-green-200 font-bold text-green-600">Jobs</span></h1>
                                <p className="text-gray-500 text-md">Direccion Completa</p>
                            </div>
                            <div className="w-[20%] flex flex-col items-end">
                                {/* servicios y fecha */}
                                <div>
                                    <h3 className="text-xl text-gray-500 mb-2">Servicios</h3>
                                    <p className="text-gray-500">Fecha de registro</p>
                                </div>
                            </div>
                         </Link>


    )

}