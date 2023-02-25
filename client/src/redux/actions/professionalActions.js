//** Dependencies */
import axios from "axios";
//** Constants */
import { ActionTypes } from "../constants/actions-types";

//** ACTIONS USERS **********************************/

export const getProfessionalById = (id) => {
  return async (dispatch) => {
    const result = await axios.post(`/user/get/${id}`);
    return dispatch({
      type: ActionTypes.PROFESSIONAL_DETAIL,
      payload: result.data,
    });
  };
};
