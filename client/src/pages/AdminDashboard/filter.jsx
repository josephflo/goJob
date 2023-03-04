import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { provincias } from "../../constants/ciudadesObject";
import { convertirProvinciasAObjeto } from "../../helpers/convertProvinciasToObj";
import { configFilterService } from "../../redux/actions/services/modifyFilterServices";
import Pagination from "../pagination/Pagination";

function Filter({ totalPages }) {
  let configFilterServices = useSelector((state) => state.configFilterServices);//estaddo de redux el 
  //el cual es un objeto igual a este

  // configFilterServices: {
  //   page: 1,
  //   page_size: 15,
  //   state: "pendiente",
  //   tittle: "",
  //   orderFecha: "DESC",
  //   provincia: "Buenos Aires",
  //   ciudad: false,
  //   job: false,
  // },

  let services = useSelector((state) => state.services);//services no existe en el
  //estado global por eso no se usa

  const jobs = useSelector((state) => state.jobs); //jobs es un array de strings de los jobs
  const dispatch = useDispatch();

  //convertimos el array de provincias y ciudades a un obj 
  // se usan los datos de prueba para poder probar el fiiltro
  let provinciasObj = convertirProvinciasAObjeto(provincias);

  //array para ordenar
  let order = [
    { name: "mas recientes", valor: "DESC" },
    { name: "mas antiguos", valor: "ASC" },
  ];

  //El estado local para menu Jobs
  let [selectFilter, setSelectFilter] = useState({
    //...configFilterServices
    page: 1,
    page_size: 5,
    state: "pendiente",
    tittle: "",
    orderFecha: "DESC",
    provincia: "Buenos Aires",
    ciudad: false,
    job: false,
  });

  // Estados de la paginacion prev next paginat
  const [page, setPage] = useState(1);
  const [page_size, setPage_size] = useState(15)

  // useEffect(() => {
  //   configFilterService({
  //     ...selectFilter,
  //     totalPages: services.totalPages,
  //   });
  // }, []);

  let handleOptionFilter = (event) => { //recive el evento Onchange es un objeto de un select
    let propiedadFilter = event.target.options[event.target.selectedIndex] //en el objeto de un select con el array selecciamos el option
      .getAttribute("name") //obtenemos el atributo name del option debe tener un name="""
      .toString();  //lo convertimos a string

    let value = event.target.value;  //el valor de la Option del select que escoge el usuario debe tener value=""

    let newConfig = {  //un array donnde vamos a modificar el estado de redux configFilterServices
      ...configFilterServices, // la copia
      [propiedadFilter]: value,// assigamos la propiead puede ser un job,provincia,fecha y ciudad 
      // job:carpintero o ciudad:Mexico depende del caso
    };

    if (propiedadFilter == "provincia") {//si la proopiedad es provincia en el option metele false
      newConfig.ciudad = false;
    }

    setSelectFilter(newConfig);  //cambia el estado local por la nueva data en newConfig
    dispatch(configFilterService(newConfig)); //
    
  };

  let handlerFilterName = (event) => {
    let value = event.target.value;  //recibe lo que ecriba en el input

    setSelectFilter({ //guarda el valor del input en el estado
      ...selectFilter,
      tittle: value,
    });

    let newConfig = {}; // el oobjeto donde se guardara el estado de redux
    if (value.length >= 3) { //si las letras son 3 o mas 
      newConfig = {    //seteamos 
        ...configFilterServices, //hacemos la copia del estado redux
        tittle: value,   //seteamos el valor
      };
      dispatch(configFilterService(newConfig));//reemplaza el estado configFilterService
      //por el nuevo newConfig
    } else if (value.length <= 0) {
      newConfig = {
        ...configFilterServices,
        tittle: "",
      };
      dispatch(configFilterService(newConfig));//Modifica el esstado de redux configFilterService con newconfig
    }
  };

// La función "paginatePrev" se utiliza para mostrar los resultados de la página anterior.
// Cuando se hace clic en el botón previo, disminuye la página 
//en uno y luego llama a la función "configFilterService" con los nuevos valores de configuración.
  
const paginatePrev = (e) => {
    e.preventDefault();  //evitamos el submit por defecto y recargue la pagina
    if (page === 1) return; // si page es 1 no hacemos nada
    setPage(page - 1); //de lo contrario seteamos la pagina -1 al valor
    console.log(e.target.value); // esto es solo para corroborar
    let newConfig = {    // con el click seteamos newConfig 
      ...configFilterServices,  
      page: page - 1,   //actualizaos el valor
    };
    dispatch(configFilterService(newConfig));// actualizamos el estado global
  };
  
  //misma logica solo se suma
  const paginateNext = (e) => {
    e.preventDefault();
    if (page === totalPages) return;
    setPage(page + 1);
    let newConfig = {
      ...configFilterServices,
      page: page + 1,
    };
    dispatch(configFilterService(newConfig));
  };

  const paginate = (e, num) => {// en el componente pagination se le pasa ambos argumentos evento e index
    // e.preventDefault();
    setPage(num); // setea el estado de la pagina con el index que le llega de Pagination
    let newConfig = { 
      ...configFilterServices,
      page: num,      //seteamos la pagina actual 
    };
    dispatch(configFilterService(newConfig));// actualizamos el estado de redux
  };

  const fn = (e) => {
    setPage_size(e.target.value);
    setPage(1);
    let newConfig = {
      ...configFilterServices,
      page: 1,
      page_size: parseInt(e.target.value),
    };
    dispatch(configFilterService(newConfig));
  };

  return (
    <>
      <div className="p-10 bg-gray-100 ">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Página de Servicios</h1>
        </div>
        {/* searchFilter*/}
        <div className="grid grid-cols-4 gap-4 items-center mb-4">
          <form className="col-span-2">
            <div className="relative">
              <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
                Por nombre
              </p>
              <input
                type="text"
                placeholder="buqueda por nombre"
                name={"tittle"}
                value={selectFilter.tittle}
                className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
                onChange={handlerFilterName}
              />
            </div>
          </form>

          {/* Barra de eleccion Jobs */}
          <div className="relative w-full">
            <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
              Por profesion
            </p>
            <select
              value={selectFilter.job}
              onChange={handleOptionFilter}
              className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
              // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
            >
              <option value={false} name={"job"}>
                {"All"}
              </option>
              {jobs.length &&
                jobs.map((job, ind) => (
                  <option key={ind} value={job.id} name={"job"}>
                    {job.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Barra de eleccion orderFecha*/}
          <div className="relative w-full">
            <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
              Por lanzamiento
            </p>
            <select
              value={selectFilter.orderFecha}
              onChange={handleOptionFilter}
              className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
              // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
            >
              {order.length &&
                order.map((ord, ind) => (
                  <option key={ind} value={ord.valor} name={"orderFecha"}>
                    {ord.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Barra de eleccion provincia*/}
          <div className="relative w-full">
            <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
              Por Provincia
            </p>
            <select
              defaultValue={Object.keys(provinciasObj)[0]}
              value={selectFilter.provincia}
              onChange={handleOptionFilter}
              className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
              // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
            >
              {/* <option key={1} value={false} name={"provincia"}>{"All"}</option> */}
              {provinciasObj &&
                Object.keys(provinciasObj).length &&
                Object.keys(provinciasObj).map((prov, ind) => (
                  <option key={ind + 1} value={prov} name={"provincia"}>
                    {prov}
                  </option>
                ))}
            </select>
          </div>

          {/* Barra de eleccion ciudad*/}
          <div className="relative w-full">
            <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700">
              Por ciudad
            </p>
            <select
              value={selectFilter.ciudad}
              onChange={handleOptionFilter}
              className="p-2 py-2 pl-8 pr-4 outline-none  w-full border-none"
              // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
            >
              <option key={1} value={false} name={"ciudad"}>
                {"All"}
              </option>
              {selectFilter.provincia != false &&
                selectFilter.provincia &&
                provinciasObj[selectFilter.provincia].map((ciudad, ind) => (
                  <option key={ind + 1} value={ciudad} name={"ciudad"}>
                    {ciudad}
                  </option>
                ))}
            </select>
          </div>
        </div>
        {/* <div>
        <select name="select" onChange={fn}>
        <option value="3" selected>
        3
        </option>
        <option value="5">5</option>
        <option value="7">7</option>
        </select>
      </div> */}
      </div>
      <div className="p-3 bg-gray-100">
        <div className="flex justify-center">
          <Pagination
            paginatePrev={paginatePrev}
            paginateNext={paginateNext}
            paginate={paginate}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
}

export default Filter;