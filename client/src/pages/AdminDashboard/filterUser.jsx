import React from "react";
import {
  RiSearchLine,
  RiFilter3Line,
  RiUserLocationLine,
  RiCloseLine,
} from "react-icons/ri";

export function FilterUser({ totalPages }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 items-center mb-4">
        <form className="col-span-2">
          <div className="relative">
            <RiSearchLine className="absolute left-2 top-3 text-blue-600" />
            <input
              type="text"
              placeholder="buqueda por nombre"
              name={"tittle"}
              className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
            />
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative">
            <RiUserLocationLine className="absolute left-2 top-3 text-blue-600" />
            <select
              onChange={""}
              type="text"
              className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
              placeholder="Buscar"
              value="hola"
            >
              <option value="false" name={"1"}>
                añadir filtros1
              </option>
              <option value="true" name={"2"}>
                añadir filtros2
              </option>
              <option value="false" name={"3"}>
                añadir filtros3
              </option>
              <option value="true" name={"4"}>
                añadir filtros4
              </option>
            </select>
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative">
            <RiFilter3Line className="absolute left-2 top-3 text-blue-600" />
            <select
              type="text"
              className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
              placeholder="Buscar"
            >
              <option>añadir filtros</option>
            </select>
          </div>
        </form>
      </div>

      <div className="flex items-center flex-wrap gap-4 mb-20">
        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
          <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
            <RiCloseLine />
            {""}
          </button>
          Filtro1
        </span>
        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
          <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
            <RiCloseLine />
            {""}
          </button>
          Filtro1
        </span>
        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
          <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
            <RiCloseLine />
            {""}
          </button>
          Filtro1
        </span>
        <span className="bg-white flex items-center gap-4 py-2 px-6 rounded-full">
          <button className="bg-blue-100 p-1 rounded-full text-blue-600 text-xs">
            <RiCloseLine />
            {""}
          </button>
          Filtro1
        </span>
        <button className="text-gray-500 ml-4">borrar filtros</button>
      </div>

      <div className="flex items-center justify-between mb-8">
        <p className="text-gray-500">
          Hemos encontrado <span className="text-blue-500 font-bold">{totalPages.length}</span>{" "}
          usuarios!
        </p>
        <p className="flex items-center gap-2">
          Ordenado por:
          <select className="bg-gray-100 text-gray-700 rounded-md border-none">
            <option className="bg-gray-300" value="opcion1">
              Asc
            </option>
            <option className="bg-blue-500 text-white" value="opcion2">
              Desc
            </option>
          </select>
        </p>
      </div>
    </div>
  );
}