import React from "react";
import { Link } from "react-router-dom";
import { RiSearchLine,RiFilter3Line,RiUserLocationLine,RiCloseLine} from "react-icons/ri"
import { Header } from "./header";
import { SideBar } from "./menu";


export default function Dashboard (){

    return (
            <div className="min-h-screen grid grid-gol-1  lg:grid-cols-6">
               <SideBar/>                 
                <div className="col-span-5">
                <Header/>
                {/* Content */}
                <div className="p-10 bg-gray-100 ">
                    <div className="mb-8">
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
                    </div>
                    {/* searchFilter*/}
                    <div className="grid grid-cols-4 gap-4 items-center mb-4">
                    <form className="col-span-2">
                        <div className="relative">
                        <RiSearchLine className="absolute left-2 top-3 text-blue-600" />
                        <input type="text" className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none" placeholder="Buscar" />
                        </div>                        
                    </form >
                    <form className="col-span-1">
                        <div className="relative">
                        <RiUserLocationLine className="absolute left-2 top-3 text-blue-600" />
                        <select type="text" className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none" placeholder="Buscar">
                            <option>añadir filtros</option>
                        </select>
                        </div>                        
                    </form>
                    <form className="col-span-1">
                        <div className="relative">
                        <RiFilter3Line className="absolute left-2 top-3 text-blue-600" />
                        <select type="text" className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none" placeholder="Buscar">
                            <option>añadir filtros</option>
                        </select>
                        </div>                        
                    </form>
                    </div>
                    {/* filters */}
                    <div className="flex items-center flex-wrap gap-4 mb-20">
                        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
                        <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
                            <RiCloseLine/>{""}
                        </button>
                        Filtro1                        
                        </span>
                        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
                        <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
                            <RiCloseLine/>{""}
                        </button>
                        Filtro1                        
                        </span>
                        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
                        <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
                            <RiCloseLine/>{""}
                        </button>
                        Filtro1                        
                        </span>
                        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
                        <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
                            <RiCloseLine/>{""}
                        </button>
                        Filtro1                        
                        </span>
                         <button className="text-gray-500 ml-4">
                        borrar filtros
                        </button>

                            
                    </div>
                    {/* resultados */}
                    <div className="flex items-center justify-between mb-8">
                    <p className="text-gray-500">
                            Hemos encontrado <span className="text-blue-500 font-bold">100</span> usuarios!                            
                </p>
                         <p className="flex items-center gap-2">
                            Ordenado por:
                            <select className="bg-gray-100 text-gray-700 rounded-md border-none">
                            <option className="bg-gray-300" value="opcion1">Asc</option>
                            <option className="bg-blue-500 text-white" value="opcion2">Desc</option>
                            </select>

                </p>

                </div>
                               
                         {/* Card */}
                         <Link to=":idUser" className="bg-white rounded-3xl mb-4 p-8 flex gap-8 w-full shadow-lg hover:border-blue-400 border-2 transition-all">
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
                         <Link to=":idUser" className="bg-white rounded-3xl mb-4 p-8 flex gap-8 w-full shadow-lg hover:border-blue-400 border-2 transition-all">
                            <div className="w-[10%] flex items-center justify-center">
                                {/* imagen */}
                                <img src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/07/25/5fa43c9755611.jpeg" className="rounded-full"/>
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
                       
                    </div>
                    

                </div>
            </div>
    )

}