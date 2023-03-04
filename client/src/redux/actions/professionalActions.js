//** Dependencies */
import axios from "axios";
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

export const getMyTrabajos = ()  => {
  return async (dispatch) => {
    const result = await axios.get(`/user/services/MyTrabajos`);
    return dispatch({
      type: ActionTypes.MY_TRABAJOS,
      payload: result.data.result,
    });
  };
};

export const getMyServices = ()  => {
  return async (dispatch) => {
    const result = await axios.get(`/user/services/MyServices`);
    return dispatch({
      type: ActionTypes.MY_SERVICES,
      payload: result.data.result,
    });
  };
};

export const getMyPostulaciones = ()  => {
  return async (dispatch) => {
    const result = await axios.get(`/user/services/Postulaciones`);  
    return dispatch({
      type: ActionTypes.MY_POSTULACIONES,
      payload: result.data.result,
    });
  };
};

