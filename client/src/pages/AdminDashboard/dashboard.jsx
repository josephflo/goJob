import React from "react";
import { Link } from "react-router-dom";
import { RiSearchLine,RiFilter3Line,RiUserLocationLine,RiCloseLine} from "react-icons/ri"
import { Header } from "./header";
import { SideBar } from "./sidebar";
import { Carduser } from "./carduser";


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
                    <Carduser/>                        
                       
                    </div>
                    

                </div>
            </div>
    )

}