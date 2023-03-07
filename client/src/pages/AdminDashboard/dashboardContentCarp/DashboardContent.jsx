import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";
import { SideBar } from "../sidebar";
import { Header } from "../header";


  function DashboardContent({servicesDashboard}) {

   const ultimaDescripcion = servicesDashboard.ultimosPagos[0]?.description
   const longitud = 30
   const descripcionCorta = ultimaDescripcion.slice(0,longitud) + "..."

   const ultimaDescripcion2 = servicesDashboard.ultimosPagos[1]?.description
   const descripcionCorta2 = ultimaDescripcion.slice(0,longitud) + "..."

  
 
    return (
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <SideBar/> 

     
        { servicesDashboard.ultimosPagos.length  &&
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
              <h4 className="text-2xl">Ganancias totales</h4>
              <span className="text-5xl text-white">{Math.round(servicesDashboard.serviciosGananciasTodo*0.15)}</span>
              <span className="py-1 px-3 bg-blue-900 rounded-full">
               {"+ " + Math.round(servicesDashboard.gananciasEsteMes*0.15) + " este mes"}
              </span>
            </div>
            {/* Card 2 */}
            <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
              <div className="flex items-center gap-4 bg-blue-100 rounded-xl p-4">
                <span className="bg-blue-600 text-white text-2xl font-bold p-4 rounded-xl">
                  {servicesDashboard.userTotal}
                </span>
                <div>
                  <h3 className="font-bold">Usuarios</h3>
                  <p className="text-gray-500">Registrados</p>
                </div>
              </div>
              <div className="bg-blue-100 rounded-xl p-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white text-2xl font-bold p-4 rounded-xl">
                    {servicesDashboard.serviciosEsteMesCount}
                  </span>
                  <div>
                    <h3 className="font-bold">Servicios</h3>
                    <p className="text-gray-500">{servicesDashboard.serviciosEsteMesCount+" este mes"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm" >
                <a className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full font-medium" href="dashboard/services/proceso">
                    Proceso
                  </a>
                  <a className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium" href="dashboard/services/terminado">
                    Finalizado
                  </a>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
              <h1 className="text-2xl font-bold mb-8">Ultimos Usuarios Registrados</h1>
              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={servicesDashboard.ultimoUser[0].imagePerfil}
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{servicesDashboard.ultimoUser[0].firstName}</h3>
                    <p className="text-gray-500">{servicesDashboard.ultimoUser[0].role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  {servicesDashboard.ultimoUser[1].imagePerfil? <img
                    src={servicesDashboard.ultimoUser[1]?.imagePerfil}
                    className="w-14 h-14 object-cover rounded-full"
                  />: <img
                  src=""
                  className=""
                />}
                 
                  <div>
                    <h3 className="font-bold">{servicesDashboard.ultimoUser[1].firstName}</h3>
                    <p className="text-gray-500">{servicesDashboard.ultimoUser[1].role}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link
                    to="/dashboard/users"
                    className="hover:text-gray-400 transition-colors hover:underline"
                  >
                    ver usuarios
                  </Link>
                </div>
              </div>
            </div>
          </section>
     
          <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
            <div>
              <h1 className="text-2xl font-bold mb-8">Ultimos Pagos Recibidos</h1>
              <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            
                <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                  <div className="col-span-2 flex items-center gap-4">
                    {servicesDashboard.ultimosPagos[0].imageServiceUrl === "sin foto" ?
                     <img
                     src="https://la-oruga.com/wp-content/uploads/2022/04/port.png"
                     className="w-14 h-14 object-cover rounded-xl"
                   />
                    : <img
                    src={servicesDashboard.ultimosPagos[0]?.imageServiceUrl}
                    className="w-14 h-14 object-cover rounded-xl"
                  />}
                    
                    {servicesDashboard.ultimosPagos[0].tittle?
                    <div>
                    <h3 className="font-bold">{servicesDashboard.ultimosPagos[0]?.tittle}</h3>
                    <p className="text-gray-500">{descripcionCorta}</p>
                  </div>:<div>
                    <h3 className="font-bold"></h3>
                    <p className="text-gray-500"></p>
                  </div>}
                     
                  </div>
                  <div>
                    <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                      Pagado
                    </span>
                  </div>
                  <div>
                    {servicesDashboard.ultimosPagos[0].presupuesto?
                    <span className="font-bold">{"$ "+servicesDashboard.ultimosPagos[0]?.presupuesto}</span>:
                    <span className="font-bold"></span>}
                    
                  </div>
                </div>
                {/* Card 2 */}
                <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                  <div className="col-span-2 flex items-center gap-4">
                    {
                      servicesDashboard.ultimosPagos[1].imageServiceUrl === "sin foto"?
                      <img
                    src="https://la-oruga.com/wp-content/uploads/2022/04/port.png"  
                     className="w-14 h-14 object-cover rounded-xl" />
                      :  <img
                      src={servicesDashboard.ultimosPagos[1]?.imageServiceUrl}  
                       className="w-14 h-14 object-cover rounded-xl"
                    />                   
                    }
                    
                    <div>
                      <h3 className="font-bold">{servicesDashboard.ultimosPagos[1]?.tittle}</h3>
                      <p className="text-gray-500">{descripcionCorta2}</p>
                    </div>
                  </div>
                  <div>
                    {servicesDashboard.ultimosPagos[1]?
                    <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    Pagado
                  </span>:<span >
                               </span>}
                  
                  </div>
                  <div>
                    {servicesDashboard.ultimosPagos[1]?  
                    <span className="font-bold">{"$ "+servicesDashboard.ultimosPagos[1]?.presupuesto}</span>:
                    <span className="font-bold"></span>}
                  
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
                      src={servicesDashboard.ultimoService?.userId.imagePerfil}
                      className="w-14 h-14 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">{servicesDashboard.ultimoService?.userId.firstName+" "+servicesDashboard.ultimoService?.userId.lastName}</h3>
                      <p className="text-gray-500">{}</p>
                    </div>
                  </div>
                  <div>
                    <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                      Design
                    </span>
                  </div>
                </div>
                {servicesDashboard.ultimoService.tittle?
                 <div>
                 <h5 className="text-lg font-bold">
                   {servicesDashboard.ultimoService?.tittle}
                 </h5>
                 <p className="text-gray-500">
                   {servicesDashboard.ultimoService?.description}
                 </p>
               </div>:
                <div>
                <h5 className="text-lg font-bold"> </h5>
                <p className="text-gray-500"></p>
              </div>}
               
                <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                  {servicesDashboard.ultimoService.presupuesto?
                  <div>
                    <sup className="text-sm text-gray-500">$</sup>{" "}
                    <span className="text-2xl font-bold mr-2">{servicesDashboard.ultimoService?.presupuesto}</span>
                  </div>:
                  <div>
                  <sup className="text-sm text-gray-500"></sup>{" "}
                  <span className="text-2xl font-bold mr-2"></span>
                 </div>}
                  
                  <div>
                    {/* {servicesDashboard.Jobs.length? servicesDashboard.Jobs.map((job, index)=>
                      <span key={index} className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                      {job}
                      </span>
                    ):""} */}
                   
                  </div>
                </div>
              </div>
            </div>
          </section>

          </div>
          
        </div>
        }

      </div>
    );
  }
  
  export default DashboardContent;