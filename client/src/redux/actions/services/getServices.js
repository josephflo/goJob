import axios from "axios";
import convertObjToQuery from "../../../helpers/convertObjToQuery";
import { ActionTypes } from "../../constants/actions-types";

export let getAllServices = (objQuery) => async (dispatch) => {
  let queries = {}

  if(objQuery.page) queries.page = objQuery.page
  if(objQuery.page_size) queries.page_size = objQuery.page_size
  if(objQuery.state) queries.state = objQuery.state
  if(objQuery.orderFecha) queries.orderFecha = objQuery.orderFecha

  if(objQuery.tittle) queries.tittle = objQuery.tittle
  if(objQuery.provincia) queries.provincia = objQuery.provincia
  if(objQuery.ciudad) queries.ciudad = objQuery.ciudad
  if(objQuery.job) queries.job = objQuery.job

  const concatQuery = convertObjToQuery(queries);

  try {
    let result = await axios.get(`/service?${concatQuery}`);
    let respuesta = result.data.result;

    console.log("Nueva peticion de services");

    return dispatch({ type: ActionTypes.GET_SERVICE, payload: respuesta });
  } catch (error) {
    throw Error("mallllllllllllll");
  }
};
