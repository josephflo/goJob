import React from "react";
import { Link } from "react-router-dom";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";
import { SideBar } from "./sidebar";
import { Header } from "./header";

export function DashboardContent() {
    return (
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <SideBar/> 
        <div className="lg:col-span-3 xl:col-span-5 p-8 h-[100vh] overflow-y-scroll">          
          <Header/>
            
          <div className="p-10 bg-gray-100" >
          <div className="mb-8">
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
            </div>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
            {/* Card 1 */}
            <div className="bg-blue-600 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
              <RiLineChartLine className="text-5xl" />
              <h4 className="text-2xl">Ganancias</h4>
              <span className="text-5xl text-white">$ 8,350</span>
              <span className="py-1 px-3 bg-blue-900 rounded-full">
                + 10% este mes
              </span>
            </div>
            {/* Card 2 */}
            <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
              <div className="flex items-center gap-4 bg-blue-100 rounded-xl p-4">
                <span className="bg-blue-600 text-white text-2xl font-bold p-4 rounded-xl">
                  98
                </span>
                <div>
                  <h3 className="font-bold">Usuarios</h3>
                  <p className="text-gray-500">Registrados</p>
                </div>
              </div>
              <div className="bg-blue-100 rounded-xl p-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white text-2xl font-bold p-4 rounded-xl">
                    32
                  </span>
                  <div>
                    <h3 className="font-bold">Servicios</h3>
                    <p className="text-gray-500">10 este mes</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="bg-blue-300 py-1 px-4 rounded-full">
                    Proceso
                  </span>
                  <span className="bg-blue-300 py-1 px-4 rounded-full">
                    Finalizado
                  </span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
              <h1 className="text-2xl font-bold mb-8">Servicios</h1>
              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Titulo del Servicio</h3>
                    <p className="text-gray-500">jobs lista</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Titulo del Servicio</h3>
                    <p className="text-gray-500">jobs lista</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link
                    to="to=/dashboard/services"
                    className="hover:text-gray-400 transition-colors hover:underline"
                  >
                    ver servicios
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* Section 2 */}
          <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
            <div>
              <h1 className="text-2xl font-bold mb-8">Pagos Recibidos</h1>
              <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
                {/* Card 1 */}
                <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                  <div className="col-span-2 flex items-center gap-4">
                    <img
                      src="https://img.freepik.com/foto-gratis/hombre-joven-hermoso-contento-camiseta-azul-que-senala-lado_1262-17845.jpg"
                      className="w-14 h-14 object-cover rounded-xl"
                    />
                    <div>
                      <h3 className="font-bold">Nombre de Usuario</h3>
                      <p className="text-gray-500">jobs</p>
                    </div>
                  </div>
                  <div>
                    <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                      Pagado
                    </span>
                  </div>
                  <div>
                    <span className="font-bold">$ 1,200.87</span>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                  <div className="col-span-2 flex items-center gap-4">
                    <img
                      src="https://img.freepik.com/foto-gratis/alegre-joven-deportista-posando-mostrando-pulgares-arriba-gesto_171337-8194.jpg"
                      className="w-14 h-14 object-cover rounded-xl"
                    />
                    <div>
                      <h3 className="font-bold">Nombre de usuario</h3>
                      <p className="text-gray-500">Jobs</p>
                    </div>
                  </div>
                  <div>
                    <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                      cancelado
                    </span>
                  </div>
                  <div>
                    <span className="font-bold">$ 12,998.88</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
                <div>
                  <RiHashtag className="text-4xl -rotate-12" />
                </div>
                <div>
                  <h5 className="font-bold text-white">Contacta con el equipo</h5>
                  <h5>ve al canal de slack</h5>
                </div>
                <div className="w-full xl:w-auto">
                  <button className="bg-blue-600 py-2 px-6 rounded-xl text-white w-full">
                    Unete
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-8">Ultimo Servicio</h1>
              <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                      className="w-14 h-14 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">Usuario</h3>
                      <p className="text-gray-500">hace 10m</p>
                    </div>
                  </div>
                  <div>
                    <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                      Design
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-bold">
                    Titulo del Servicio
                  </h5>
                  <p className="text-gray-500">
                    Descripcion del Servicio
                  </p>
                </div>
                <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                  <div>
                    <sup className="text-sm text-gray-500">$</sup>{" "}
                    <span className="text-2xl font-bold mr-2">8,700</span>
                  </div>
                  <div>
                    <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                      jobs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          </div>
          
        </div>
       
      </div>
    );
  }
  
  export default DashboardContent;