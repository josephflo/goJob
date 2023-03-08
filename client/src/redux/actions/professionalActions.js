//** Dependencies */
import axios from "axios";
import convertObjToQuery from "../../helpers/convertObjToQuery";
//** Constants */
import { ActionTypes } from "../constants/actions-types";

//** ACTIONS USERS **********************************/

export const getProfessionalById = (id) => {
  return async (dispatch) => {
    const result = await axios.get(`/user/get/${id}`);
    return dispatch({
      type: ActionTypes.PROFESSIONAL_DETAIL,
      payload: result.data.result,
    });
  };
};

export const getMyTrabajos = (input) => {
  return async (dispatch) => {
    let queries = {};

    if (input.state) queries.state = input.state;
    if (input.tittle) queries.tittle = input.tittle;
    if (input.fecha_publicacion)
      queries.fecha_publicacion = input.fecha_publicacion;

    const concatQuery = convertObjToQuery(queries);

    const result = await axios.get(`/user/services/MyTrabajos?${concatQuery}`);
    return dispatch({
      type: ActionTypes.MY_TRABAJOS,
      payload: result.data.result,
    });
  };
};

export const getMyServices = (input) => {
  return async (dispatch) => {
    let queries = {};

    if (input.state) queries.state = input.state;
    if (input.tittle) queries.tittle = input.tittle;
    if (input.fecha_publicacion)
      queries.fecha_publicacion = input.fecha_publicacion;

    const concatQuery = convertObjToQuery(queries);

    const result = await axios.get(`/user/services/MyServices?${concatQuery}`);
    return dispatch({
      type: ActionTypes.MY_SERVICES,
      payload: result.data.result,
    });
  };
};

export const configFilterPerfilOffer = (input) => {
  return {
    type: ActionTypes.CONFIG_FILTER_PERFIL_OFFER,
    payload: input,
  };
};
export const configFilterPerfilJobs = (input) => {
  return {
    type: ActionTypes.CONFIG_FILTER_PERFIL_JOBS,
    payload: input,
  };
};
export const configFilterPerfilPostulaciones = (input) => {
  return {
    type: ActionTypes.CONFIG_FILTER_PERFIL_POSTULACIONES,
    payload: input,
  };
};

export const getMyPostulaciones = (input) => {
  return async (dispatch) => {
    let queries = {};

    if (input?.tittle) queries.tittle = input.tittle;
    if (input?.fecha_publicacion)
      queries.fecha_publicacion = input.fecha_publicacion;

    const concatQuery = convertObjToQuery(queries);

    try {
      const result = await axios.get(
        `/user/services/Postulaciones?${concatQuery}`
      );
      return dispatch({
        type: ActionTypes.MY_POSTULACIONES,
        payload: result.data.result,
      });
    } catch (error) {
      console.log("No está autenticado getMyPostulaciones");
    }
  };
};

// Mi Perfil - Profesional

export const stateSelected = (input) => {
  return async (dispatch) => {
    return dispatch({
      type: ActionTypes.STATE_SELECTED,
      payload: input,
    });
  };
};

// Mi Perfil - Comun

export const stateSelectedComun = (input) => {
  return async (dispatch) => {
    return dispatch({
      type: ActionTypes.STATE_SELECTED_COMUN,
      payload: input,
    });
  };
};
