import axios from "axios";
import convertObjToQuery from "../../../helpers/convertObjToQuery";
import { ActionTypes } from "../../constants/actions-types";

export let getAllProfesionales = (objQuery) => async (dispatch) => {
  let queries = {};

  if (objQuery.page) queries.page = objQuery.page;
  if (objQuery.page_size) queries.page_size = objQuery.page_size;

  if (objQuery.name && objQuery.name != "")
    queries.name = objQuery.name;
  if (objQuery.job) queries.job = objQuery.job;

  if (objQuery.provincia) queries.provincia = objQuery.provincia;
  if (objQuery.ciudad) queries.ciudad = objQuery.ciudad;
  if (objQuery.dias) queries.dias = objQuery.dias;

  if (objQuery.horario && objQuery.horario.length) queries.horario = objQuery.horario;
  if (objQuery.role) queries.role = objQuery.role;

  if (objQuery.orderName) queries.orderName = objQuery.orderName;
  if (objQuery.orderRating) queries.orderRating = objQuery.orderRating;


  const concatQuery = convertObjToQuery(queries);

  try {
    let result = await axios.get(`/user?${concatQuery}`);
    let respuesta = result.data;

    console.log("Nueva peticion de users");
    console.log(respuesta.result);

    return dispatch({
      type: ActionTypes.GET_USERS,
      payload: respuesta
    });
  } catch (error) {
    console.log("No trajo services");
    throw Error("mallllllllllllll");
  }
};


export let configFilterUser = (newConfig) => {
    return {
      type: ActionTypes.CONFIG_FILTER_USER,
      payload: newConfig,
    };
  };
  