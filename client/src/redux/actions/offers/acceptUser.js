import axios from "axios";
import { ActionTypes } from "../../constants/actions-types";

export const acceptUser = (postulante_id, id) => {
  return async (dispatch) => {
    await axios.post(`/user/service/elegir/trabajador`, {
      trabajador: postulante_id,
      service: id,
    });

    return dispatch({
      type: ActionTypes.ACCEPT_USER,
      payload: {},
    });
  };
};
