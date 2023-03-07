import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  configFilterPerfilOffer,
  configFilterPerfilPostulaciones,
} from "../../../redux/actions/professionalActions";

export default function FilterPostulaciones() {
  let order = [
    { name: "Default", valor: "" },
    { name: "Más recientes", valor: "DESC" },
    { name: "Más antiguos", valor: "ASC" },
  ];

  let configFilterServices = useSelector(
    (state) => state.configFilterPerfilPostulaciones
  );
  let [selectFilter, setSelectFilter] = useState(configFilterServices.tittle);

  const dispatch = useDispatch();

  let handlerFilterName = (event) => {
    let value = event.target.value;

    setSelectFilter(value);

    let newConfig = {};
    if (value.length >= 3) {
      newConfig = {
        ...configFilterServices,
        tittle: value,
      };
      dispatch(configFilterPerfilPostulaciones(newConfig));
    } else if (value.length <= 0) {
      newConfig = {
        ...configFilterServices,
        tittle: "",
      };
      dispatch(configFilterPerfilPostulaciones(newConfig));
    }
  };

  let handleOptionFilter = (event) => {
    let propiedadFilter =
      event.target.options[event.target.selectedIndex].getAttribute("name");

    let value = event.target.value;

    let newConfig = {
      ...configFilterServices,
      [propiedadFilter]: value,
    };

    // if (propiedadFilter == "provincia") {
    //   newConfig.ciudad = false;
    // }
    console.log(newConfig);

    dispatch(configFilterPerfilPostulaciones(newConfig));
  };
  return (
    <>
      <form className="">
        <div className="">
          <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700 text-xs md:text-sm lg:text-base">
            Por nombre
          </p>
          <input
            type="text"
            placeholder="Búsqueda por nombre"
            name={"tittle"}
            value={selectFilter}
            className="p-2 py-2 pl-3 pr-4 outline-none  w-[400px] text-xs md:text-sm lg:text-base"
            onChange={handlerFilterName}
          />
        </div>
      </form>

      {/* Barra de eleccion orderFecha*/}
      <div className="">
        <p className="font-sans pt-1 pb-1 not-italic font-medium text-gray-700 text-xs md:text-sm lg:text-base">
          Por lanzamiento
        </p>
        <select
          value={configFilterServices.order}
          onChange={handleOptionFilter}
          className="p-2 py-2 pl-3 pr-4 text-xs md:text-sm lg:text-base"
          // className="absolute z-10 right-0 top-full mt-2 w-full bg-gray-200 rounded-md px-4 py-2 text-sm"
        >
          {order.length &&
            order.map((ord, ind) => (
              <option key={ind} value={ord.valor} name={"fecha_publicacion"}>
                {ord.name}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}
