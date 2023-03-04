import axios from "axios";
import convertObjToQuery from "../../../helpers/convertObjToQuery";
import { ActionTypes } from "../../constants/actions-types";

export let getAllServices = (objQuery) => async (dispatch) => {
  let queries = {};

  if (objQuery.page) queries.page = objQuery.page;
  if (objQuery.page_size) queries.page_size = objQuery.page_size;
  if (objQuery.state && objQuery.state != false) queries.state = objQuery.state;
  if (objQuery.orderFecha && objQuery.orderFecha != false)
    queries.orderFecha = objQuery.orderFecha;

  if (objQuery.tittle && objQuery.tittle != "" && objQuery.tittle != false)
    queries.tittle = objQuery.tittle;
  if (objQuery.provincia && objQuery.provincia != false)
    queries.provincia = objQuery.provincia;
  if (
    objQuery.ciudad &&
    objQuery.ciudad != false &&
    objQuery.ciudad != "false"
  ) {
    queries.ciudad = objQuery.ciudad;
  }
  if (objQuery.job && objQuery.job != false) queries.job = objQuery.job;

  const concatQuery = convertObjToQuery(queries);
  let result;
  try {
    result = await axios.get(`/service?${concatQuery}`);
    let respuesta = result.data;

    console.log("Nueva peticion de services");
    console.log(respuesta.result);

    queries = {};

    return dispatch({
      type: ActionTypes.GET_SERVICE,
      payload: respuesta,
    });
  } catch (error) {
    console.log("No trajo services");
    return dispatch({
      type: ActionTypes.GET_SERVICE,
      payload: [],
    });
  }
};

export const cleanAllServices = () => {
  return (dispatch) => {
    return dispatch({
      type: ActionTypes.CLEAN_ALL_SERVICES,
      payload: {},
    });
  };
};
