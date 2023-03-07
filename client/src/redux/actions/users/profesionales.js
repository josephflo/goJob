import axios from "axios";
import convertObjToQuery from "../../../helpers/convertObjToQuery";
import { ActionTypes } from "../../constants/actions-types";

export let getAllProfesionales = (objQuery) => async (dispatch) => {
  let queries = {};

  if (objQuery.page) queries.page = objQuery.page;
  if (objQuery.page_size) queries.page_size = objQuery.page_size;
  if (objQuery.state !== "none") queries.state = objQuery.state;

  if (objQuery.name && objQuery.name !== "" && objQuery.name !== false)
    queries.name = objQuery.name;
  if (objQuery.job && objQuery.job !== "false") queries.job = objQuery.job;

  if (objQuery.provincia && objQuery.provincia != "false") queries.provincia = objQuery.provincia;
  if (objQuery.ciudad && objQuery.ciudad != false && objQuery.ciudad != "false") queries.ciudad = objQuery.ciudad;
  if (objQuery.dias && objQuery.dias != "false" && objQuery.dias !== false) queries.dias = objQuery.dias;

  if (objQuery.horario && objQuery.horario != "false" && objQuery.horario !== false) queries.horario = objQuery.horario;
  if (objQuery.role && objQuery.role != "false") queries.role = objQuery.role;

  if (objQuery.orderName && objQuery.orderName !== "false") queries.orderName = objQuery.orderName;
  if (objQuery.orderRating && objQuery.orderRating !== "false") queries.orderRating = objQuery.orderRating;


  const concatQuery = convertObjToQuery(queries);
  let result 
  try {
    result = await axios.get(`/user?${concatQuery}`);
    let respuesta = result.data;

    console.log("Nueva peticion de users");
    //console.log(respuesta.result);

    queries = {};
    return dispatch({
      type: ActionTypes.GET_ALL_USERS_FILTRADO,
      payload: respuesta
    });
  } catch (error) {
    console.log("No trajo users");
    return dispatch({
      type: ActionTypes.GET_ALL_USERS_FILTRADO,
      payload: []
    });  }
};


export let configFilterUserPut = (newConfig) => {
    return {
      type: ActionTypes.CONFIG_FILTER_USER,
      payload: newConfig,
    };
  };
  